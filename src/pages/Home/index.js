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
import iconDog from '../../assets/icon-dog.png';
import iconCat from '../../assets/icon-cat.png';

// quem somos
import kellyPandolfi from '../../assets/kelly-pandolfi.jpg';
import imgQuemSomos from '../../assets/img-quem-somos.jpg';

// serviços
import consulta from '../../assets/consulta.png';
import vacina from '../../assets/vacina.png';
import cirurgia from '../../assets/cirurgia.png';



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

                <div className="quemSomos" id="quemSomos">
                    <h1><span className="quemSomos__details"><img src={iconDog} alt={"icon-dog"} /></span> Quem somos</h1>
                    <div className="quemSomos__List">

                        

                        <div className="quemSomos__draKelly">
                            <div><img src={kellyPandolfi} alt={"Dra Kelly Pandolfi"} /></div>
                            <div className="quemSomos__Name">Dra Kelly Pandolfi</div>
                            <div className="quemSomos__description">Lorem ipsum dolor sit amet.
                             Et minima voluptas id galisum nulla est dicta veritatis qui aspernatur libero est rerum voluptas 
                               voluptas ad voluptate vero sed architecto assumenda aut debitis dolores aut dolorem ratione? Omnis 
                               ipsa et culpa omnis aut vero consequatur ad praesentium ipsa.</div>
                        </div>

                        <div className="quemSomos__draTwo">
                            <div><img src={imgQuemSomos} alt={"imgQuemSomos"} /></div>
                            <div className="quemSomos__Name">Lorem ipsum dolor sit amet</div>
                            <div className="quemSomos__description">Lorem ipsum dolor sit amet.
                             Et minima voluptas id galisum nulla est dicta veritatis qui aspernatur libero est rerum voluptas 
                               voluptas ad voluptate vero sed architecto assumenda aut debitis dolores aut dolorem ratione? Omnis 
                               ipsa et culpa omnis aut vero consequatur ad praesentium ipsa.</div>
                        </div>

                    </div>

                </div>

                <div className="nossosServicos" id="nossosServicos">
                    <h1><span className="nossosServicos__details"><img src={iconCat} alt={"icon-cat"} />nossos serviços</span></h1>
                    <div className="nossosServicos__List">

                        

                        <div className="nossosServicos__consulta">
                            <div><img src={consulta} alt={"consulta"} /></div>
                            <div className="nossosServicos__Name">Consulta</div>
                            <div className="nossosServicos__description">Lorem ipsum dolor sit amet.
                             Et minima voluptas id galisum nulla est dicta veritatis qui aspernatur libero est rerum voluptas 
                               voluptas ad voluptate vero sed architecto assumenda aut debitis dolores aut dolorem ratione? Omnis 
                               ipsa et culpa omnis aut vero consequatur ad praesentium ipsa.</div>
                        </div>

                        <div className="nossosServicos__vacina">
                            <div><img src={vacina} alt={"vacina"} /></div>
                            <div className="nossosServicos__Name">vacina</div>
                            <div className="nossosServicos__description">Lorem ipsum dolor sit amet.
                             Et minima voluptas id galisum nulla est dicta veritatis qui aspernatur libero est rerum voluptas 
                               voluptas ad voluptate vero sed architecto assumenda aut debitis dolores aut dolorem ratione? Omnis 
                               ipsa et culpa omnis aut vero consequatur ad praesentium ipsa.</div>
                        </div>

                        <div className="nossosServicos__cirurgia">
                            <div><img src={cirurgia} alt={"cirurgia"} /></div>
                            <div className="nossosServicos__Name">cirurgia</div>
                            <div className="nossosServicos__description">Lorem ipsum dolor sit amet.
                             Et minima voluptas id galisum nulla est dicta veritatis qui aspernatur libero est rerum voluptas 
                               voluptas ad voluptate vero sed architecto assumenda aut debitis dolores aut dolorem ratione? Omnis 
                               ipsa et culpa omnis aut vero consequatur ad praesentium ipsa.</div>
                        </div>

                    </div>

                </div>

                {/* <div className="quemSomos" id="quem-somos">

                    <div className="quemSomos__textContent">
                        <div className="quemSomos__title"> Olá, somos a Nerdice Gringe</div>
                        <div className="quemSomos__text">
                            A Nerdice Cringe surgiu, como o nome já diz, para nossos nerds cringes! Aqui você encontra todos os produtos nerds da geração millennial.
                         </div>
                    </div>

                   

                </div> */}

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