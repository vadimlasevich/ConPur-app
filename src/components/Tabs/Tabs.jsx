import React, { useContext, useEffect, useState } from 'react';
import { TypeContractContext } from '../../context/typeContractContext';
import '../../styles/components/Tabs.scss';

const Tabs = ({ titleTabsBtns }) => {
  const [indexActiveBtn, setIndexActiveBtn] = useState(0);
  const { handleIndexType } = useContext(TypeContractContext);

  useEffect(() => {
    handleIndexType(indexActiveBtn);
  }, [indexActiveBtn]);

  return (
    <div className="tabs">
      {titleTabsBtns.map((title, index) => (
        <button
          className={`tabs__btn btn-reset ${indexActiveBtn === index ? 'tabs__btn_active' : ''}`}
          key={index}
          onClick={() => setIndexActiveBtn(index)}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
