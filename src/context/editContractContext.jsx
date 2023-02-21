import { createContext, useState } from 'react';

export const EditContractContext = createContext('');

export const EditContractContextProvider = ({ children }) => {
  const [editContract, setEditContract] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  const getEditNumber = (contract) => {
    setEditContract(contract);
    setIsEdit(true);
  };

  return (
    <EditContractContext.Provider value={{ isEdit, editContract, setIsEdit, getEditNumber }}>
      {children}
    </EditContractContext.Provider>
  );
};
