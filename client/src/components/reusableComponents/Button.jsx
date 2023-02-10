import React from 'react';
import './Button.scss';

const Button = ({ children, className, ...rest }) => {
  return (
    <button
      id='button'
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;