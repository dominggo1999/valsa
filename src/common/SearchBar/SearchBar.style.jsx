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
      lowercase
      bg-transparent
      border-2 
      border-accent 
      py-1
      pl-4
      pr-8
      text-xl
      md:text-2xl
      font-bold
      outline-none
      caret-accent
      w-full
    `}
  }
`;

export const InputWrapper = styled.div`
  ${tw`
    relative 
    flex
    w-full
  `}
`;

export const ResetInputButton = styled.button`
  ${tw`
    absolute
    text-2xl
    right-2
    h-full
  `}
`;
