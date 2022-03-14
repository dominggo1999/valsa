import tw, { styled } from 'twin.macro';

export const WordListWrapper = styled.div`
  ${tw`
    w-full
    flex 
    flex-wrap
    mt-2
  `}


  .my-masonry-grid {
    ${tw`
      w-full
    `}

    display: flex;
    margin-left: -20px; /* gutter size offset */
  }
  .my-masonry-grid_column {
    padding-left: 20px; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 20px;
}
`;
