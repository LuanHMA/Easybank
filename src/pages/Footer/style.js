import styled from 'styled-components';

export const Container = styled.footer`
    padding-top: 45px;
    padding-bottom: 45px;
    background: hsl(233, 26%, 24%);

    @media(max-width: 650px){
      
    }

`

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items:center;

    @media(min-width: 650px){
        flex-direction: row;
    }

`
export const FooterIcons = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:Center;

    @media(min-width: 650px){
        align-items:flex-start;
    }

    a.logo-link{
        margin-bottom: 20px;

        img{
            background: #fff;
            padding:5px;
        }
    }

    div.social-networks{
        a{
            margin-right: 10px;
        }
        img{
            width: 25px;
        }
    }

`

export const FooterNav = styled(FooterIcons)`
    margin: 20px auto;
    
    ul{
        display: flex;
        flex-direction: column;
        align-items:center;

        @media(min-width: 650px){
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
    li{
        display: flex;
        flex-direction: column;
        align-items:Center;

        a{
            margin: 7px auto;
            color: #fff;
            font-weight: 300;
        }

        @media(min-width: 650px){
            flex-direction: column;
            flex-wrap: wrap;
            margin: auto 40px;
        }

    }

`

export const FooterInfo = styled(FooterIcons)`
    display: flex;
    flex-direction: column;
    align-items:center;

    p{
        margin-top: 20px;
    }
    @media (min-width: 650px) and (max-width: 940px){
        align-items:flex-start;
    }
    @media(min-width: 940px){
        align-items:flex-end;
    }
`