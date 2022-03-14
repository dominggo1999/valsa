import tw, { styled } from 'twin.macro';

export const AppWrapper = styled.div`
  ${tw`
    w-full 
    min-h-screen
  `}
`;

export const Main = styled.div`
  ${tw`
    max-w-[1000px] 
    flex 
    flex-col 
    mx-auto
    px-5
  `}
`;
