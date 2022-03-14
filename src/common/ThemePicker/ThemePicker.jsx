import React from 'react';
import Select from '../Select/Select';
import { ThemePickerWrapper } from './ThemePicker.style';

const repeatModeOptions = [
  { value: 'no-repeat', label: 'No Repeat' },
  { value: 'repeat', label: 'Repeat XY' },
  { value: 'repeat-x', label: 'Repeat X' },
  { value: 'repeat-y', label: 'Repeat Y' },
];

const ThemePicker = () => {
  const changeTheme = (val) => {
    // change theme heres
    console.log(val);
  };

  return (
    <ThemePickerWrapper>
      <Select
        value="repeat"
        options={repeatModeOptions}
        labelKey="label"
        valueKey="value"
        name="horizontal-alignment"
        handleChange={changeTheme}
      />
    </ThemePickerWrapper>
  );
};

export default ThemePicker;
