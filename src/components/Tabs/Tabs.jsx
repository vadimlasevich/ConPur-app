import React, { useState } from 'react';
import '../../styles/components/Tabs.scss';

const Tabs = ({ titleTabsBtns }) => {
  const [indexActiveBtn, setIndexActiveBtn] = useState(0);

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
