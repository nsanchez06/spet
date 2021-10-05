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
import chaveiroDarthVader from '../../assets/chaveiro-darth-vader.jpg'
import chaveiroMestreYoda from '../../assets/chaveiro-mestre-yoda.jpg'
import chaveiroStormtrooper from '../../assets/chaveiro-stormtrooper.jpg'

import cringe from '../../assets/cringe.gif';


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

                        <div className="products__product-one">
                            <p>Lorem ipsum dolor sit amet. Eos quasi voluptatem et libero aperiam rem numquam 
                                galisum ut porro voluptatem. Ad corrupti iste ut itaque nisi ex assumenda tenetur est
                                 molestias quae sit distinctio fugiat in quod officia. Ut eaque omnis ad velit quia a omnis
                                  aliquid qui repudiandae repudiandae est magni commodi in nihil neque ex magni voluptas.
                                Et inventore dicta aut veniam sequi sit accusantium beatae qui enim tenetur. Et beatae accusamus
                                 et obcaecati nostrum et consequatur dignissimos sit corporis sint et reprehenderit blanditiis aut 
                                 ratione laboriosam eum ratione sapiente. Est minus eaque At consequatur reprehenderit est ipsum quidem 
                                 non nihil perferendis.</p>
                        </div>

                        <div className="products__product-two">
                            <div className="products__productTitle"><img src={chaveiroMestreYoda} alt={"chaveiro mestre yoda"} /></div>
                            <div className="products__productName">Chaveiro Mestre Yoda</div>
                            <div className="products__productButton">comprar</div>
                        </div>

                        <div className="products__product-three">
                            <div className="products__productTitle"><img src={chaveiroStormtrooper} alt={"chaveiro stormtrooper"} /></div>
                            <div className="products__productName">Chaveiro Strormtrooper</div>
                            <div className="products__productButton">comprar</div>
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

                    <div className="quemSomos__imagem">
                        <img src={cringe} alt={"cringe"} />
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