import tw, { styled } from 'twin.macro';

export const SettingsWrapper = styled.div`
  ${tw`
    my-4
    flex 
    flex-col
    gap-y-6
    w-full
  `}
`;

export const SettingsRow = styled.div`
  ${tw`
    w-full
    flex 
    gap-x-10
    gap-y-4
    flex-wrap
    sm:justify-start
  `}
`;

export const ActionButtons = styled.div`
  ${tw`
    flex 
    flex-wrap
    sm:gap-x-4
    gap-y-2
    justify-between
    sm:justify-start
  `}

  button {
    ${tw`
      text-lg
      sm:w-1/2
    `}

    width : 48%;
  }
`;
