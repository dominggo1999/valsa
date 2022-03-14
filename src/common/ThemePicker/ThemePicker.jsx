import React from 'react';
import Select from '../Select/Select';
import { ThemePickerWrapper } from './ThemePicker.style';
import unformattedThemes from '../../themes/themes.json';
import useThemeStore from '../../store/useThemeStore';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const formatThemes = (themes) => {
  return themes.map((item) => {
    let label = item.name.replaceAll('-', ' ');
    label = capitalizeFirstLetter(label);
    return {
      label,
      value: item.name,
    };
  }).sort((a, b) => {
    return a.label.localeCompare(b.label);
  });
};
const formattedThemes = formatThemes(unformattedThemes);

const repeatModeOptions = [
  { value: 'no-repeat', label: 'No Repeat' },
  { value: 'repeat', label: 'Repeat XY' },
  { value: 'repeat-x', label: 'Repeat X' },
  { value: 'repeat-y', label: 'Repeat Y' },
];

const ThemePicker = () => {
  const activeThme = useThemeStore((state) => state.theme.name);
  const changeTheme = useThemeStore((state) => state.changeTheme);

  const handleChange = (e) => {
    changeTheme(e.value);

    // Save to local storage
    localStorage.setItem('theme', e.value);
  };

  return (
    <ThemePickerWrapper>
      <Select
        wider
        value={activeThme}
        options={formattedThemes}
        labelKey="label"
        valueKey="value"
        name="horizontal-alignment"
        handleChange={handleChange}
      />
    </ThemePickerWrapper>
  );
};

export default ThemePicker;
