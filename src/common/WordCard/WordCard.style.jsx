import tw, { styled } from 'twin.macro';

export const ActionButtons = styled.div`
  ${tw`
    top-2 
    right-2
    absolute
    gap-x-2
    flex 
    gap-x-2
    items-center
  `}

  opacity : 0;
  transition : opacity 300ms ease-in-out;
`;

export const ActionIcon = styled.button`
  ${tw`
    cursor-pointer
    text-2xl
    hover:text-accent-hover
  `}
`;

export const WordCardWrapper = styled.div`
  ${tw`
    flex
    w-full
    text-accent  
    justify-center
    border-2
    border-accent
    items-center
    relative
  `}
  
  p{
    ${tw`
      text-xl
      capitalize
      font-bold
      break-all
      px-2 
      py-10
    `}
  }

  &:hover ${ActionButtons}{
    opacity : 100;
  }

`;

export const LoadingIcon = styled.div`
  ${tw`
    text-2xl
  `}
`;
