import { Container, Content, ImgContainer } from './style'
import { Responsive } from './../../components/ResponsiveScreen';
import Button from './../../components/Button';
import CelImage from '../../assets/images/image-mockups.png';

export default function Home(){
    return(
        <Container>
               
                <Content>
                    <div className='content'>
                        <h1>
                            Next Geration <br/> digital bank
                        </h1>    
                        
                        <p>Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>         

                        <Button/>      
                    </div>


                </Content>

                <ImgContainer>
                    <img src={CelImage} alt="Smartphone Background" />
                </ImgContainer>

        </Container>
    )
}