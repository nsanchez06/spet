import React from 'react'

// import './header.scss';

//  START - imagens
// import carrinho from '../../assets/carrinho.png';
// import Search from '../search';
import './menu-mobile.scss';

//  END - imagens

function MenuMobile() {
    return (

        
            <div id="menuToggle">
            {/* <div className="header__logo">Nerdice Cringe</div> */}
                <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>

                <ul id="menu">
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>nossos produtos</li></a>
                    <a href="#"><li>sobre nós</li></a>
                    <a href="#"><li>contato</li></a>
                </ul>
            </div>
    );
}

export default MenuMobile;
