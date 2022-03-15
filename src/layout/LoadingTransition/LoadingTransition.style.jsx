import tw, { styled } from 'twin.macro';

export const LoadingTransitionWrapper = styled.div`
  ${tw`
    fixed 
    w-full 
    h-screen
    bg-primary 
    z-50
  `}
`;

export const LoadingCardWrapper = styled.div`
  ${tw`
    bg-transparent
    w-full 
    h-full 
    flex
    items-center 
    justify-center
    relative 
    z-50
  `}
`;

export const LoadingCard = styled.div`
  ${tw`
    text-3xl 
    font-bold
    text-accent
    uppercase
    p-4 
    border-2
    border-accent
    flex 
    items-center 
    justify-center
    min-w-[250px]
    min-h-[250px]
    relative 
    z-50
  `}
`;

export const Mask = styled.div`
  ${tw`
    top-0 
    left-0
    w-full 
    h-full
    fixed 
    z-20 
    bg-accent
  `}
`;
