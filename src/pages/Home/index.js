import Footer from "../../components/footer"
import Header from "../../components/header"
import './home.scss';

import banner from '../../assets/hero-banner.png';
import brastemp from '../../assets/logo-brastemp.png';
import compraCerta from '../../assets/logo-compra-certa.png';
import consul from '../../assets/logo-consul.png';
import theBar from '../../assets/logo-thebar.png';
import jussi from '../../assets/image-jussi.png';
import contactInfo from '../../assets/contact-info.png';
import newsletter from '../../assets/newletter.png';

export const Home = () => {
    return (
        <>
            <Header />
            <div className="HomePage">
                <div className="HomePage__banner">
                    <img src={banner} alt={"banner Jussi"} />
                </div>

                <div className="tipbar">

                    <div>Nossas principais lojas VTEX <span>→</span></div>
                    <div><img src={brastemp} alt={"Brastemp"} /></div>
                    <div><img src={compraCerta} alt={"Compra Certa"} /></div>
                    <div><img src={consul} alt={"Consul"} /></div>
                    <div><img src={theBar} alt={"The Bar"} /></div>

                </div>

                <div className="soluctions">
                    <h1><span className="soluctions__details"> //</span> Nossas Soluções</h1>
                    <div className="soluctions__productsList">

                        <div className="soluctions__product-one">
                            <div className="soluctions__productTitle">P1</div>
                            <div className="soluctions__productName">Bicicleta</div>
                            <div className="soluctions__productDescription">Descrição do produto #1</div>
                            <div className="soluctions__productFeature">• Feature 1</div>
                            <div className="soluctions__productFeature">• Feature 2</div>
                            <div className="soluctions__productFeature">• Feature 3</div>
                            <div className="soluctions__productButton">Ver solução</div>
                        </div>

                        <div className="soluctions__product-two">
                            <div className="soluctions__productTitle">P2</div>
                            <div className="soluctions__productName">Pia</div>
                            <div className="soluctions__productDescription">Descrição do produto #2</div>
                            <div className="soluctions__productFeature">• Feature 1</div>
                            <div className="soluctions__productFeature">• Feature 2</div>
                            <div className="soluctions__productFeature">• Feature 3</div>
                            <div className="soluctions__productButton">Ver solução</div>
                        </div>

                        <div className="soluctions__product-three">
                            <div className="soluctions__productTitle">P3</div>
                            <div className="soluctions__productName"> Cadeira Gamer</div>
                            <div className="soluctions__productDescription">Descrição do produto #3</div>
                            <div className="soluctions__productFeature">• Feature 1</div>
                            <div className="soluctions__productFeature">• Feature 2</div>
                            <div className="soluctions__productFeature">• Feature 3</div>
                            <div className="soluctions__productButton">Ver solução</div>
                        </div>

                        <div className="soluctions__product-four">
                            <div className="soluctions__productTitle">P4</div>
                            <div className="soluctions__productName">Torneira</div>
                            <div className="soluctions__productDescription">Descrição do produto #4</div>
                            <div className="soluctions__productFeature">• Feature 1</div>
                            <div className="soluctions__productFeature">• Feature 2</div>
                            <div className="soluctions__productFeature">• Feature 3</div>
                            <div className="soluctions__productButton">Ver solução</div>
                        </div>

                    </div>

                </div>

                <div className="quemSomos">

                    <div className="quemSomos__textContent">
                        <div className="quemSomos__title"> Olá, somos a Jüssi</div>
                        <div className="quemSomos__text">
                            A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
            </div>
                    </div>

                    <div className="quemSomos__imagem">
                        <img src={jussi} alt={"Jussi"} />
                    </div>

                </div>

                <div className="contactContent">
                    <img src={contactInfo} alt={"Contato Jussi"} />
                </div>

                <div className="newsletterContent">
                    <img src={newsletter} alt={"Newsletter"} />
                </div>
            </div>


            <Footer />
        </>
    )
}