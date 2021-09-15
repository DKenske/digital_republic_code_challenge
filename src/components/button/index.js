import React from 'react';
import { ButtonComponent } from './styles';

const Button = ({
  label,
  width,
  height,
  margin,
  strong,
  fontSize,
  background,
  underline,
  onClick,
}) => {
  return (
    <ButtonComponent
      width={width}
      margin={margin}
      height={height}
      strong={strong}
      fontSize={fontSize}
      background={background}
      underline={underline}
      onClick={onClick}
    >
      {label}
    </ButtonComponent>
  );
};

export default Button;
