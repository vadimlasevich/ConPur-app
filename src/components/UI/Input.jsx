import React from 'react';

const Input = ({ label, register, type, errors, value }) => {
  console.log(errors);
  return (
    <input
      {...register(label, { required: 'Поле обязательно к заполнению' })}
      className={`input ${errors ? 'input-error' : ''}`}
      type={type}
      value={value}
    />
  );
};

export default Input;
