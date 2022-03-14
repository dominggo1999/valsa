import React from 'react';
import { DescriptionWrapper } from './Description.style';

const Description = () => {
  return (
    <DescriptionWrapper>Valsa will choose random words from the selected language, cut the word into several parts and combine them randomly to form a &ldquo;pseudo-fake&ldquo; word. Some of the words generated may be real words, You can confirm whether the word is a real word by pressing the search button</DescriptionWrapper>
  );
};

export default Description;
