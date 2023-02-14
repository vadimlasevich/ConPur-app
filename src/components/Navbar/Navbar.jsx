import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Home } from '../../assets/images/home.svg';
import { ReactComponent as Documents } from '../../assets/images/document.svg';
import { ReactComponent as AddDocument } from '../../assets/images/addDocument.svg';
import { ReactComponent as Reports } from '../../assets/images/reports.svg';
import Support from '../../assets/images/support.png';

import '../../styles/components/Navbar.scss';

const isActiveLink = ({ isActive }) => (isActive ? 'navbar__link_active' : '');

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="navbar__logo">ConPur</h1>
      <nav className="navbar__nav">
        <NavLink to={'/'} className={isActiveLink}>
          <Home />
          Главная
        </NavLink>
        <NavLink to={'contracts'} className={isActiveLink}>
          <Documents />
          Договора
        </NavLink>
        <NavLink to={'new-contract'} className={isActiveLink}>
          <AddDocument width="19" height="22" />
          Новый договор
        </NavLink>
        <NavLink to={'reports'} className={isActiveLink}>
          <Reports />
          Отчеты
        </NavLink>
      </nav>
      <div className="navbar__footer">
        <span className="navbar__footer-text">Все права защищены</span>
        <a className="navbar__footer-link" href="tel:+375298286211">
          <img src={Support} alt="support" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
