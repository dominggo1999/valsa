import tw, { styled } from 'twin.macro';

export const AppWrapper = styled.div`
  ${tw`
    w-full 
    min-h-screen
    text-accent bg-primary 
  `}
`;

export const Main = styled.div`
  ${tw`
    max-w-[1000px] 
    flex 
    flex-col 
    mx-auto
    px-3
    md:px-5
  `}
`;
