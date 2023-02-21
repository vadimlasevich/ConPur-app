import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowBtn } from '../../assets/images/arrow-bottom.svg';
import ContractItem from './ContractItem';
import { EditContractContext } from '../../context/editContractContext';
import '../../styles/components/Contract.scss';

const Contract = ({ index, data }) => {
  const [isOpenContract, setIsOpenContract] = useState(false);
  const { getEditNumber } = useContext(EditContractContext);

  const dataOpenContract = [
    ['Номер договора', data.Number],
    ['Дата составления', data.DatePreparation],
    ['Дата подписания', data.DateConclusion],
    ['Предмет договора', data.subjectContractText],
    ['Вид предмета договора', data.subjectContract],
    ['Наименование организации', data.nameCompany],
    ['Фирма-производитель', data.manufacturingFirm],
    ['Страна производитель', data.producingCountry],
    ['Стоимость', data.Price],
    ['Доп. соглашение', data.agreementPrice],
    ['Форма договора', data.formContract],
    ['Вид процедуры закупки', data.typeProcedure],
    ['Справка ЗОИ', data.referenceZOI],
    ['Срок действия договора с', data.contractTimeFrom],
    ['Срок действия договора по', data.contractTimeBy],
  ];

  const dataHiddenContract = [
    ['Номер договора', data.Number],
    ['Предмет договора', data.subjectContractText],
    ['Наименование организации', data.nameCompany],
    ['Стоимость', data.Price],
  ];

  return (
    <li className="contract">
      <div className="contract__wrapper">
        <div className="contract__number-sequence">{index + 1}.</div>
        <div className={`contract__content ${isOpenContract ? 'contract__content_open' : ''}`}>
          {!isOpenContract &&
            dataHiddenContract.map((item, index) => <ContractItem title={item[0]} data={item[1]} key={index} />)}

          {isOpenContract &&
            dataOpenContract.map((item, index) => {
              if (item[1] === undefined || item[1] === null) return;
              return <ContractItem title={item[0]} data={item[1]} key={index} />;
            })}

          {isOpenContract && (
            <Link to={`/edit-contract/${data.Number}`} onClick={() => getEditNumber(data)} className="contract__content-button">
              Редактировать
            </Link>
          )}

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
