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
  `}
`;
