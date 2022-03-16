import React, { useEffect, useRef } from 'react';
import Masonry from 'react-masonry-css';
import { WordListWrapper } from './WordList.style';
import { searchSelector } from '../../store/useSearchStore';
import WordCard from '../../common/WordCard/WordCard';
import { breakpoints } from '../../constants/breakpoints';

const {
  md,
  lg,
} = breakpoints;

const WordList = () => {
  const generatedWords = searchSelector('generatedWords');

  const masonryBreakpoints = {
    default: 4,
    [lg]: 3,
    [md]: 2,
  };

  return (
    <WordListWrapper>
      <Masonry
        breakpointCols={masonryBreakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {generatedWords && generatedWords.map(({ word, id, height }) => {
          return (
            <WordCard
              height={height}
              key={id}
              word={word}
            />
          );
        })}
      </Masonry>
    </WordListWrapper>

  );
};

export default WordList;
