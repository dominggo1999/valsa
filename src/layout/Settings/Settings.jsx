import React from 'react';
import {
  SettingsWrapper,
  SettingsRow,
} from './Settings.style';
import SearchBar from '../../common/SearchBar/SearchBar';
import SettingsSelect from '../../common/SettingsSelect/SettingsSelect';
import { searchSelector, searchMethod } from '../../store/useSearchStore';
import { Button } from '../../common/Button';
import { pseudoWords } from '../../generator/generator';

const wordsCountOptions = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  { value: 100, label: '100' },
  { value: 200, label: '200' },
];

const languages = [
  { value: 'english', label: 'English' },
  { value: 'germany', label: 'Germany' },
  { value: 'italian', label: 'Italian' },
  { value: 'spanish', label: 'Spanish' },
  { value: 'swedish', label: 'Swedish' },
];

const Settings = () => {
  const wordCount = searchSelector('wordCount');
  const language = searchSelector('language');
  const prefix = searchSelector('prefix');
  const suffix = searchSelector('suffix');
  const changeSearch = searchMethod('changeSearch');

  const handleSelectChange = (property, e) => {
    changeSearch(property, e.value);
  };

  const handleWordPartsChange = (property, e) => {
    const val = e.target.value;
    changeSearch(property, val);
  };

  const generateWords = () => {
    const results = pseudoWords({
      prefix,
      suffix,
      language,
      wordCount,
    });

    changeSearch('generatedWords', results);
  };

  return (
    <SettingsWrapper>
      <SettingsRow>
        <SearchBar
          value={prefix}
          name="prefix"
          label="Prefix~"
          onChange={(e) => handleWordPartsChange('prefix', e)}
        />
        <SearchBar
          value={suffix}
          name="suffix"
          label="~Suffix"
          onChange={(e) => handleWordPartsChange('suffix', e)}
        />
      </SettingsRow>
      <SettingsRow>
        <SettingsSelect
          label="Word count"
          name="word-count"
          value={wordCount}
          options={wordsCountOptions}
          labelKey="label"
          valueKey="value"
          handleChange={(e) => handleSelectChange('wordCount', e)}
        />
        <SettingsSelect
          label="Language"
          name="language"
          value={language}
          options={languages}
          labelKey="label"
          valueKey="value"
          handleChange={(e) => handleSelectChange('language', e)}
        />
      </SettingsRow>
      <Button onClick={generateWords}>Generate </Button>
    </SettingsWrapper>
  );
};

export default Settings;
