import React from 'react';
import { Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export interface ButtonProps extends Omit<MuiButtonProps, 'children'> {
  label: string;
}

export const Button: React.FC<ButtonProps> = ({ label, ...props }) => {
  return <MuiButton {...props}>{label}</MuiButton>;
};

export default Button;
