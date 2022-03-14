import React from 'react';
import { HeaderWrapper } from './Header.style';
import Brand from '../../common/Brand/Brand';
import ThemePicker from '../../common/ThemePicker/ThemePicker';

const Header = () => {
  return (
    <HeaderWrapper>
      <Brand />
      <ThemePicker />
    </HeaderWrapper>
  );
};

export default Header;
