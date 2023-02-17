import React, { useContext } from 'react';
import { ContractsContext } from '../../context/contractsContext';
import { TypeContractContext } from '../../context/typeContractContext';
import Contract from './Contract';

const Contracts = () => {
  const { contracts } = useContext(ContractsContext);
  const { typeContract } = useContext(TypeContractContext);

  return (
    <>
      <ul>
        {contracts
          .filter((contract) => contract.typeContract === typeContract)
          .map((contract, index) => (
            <Contract data={contract} index={index} key={index} />
          ))}
      </ul>
    </>
  );
};

export default Contracts;
