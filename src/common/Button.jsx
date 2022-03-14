import tw, { styled } from 'twin.macro';

export const Button = styled.div`
  ${tw`
    bg-accent
    text-primary
    max-w-[220px]
    px-5
    font-bold
    py-2
    text-center
    text-xl
    md:text-2xl
    hover:bg-accent-hover 
    cursor-pointer
  `}

`;
