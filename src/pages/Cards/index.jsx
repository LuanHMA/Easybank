import { Container, Content, CardContainer } from './style';
import { Responsive } from '../../components/ResponsiveScreen';
import { Card } from '../../components/Card';
//Images
import iconOnline from '../../assets/images/icon-online.svg';
import iconBudgeting from '../../assets/images/icon-budgeting.svg';
import iconOnboarding from '../../assets/images/icon-onboarding.svg';
import iconApi from '../../assets/images/icon-api.svg';

export default function Cards(){
    return(
        <Container>
            <Responsive>
                <Content>
                    <h1>Why choose Easybank ? </h1>
                    <p>We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
                </Content>

                <CardContainer>
                    <Card src={iconOnline} title="Online Banking" text="Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world"/>

                    <Card src={iconBudgeting} title="Simple Budgeting" text="See exactly where your money goes each month. Receive notifications when you're close to hitting your limits."/>

                    <Card src={iconOnboarding} title="Fast Onboarding" text="We don't breaches. Open your account in minutes online and start taking control of your finances right away."/>

                    <Card src={iconApi} title="Open Api" text="Manage your savings, investiments, pension, and much more from one account. Tracking tyour money has never been easier. "/>
                </CardContainer>
            </Responsive>
        </Container>
    )
}