import React from 'react';
import Tabs from '../components/Tabs/Tabs';
import ContractsList from '../components/Contract/ContractsList';

const titleTabsBtns = ['Бюджетные', 'За счет собственных средств', 'Спонсорские'];

const Contracts = () => {
  return (
    <>
      <h2 className="title-section">Договора</h2>
      <Tabs titleTabsBtns={titleTabsBtns} />
      <ContractsList />
    </>
  );
};

export default Contracts;
