import React from 'react';
import Select from '../Select/Select';
import { SettingsSelectWrapper } from './SettingsSelect.style';
import Label from '../Label';

const SettingsSelect = ({
  name, label, ...rest
}) => {
  return (
    <SettingsSelectWrapper>
      <Label name={name}>{label}</Label>
      <Select {...rest} />
    </SettingsSelectWrapper>
  );
};

export default SettingsSelect;
