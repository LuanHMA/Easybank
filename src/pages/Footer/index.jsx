import { Container,FooterContainer ,  FooterNav, FooterIcons, FooterInfo } from './style';
import { Responsive } from './../../components/ResponsiveScreen';
Responsive
import Button from './../../components/Button';

//Images

import Logo from '../../assets/images/logo.svg'
import IconFacebook from '../../assets/images/icon-facebook.svg'
import IconInstagram from '../../assets/images/icon-instagram.svg'
import IconPinterest from '../../assets/images/icon-pinterest.svg'
import IconTwitter from '../../assets/images/icon-twitter.svg'
import IconYoutube from '../../assets/images/icon-youtube.svg'



export default function Footer(){
    return(
        <Container>
            <Responsive>
                <FooterContainer>

                    <FooterIcons>
                        <a href="#" className="logo-link">
                            <img src={Logo} alt="Logotipo"/>
                        </a>
                        
                        <div className="social-networks">
                            <a href="#"><img src={IconFacebook} alt="Icone do Facebook" /></a>
                            <a href="#"><img src={IconYoutube} alt="Icone do Youtube" /></a>
                            <a href="#"><img src={IconTwitter} alt="Icone do Twitter" /></a>
                            <a href="#"><img src={IconPinterest} alt="Icone do Pinterest" /></a>
                            <a href="#"><img src={IconInstagram} alt="Icone do Instagram" /></a>
                        </div>
                    </FooterIcons>

                    <FooterNav>
                        <ul>
                            <li>
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#articles">Articles</a>
                            </li>
                            
                            <li><a href="#blog">Blog</a>
                                <a href="#contact">Contact</a>
                                <a href="#">Privacy Policy</a>
                            </li>
                        </ul>                      
                    </FooterNav>

                    <FooterInfo>
                        <Button/>
                        <p>&copy;Easybank. All Rigths Reserved</p>
                    </FooterInfo>

                </FooterContainer>
            </Responsive>

        </Container>
    )
}