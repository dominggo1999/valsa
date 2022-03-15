import tw, { styled } from 'twin.macro';

export const StyledFooter = styled.div`
  ${tw`
    flex 
    justify-center 
    items-center
    py-6
    text-sm
  `}

  a{
    ${tw`
      font-semibold
      underline 
    `}
  }
`;
