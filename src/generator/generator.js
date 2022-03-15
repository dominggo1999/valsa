import short from 'short-uuid';
import english from './seeds/english.json';
import swedish from './seeds/swedish.json';
import germany from './seeds/germany.json';
import spanish from './seeds/spanish.json';
import italian from './seeds/italian.json';
import { rand } from '../util/random';

const languages = {
  english,
  swedish,
  germany,
  spanish,
  italian,
};

const vowels = ['a', 'e', 'i', 'o', 'u'];
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q',
  'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

const countFreq = [
  2, 2,
  3, 3, 3, 3, 3,
  4, 4,
  5,
];

const randomCount = () => {
  const randomIndex = Math.ceil(Math.random() * countFreq.length - 1);
  return countFreq[randomIndex];
};

const isConsonant = (l) => {
  return consonants.includes(l);
};

const doubleConsonant = (arr) => {
  if(arr.length === 2) {
    const firstLetter = arr[0];
    const secondLetter = arr[1];

    return isConsonant(firstLetter) && isConsonant(secondLetter);
  }
};

const allConsonant = (str) => {
  const arr = str.split('');
  let countedConsonant = 0;
  if(arr.length > 2) {
    arr.forEach((i) => {
      if(isConsonant(i)) {
        countedConsonant += 1;
      }
    });
  }

  return countedConsonant === arr.length;
};

const cutWord = (word) => {
  word = word.trim().toLowerCase();
  const letters = word.split('');

  const result = [];

  while(letters.length) {
    const cutted = letters.splice(0, randomCount()).join('');
    if(cutted.length > 1 && !doubleConsonant(cutted) && !allConsonant(cutted)) {
      result.push(cutted);
    }
  }

  return result;
};

const genWordTwo = (wordOne, list) => {
  const wordTwo = list[rand(list.length - 1)];

  if(wordOne === wordTwo) {
    return genWordTwo(wordOne, list);
  }

  return wordTwo;
};

const genWords = (list, prefix, suffix) => {
  const wordOne = list[rand(list.length - 1)];
  const wordTwo = genWordTwo(wordOne, list);
  const syllablesOne = cutWord(wordOne);
  const syllablesTwo = cutWord(wordTwo);
  const start = syllablesOne[rand(syllablesOne.length - 1)];
  const ending = syllablesTwo[rand(syllablesTwo.length - 1)];
  const result = prefix + start + ending + suffix;

  if(result.indexOf('undefined') !== -1 || !result) {
    return genWords(list, prefix, suffix);
  }

  return result;
};

export const pseudoWords = (options) => {
  const {
    language, wordCount = 10, prefix = '', suffix = '',
  } = options || {};
  const list = language ? languages[language] : languages.english;
  const words = [];

  for (let i = 0; i < wordCount; i += 1) {
    const generatedWords = genWords(list, prefix, suffix);
    words.push(generatedWords.trim());
  }

  return words.map((w) => {
    return {
      word: w,
      id: short.generate(),
    };
  });
};
