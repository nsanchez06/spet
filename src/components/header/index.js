import React from 'react'

import './header.scss';

//  START - imagens
import carrinho from '../../assets/carrinho.png';
import Search from '../search';
import MenuMobile from '../menu-mobile/index';

//  END - imagens

function Header() {
  return (
    

    <header className="header">
      <MenuMobile />
      <div className="header__logo">Nerdice Cringe</div>

      <div className="header__informations">
        <span>home</span>
        <span>nossos produtos</span>
        <span>sobre nós</span>
        <span>contato</span>
      </div>

      <div className="header__login-cart">
        <Search />
        <span className="header__login">Login</span>
        <span><img src={carrinho} alt={"Carrinho"} /></span>
      </div>
    </header>
  );
}

export default Header;
