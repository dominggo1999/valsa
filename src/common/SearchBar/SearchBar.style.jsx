import tw, { styled } from 'twin.macro';

export const SearchBarWrapper = styled.div`
  ${tw`
    w-full
    md:w-1/3
    flex 
    flex-col
    font-bold
  `}

  input {
    ${tw`
      bg-transparent
      border-2 
      border-accent 
      py-1
      px-4
      text-xl
      md:text-2xl
      font-bold
      outline-none
      caret-accent
    `}
  }
`;
