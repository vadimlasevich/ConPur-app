import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { TypeContractContext } from '../../context/typeContractContext';
import { ContractsContext } from '../../context/contractsContext';
import uuid from 'react-uuid';
import Input from '../UI/Input';
import ElemForm from './ElemForm';
import Button from '../UI/Button';
import InputRadio from '../UI/InputRadio';

import '../../styles/components/Form.scss';

const Form = () => {
  const [isReferenceZOI, setIsReferenceZOI] = useState(false);
  const [dateConclusion, setDateConclusion] = useState('');
  const { typeContract } = useContext(TypeContractContext);
  const { getContracts } = useContext(ContractsContext);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    watch('typeProcedure') === 'ЗОИ' ? setIsReferenceZOI(true) : setIsReferenceZOI(false);
  }, [watch('typeProcedure')]);

  useEffect(() => {
    setDateConclusion(watch('DateConclusion'));
  }, [watch('DateConclusion')]);

  const onSubmit = (contract) => {
    contract.id = uuid();
    contract.typeContract = typeContract;
    getContracts(contract);

    reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <ElemForm className="w-15" titleElement="Номер договора" errors={errors.Number}>
        <Input register={register} label={'Number'} type={'number'} errors={errors.Number} required />
      </ElemForm>
      <ElemForm className="w-15" titleElement={'Дата составления'} errors={errors.DatePreparation}>
        <Input register={register} label={'DatePreparation'} type={'date'} errors={errors.DatePreparation} required />
      </ElemForm>
      <ElemForm className="w-15" titleElement={'Дата подписания'} errors={errors.DateConclusion}>
        <Input register={register} label={'DateConclusion'} type={'date'} errors={errors.DateConclusion} required />
      </ElemForm>
      <ElemForm className="w-33" titleElement={'Предмет договора'} errors={errors.subjectContractText}>
        <Input register={register} label={'subjectContractText'} type={'text'} errors={errors.subjectContractText} required />
      </ElemForm>
      <ElemForm
        className="w-20"
        classNameElemContainer="form__radio-buttons"
        titleElement={'Вид предмета договора'}
        errors={errors.subjectContract}
      >
        <InputRadio register={register} label={'subjectContract'} type={'radio'} value="Услуга" />
        <InputRadio register={register} label={'subjectContract'} type={'radio'} value="Товар" />
      </ElemForm>
      <ElemForm className="w-30" titleElement={'Наименование организации'} errors={errors.nameCompany}>
        <Input register={register} label={'nameCompany'} type={'text'} errors={errors.nameCompany} required />
      </ElemForm>
      <ElemForm className="w-20" titleElement={'Фирма-производитель'} errors={errors.manufacturingFirm}>
        <Input register={register} label={'manufacturingFirm'} type={'text'} errors={errors.manufacturingFirm} required />
      </ElemForm>
      <ElemForm className="w-20" titleElement={'Страна производитель'} errors={errors.producingCountry}>
        <Input register={register} label={'producingCountry'} type={'text'} errors={errors.producingCountry} required />
      </ElemForm>
      <ElemForm className="w-15" titleElement={'Стоимость'} errors={errors.Price}>
        <Input register={register} label={'Price'} type={'number'} errors={errors.Price} required />
      </ElemForm>
      <ElemForm className="w-15" titleElement={'Доп. соглашение'} errors={errors.agreementPrice}>
        <Input register={register} label={'agreementPrice'} type={'number'} errors={errors.agreementPrice} required />
      </ElemForm>

      {typeContract === 'budget' && (
        <>
          <ElemForm
            className="w-25"
            classNameElemContainer="form__radio-buttons"
            titleElement={'Форма договора'}
            errors={errors.formContract}
          >
            <InputRadio register={register} label={'formContract'} type={'radio'} value="Электронный" />
            <InputRadio register={register} label={'formContract'} type={'radio'} value="Бумажный" />
          </ElemForm>
          <ElemForm
            className="w-20"
            classNameElemContainer="form__radio-buttons"
            titleElement={'Вид процедуры закупки'}
            errors={errors.typeProcedure}
          >
            <InputRadio register={register} label={'typeProcedure'} type={'radio'} value="ЗОИ" />
            <InputRadio register={register} label={'typeProcedure'} type={'radio'} value="ЗЦП" />
            <InputRadio register={register} label={'typeProcedure'} type={'radio'} value="ЭА" />
          </ElemForm>
          {!isReferenceZOI && <ElemForm className="w-15" />}
          {isReferenceZOI && (
            <ElemForm
              className="w-15"
              classNameElemContainer="form__radio-buttons"
              titleElement={'Справка ЗОИ'}
              errors={errors.referenceZOI}
            >
              <InputRadio register={register} label={'referenceZOI'} type={'radio'} value="Есть" />
              <InputRadio register={register} label={'referenceZOI'} type={'radio'} value="Нет" />
            </ElemForm>
          )}
          <ElemForm className="w-40" />
        </>
      )}

      <ElemForm className="w-40" titleElement={'Срок действия договора'} errors={errors.agreementPrice}>
        <span>C</span>
        <Input register={register} label={'contractTimeFrom'} type={'date'} value={dateConclusion} />
        <span>По</span>
        <Input register={register} label={'contractTimeBy'} type={'date'} errors={errors.contractTimeBy} required />
      </ElemForm>
      <ElemForm className="w-55" />

      <Button className="form__button" type="submit">
        Создать
      </Button>
    </form>
  );
};

export default Form;
