import { formatRelative } from 'date-fns';
import React from 'react';
import { Label, Input } from './styles';

const InputComponent = ({
  label,
  placeholder,
  onChange,
  type,
  value,
  required,
  disabled,
  defaultValue,
  variant,
  width,
  height,
  textAlign,
}) => {
  return (
    <>
      {label && <Label>{label}:</Label>}
      <Input
        variant={variant}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
        value={value}
        required={required}
        disabled={disabled}
        width={width}
        height={height}
        textAlign={textAlign}
      />
    </>
  );
};

export default InputComponent;
