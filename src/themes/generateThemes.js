/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

const { readFile: _readFile, writeFile } = require('fs');
const hexToRgba = require('hex-to-rgba');
const cssToObject = require('css-to-object');
const minifier = require('string-minify');

const gen = (hex) => {
  const rgba = hexToRgba(hex);

  const regExp = /\(([^)]+)\)/;
  const matches = regExp.exec(rgba);
  const arr = matches[1].split(',');
  arr.pop();
  const trimmed = arr.map((i) => i.trim());

  const threeNumbers = trimmed.join(',');

  return threeNumbers;
};

const readFile = () => {
  _readFile('./src/themes/themes.css', 'utf8', (err, data) => {
    const obj = cssToObject(data);

    let final = '';
    for (const key in obj) {
      const name = key.replace('.', '');

      if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];

        const a = `{
          "name" : "${name}",
          "colors" : {
            "accent": "${gen(element['--accent'])}",
            "accent-hover": "${gen(element['--accent-hover'])}",
            "primary": "${gen(element['--primary'])}"
          }
        }`;

        final += `${a},`;
      }
    }

    // remove the last comma
    final = final.slice(0, final.length - 1);

    final = minifier(final);
    writeFile('./src/themes/themes.json', `[${final}]`, (err) => {
      if(err) {
        return console.log(err);
      }
      console.log('Theme file sucessfully generated');
    });
  });
};

readFile();
