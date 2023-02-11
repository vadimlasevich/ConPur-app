import React from 'react';

const Tabs = () => {
  return (
    <div className="tabs">
      <button className="tabs__btn tabs__btn_active">Бюджетный</button>
      <button className="tabs__btn">За счет собственных средств</button>
      <button className="tabs__btn">Спонсорский</button>
    </div>
  );
};

export default Tabs;
