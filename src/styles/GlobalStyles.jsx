import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased font-primary text-accent bg-primary min-h-screen`}
  }

  &::selection {
    ${tw`
      bg-accent
      text-primary
    `}
  }

  @font-face {
    font-family: 'Caramel';
    src: url('CaramelRegular.woff2') format('woff2'),
        url('CaramelRegular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
`;

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
);

export default GlobalStyles;
