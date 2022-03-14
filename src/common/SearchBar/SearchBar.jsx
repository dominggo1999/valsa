import React from 'react';
import { SearchBarWrapper } from './SearchBar.style';
import Label from '../Label';

const SearchBar = ({ name, label, ...rest }) => {
  return (
    <SearchBarWrapper>
      <Label htmlFor={name}>{label}</Label>
      <input
        name={name}
        {...rest}
        type="text"
        autoCapitalize="none"
        autoCorrect="off"
        autoComplete="off"
        spellCheck={false}
      />
    </SearchBarWrapper>
  );
};

export default SearchBar;
