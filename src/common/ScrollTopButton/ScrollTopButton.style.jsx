import tw, { styled } from 'twin.macro';

export const ScrollTopButtonWrapper = styled.button`
  ${tw`
    fixed 
    bottom-4
    right-4
    w-[35px]
    h-[35px]
    rounded-full
    border-2
    border-accent
    flex 
    justify-center 
    items-center
    bg-primary
    opacity-0
    select-none
    pointer-events-none
  `}

  &.display {
    ${tw`
      opacity-100
      pointer-events-auto
    `}
  }

  transition : opacity ease-in-out 300ms; 
  box-shadow: 0 0 0 1px hsl(0deg 0% 0% / 10%), 0 4px 11px hsl(0deg 0% 0% / 10%);

  svg{
    ${tw`
      text-2xl
    `}
  }
`;
