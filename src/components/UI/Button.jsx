import React from 'react';

const Button = ({ className, children, type = 'button' }) => {
  return (
    <button className={`button btn-reset ${className}`} type={type}>
      {children}
    </button>
  );
};

export default Button;
