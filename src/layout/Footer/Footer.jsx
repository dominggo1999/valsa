import React from 'react';
import { StyledFooter } from './Footer.style';

const Footer = () => {
  return (
    <StyledFooter>
      <span>
        Developed by
        {' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/dominggo1999"
        >dominggo1999
        </a>
      </span>
    </StyledFooter>
  );
};

export default Footer;
