import React from 'react';
import Form from '../components/Form/Form';
import Tabs from '../components/Tabs/Tabs';

const titleTabsBtns = ['Бюджетный', 'За счет собственных средств', 'Спонсорский'];

const NewContract = () => {
  return (
    <>
      <h2 className="title-section">Новый договор</h2>
      <Tabs titleTabsBtns={titleTabsBtns} />
      <Form />
    </>
  );
};

export default NewContract;
