import tw, { styled } from 'twin.macro';

export const ThemePickerWrapper = styled.div`
  ${tw`
    flex 
    items-center 
    gap-x-3
  `}

  label{
    ${tw`
      font-bold
    `}
  }
`;
