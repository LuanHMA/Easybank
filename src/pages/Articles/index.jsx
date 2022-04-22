import { Container, ArticleContainer } from './style';
import { Article } from './../../components/Article';
Article
import { Responsive } from './../../components/ResponsiveScreen';

//Imagens
import Currency from './../../assets/images/image-currency.jpg';
import Confetti from './../../assets/images/image-confetti.jpg';
import Plane from './../../assets/images/image-plane.jpg';
import Restaurant from '../../assets/images/image-restaurant.jpg';




export default function Articles(){
    return(
        <Container>
            <Responsive>
                <h1 className="titleArticle">Latest Articles</h1>
                
                <ArticleContainer>
                    <Article 
                        author="By Claire Robinson" title="Receive money in any currency with no fees" 
                        text="The world is getting smaller and we're becoming more mobile. So why shouçd you be forced to only receive money in a single..." 
                        src={Currency}
                    />

                    <Article 
                        author="By Wilson Huttson" title="Treat yourself withot worrying about money" 
                        text="Our simple budgeting feature allows you to separete out your spending and set realistic limites each month. That means you...." 
                        src={Restaurant}
                    />

                    <Article 
                        author="By Wilson Hutton" title="Take your Easybank card wherever you go" 
                        text="We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you..." 
                        src={Plane}
                    />

                    <Article 
                        author="By Claire Robinson" title="Our Invite-only Beta accounts are now live!" 
                        text="After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invte through the site..." 
                        src={Confetti}
                    />
                </ArticleContainer>
            </Responsive>
        </Container>
    )
}