import type { ReactNode } from 'react';
import React from 'react';
import classes from './Button.module.css';

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
};
function Button({ children, onClick, type }: ButtonProps): JSX.Element {
  return (
    <button onClick={onClick} className={classes.button} type={type}>
      {children}
    </button>
  );
}

export default Button;
