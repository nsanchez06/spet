import React from 'react'

import './header.scss';

//  START - imagens
import logo from '../../assets/logo.png';
import carrinho from '../../assets/carrinho.png';
import Search from '../search';
import MenuMobile from '../menu-mobile/index';

//  END - imagens

function Header() {
  return (
    

    <header className="header">
      <MenuMobile />
      <div className="header__logo"><img src={logo} alt={"logo-Spet"}  /></div>

      <div className="header__informations">
      <a href="#quemSomos"><span>quem somos</span></a>
        <a href="#nossosServicos"><span>nossos serviços</span></a>
        <a href="#equipeVeterinaria"><span>onde estamos</span></a>
        <a href="#faleConosco"><span>fale conosco</span></a>
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
