import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { SearchBarWrapper, ResetInputButton, InputWrapper } from './SearchBar.style';
import Label from '../Label';
import { searchMethod } from '../../store/useSearchStore';

const SearchBar = ({
  value, name, label, property, onChange, ...rest
}) => {
  const changeSearch = searchMethod('changeSearch');

  const clearInput = () => {
    changeSearch(property, '');
  };

  return (
    <SearchBarWrapper>
      <Label htmlFor={name}>{label}</Label>
      <InputWrapper>
        <input
          value={value}
          name={name}
          onChange={onChange}
          {...rest}
          type="text"
          autoCapitalize="none"
          autoCorrect="off"
          autoComplete="off"
          spellCheck={false}
        />
        {
          value
        && <ResetInputButton onClick={clearInput}><AiOutlineClose /></ResetInputButton>
        }
      </InputWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
