import React, { useState, useRef, useEffect } from 'react';
import { BiCopy, BiSearchAlt2 } from 'react-icons/bi';
import { GoCheck } from 'react-icons/go';
import {
  WordCardWrapper,
  ActionButtons,
  ActionIcon,
  LoadingIcon,
} from './WordCard.style';
import { searchSelector } from '../../store/useSearchStore';

const queryPointer = 'valsaquery10';

const dictionaryCheck = {
  english: `https://www.oxfordlearnersdictionaries.com/definition/english/${queryPointer}?q=${queryPointer}`,
  germany: `https://www.collinsdictionary.com/dictionary/german-english/${queryPointer}`,
  spanish: `https://www.collinsdictionary.com/dictionary/spanish-english/${queryPointer}`,
  italian: `https://www.collinsdictionary.com/dictionary/italian-english/${queryPointer}`,
  swedish: `https://en.bab.la/dictionary/swedish-english/${queryPointer}`,
};

const WordCard = ({ word, height }) => {
  const [copyLoading, setCopyLoading] = useState(false);
  const loadingTimeRef = useRef();
  const language = searchSelector('language');

  const copyWord = () => {
    navigator.clipboard.writeText(word);
    setCopyLoading(true);
    loadingTimeRef.current = setTimeout(() => {
      setCopyLoading(false);
    }, 1000);
  };

  const checkWordInDictionary = () => {
    const dictionary = dictionaryCheck[language];
    const url = dictionary.replaceAll(queryPointer, word);
    window.open(url);
  };

  useEffect(() => {
    return () => {
      clearInterval(loadingTimeRef.current);
    };
  }, []);

  return (
    <WordCardWrapper
      style={{
        minHeight: height,
      }}
    >
      <p>{word}</p>
      <ActionButtons>
        {
          copyLoading
            ? (
              <LoadingIcon>
                <GoCheck />
              </LoadingIcon>
            )
            : (
              <ActionIcon onClick={copyWord}>
                <BiCopy />
              </ActionIcon>
            )
        }
        <ActionIcon onClick={checkWordInDictionary}><BiSearchAlt2 /></ActionIcon>
      </ActionButtons>
    </WordCardWrapper>
  );
};

export default WordCard;
