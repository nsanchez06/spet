import React from 'react'

import { FooterWrapper } from './styles.js';

//  START - imagens

import footer from '../../assets/footer.png';
//  END - imagens

function Footer() {
  return (
    <FooterWrapper>
      <div className="footerContent">
        <img src={footer} alt={"Footer"} />
      </div>
    </FooterWrapper>

  );

}

export default Footer;
