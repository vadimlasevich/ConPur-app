import React from 'react';

const ElemForm = ({ classNameElemContainer, className, children, titleElement, errors }) => {
  return (
    <label className={className}>
      {titleElement}
      <div className={`form__elem-container ${classNameElemContainer}`}>{children}</div>
      {errors && <span className="error-message">{errors.message}</span>}
    </label>
  );
};

export default ElemForm;
