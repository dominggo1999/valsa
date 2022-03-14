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
      flex 
      ml-[-10px]  
      md:ml-[-20px]
    `}
  }
  .my-masonry-grid_column {
    ${tw`
      pl-[10px]
      md:pl-[20px]
      bg-clip-padding
    `}
  }

  /* Style your items */
  .my-masonry-grid_column > div { /* change div to reference your elements you put in <Masonry> */
    ${tw`
      mb-[10px]
      md:mb-[20px]
    `}
}
`;
