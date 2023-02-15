import React, { useState } from 'react';
import { ReactComponent as ArrowBtn } from '../../assets/images/arrow-bottom.svg';
import '../../styles/components/Contract.scss';
import ContractItem from './ContractItem';

const Contract = ({ index, data }) => {
  const [isOpenContract, setIsOpenContract] = useState(false);

  const {
    DateConclusion,
    DatePreparation,
    agreementPrice,
    contractTimeBy,
    contractTimeFrom,
    formContract,
    manufacturingFirm,
    producingCountry,
    subjectContract,
    typeProcedure,
    referenceZOI,
    Number,
    subjectContractText,
    Price,
    nameCompany,
  } = data;

  const titlesOpenContract = [
    'Номер договора',
    'Дата составления',
    'Дата подписания',
    'Предмет договора',
    'Вид предмета договора',
    'Наименование организации',
    'Фирма-производитель',
    'Страна производитель',
    'Стоимость',
    'Доп. соглашение',
    'Форма договора',
    'Вид процедуры закупки',
    'Справка ЗОИ',
    'Срок действия договора',
  ];

  const titlesHiddenContract = ['Номер договора', 'Стоимость', 'Организация', 'Предмет договора'];
  const dataHiddenContract = [Number, subjectContractText, Price, nameCompany];
  const dataOpenContract = [
    Number,
    subjectContractText,
    Price,
    nameCompany,
    DateConclusion,
    DatePreparation,
    agreementPrice,
    contractTimeBy,
    contractTimeFrom,
    formContract,
    manufacturingFirm,
    producingCountry,
    subjectContract,
    typeProcedure,
    referenceZOI,
  ];

  console.log({ ...data });

  return (
    <li className="contract">
      <div className="contract__wrapper">
        <div className="contract__number-sequence">{index + 1}.</div>
        <div className={`contract__content ${isOpenContract ? 'contract__content_open' : ''}`}>
          {!isOpenContract &&
            dataHiddenContract.map((data, index) => <ContractItem title={titlesHiddenContract[index]} data={data} key={index} />)}

          {isOpenContract &&
            dataOpenContract.map((data, index) => <ContractItem title={titlesOpenContract[index]} data={data} key={index} />)}

          <button className="contract__item-button btn-reset" onClick={() => setIsOpenContract((prevState) => !prevState)}>
            {isOpenContract ? 'Скрыть' : 'Посмотреть'}
            <ArrowBtn className={isOpenContract ? 'arrow-rotate' : ''} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default Contract;
