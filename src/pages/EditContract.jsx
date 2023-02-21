import React, { useContext } from 'react';
import Form from '../components/Form/Form';
import { EditContractContext } from './../context/editContractContext';

const EditContract = () => {
  const { editContract } = useContext(EditContractContext);

  return (
    <>
      <h2 className="title-section">Редактирование договора №{editContract.Number}</h2>
      <div className="form__edit-container">
        <Form />
      </div>
    </>
  );
};

export default EditContract;
