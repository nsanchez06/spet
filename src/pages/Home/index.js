import Footer from "../../components/footer"
import Storege from '../../components/storege/index';
import Header from "../../components/header"
import './home.scss';

import banner from '../../assets/full-banner.jpg';

import bannerMobile from '../../assets/full-banner-mobile.png';


import freteGratis from '../../assets/frete-gratis.png';

import mercadoPago from '../../assets/mercado-pago.png';
import pix from '../../assets/pix.png';
import boleto from '../../assets/boleto.png';
import iconDog from '../../assets/icon-dog.png'

// produtos
import kellyPandolfi from '../../assets/kelly-pandolfi.jpg'
import imgQuemSomos from '../../assets/img-quem-somos.jpg'



export const Home = () => {
    return (
        <>
            <Header />
            <div className="HomePage">
                <div className="HomePage__banner">
                    <img src={banner} alt={"banner SPet"} />
                </div>
                <div className="full-banner-mobile">
                <img src={bannerMobile} alt={"banner black friday"} />
                </div>

                <div className="tipbar">

                    <div>quem somos<span className="tipbar__">→</span></div>
                    <div><img src={freteGratis} alt={"Frete Grátis"} /></div>
                    <div><img src={mercadoPago} alt={"mercado pago"} /></div>
                    <div><img src={pix} alt={"pix"} /></div>
                    <div><img src={boleto} alt={"boleto"} /></div>

                </div>

                <div className="products" id="produtos">
                    <h1><span className="products__details"><img src={iconDog} alt={"icon-dog"} /></span> Quem somos</h1>
                    <div className="products__productsList">

                        

                        <div className="products__product-two">
                            <div className="products__productTitle"><img src={kellyPandolfi} alt={"Dra Kelly Pandolfi"} /></div>
                            <div className="products__productName">Dra Kelly Pandolfi</div>
                            <div className="products__productButton">Lorem ipsum dolor sit amet.
                             Et minima voluptas id galisum nulla est dicta veritatis qui aspernatur libero est rerum voluptas 
                               voluptas ad voluptate vero sed architecto assumenda aut debitis dolores aut dolorem ratione? Omnis 
                               ipsa et culpa omnis aut vero consequatur ad praesentium ipsa.</div>
                        </div>

                        <div className="products__product-three">
                            <div className="products__productTitle"><img src={imgQuemSomos} alt={"imgQuemSomos"} /></div>
                            <div className="products__productName">Lorem ipsum dolor sit amet</div>
                            <div className="products__productButton">Lorem ipsum dolor sit amet.
                             Et minima voluptas id galisum nulla est dicta veritatis qui aspernatur libero est rerum voluptas 
                               voluptas ad voluptate vero sed architecto assumenda aut debitis dolores aut dolorem ratione? Omnis 
                               ipsa et culpa omnis aut vero consequatur ad praesentium ipsa.</div>
                        </div>

                    </div>

                </div>

                <div className="quemSomos" id="quem-somos">

                    <div className="quemSomos__textContent">
                        <div className="quemSomos__title"> Olá, somos a Nerdice Gringe</div>
                        <div className="quemSomos__text">
                            A Nerdice Cringe surgiu, como o nome já diz, para nossos nerds cringes! Aqui você encontra todos os produtos nerds da geração millennial.
            </div>
                    </div>

                   

                </div>

                <div className="newsletter__content" id="newsletter">
                    <div className="newsletter__text">
                        <span className="newsletter__">//</span> 
                        receba novidades das nossas nerdices.
                    </div>
                        <div className="newsletter__email">
                            <Storege />
                        </div>
                </div>
            </div>

            <Footer />
        </>
    )
}