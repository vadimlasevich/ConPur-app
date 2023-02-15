import React from 'react';

const ContractItem = ({ title, data }) => {
  return (
    <div className="contract__item">
      <h3 className="contract__item-title">{title}</h3>
      <span className="contract__item-data">{data}</span>
    </div>
  );
};

export default ContractItem;
