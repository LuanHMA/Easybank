import styled from 'styled-components';
import BgDesktop from '../../assets/images/bg-intro-desktop.svg'
// import BgMobile from '../../assets/images/bg-intro-mobile'

export const Container = styled.main`//Container que engloba a Imagem e a Caixa de texto
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100vh;
    align-items: center;
    overflow: hidden;
    background: #fff;

    @media(max-width: 1024px){
        grid-template-columns: 50% 50%; 
    }

    @media(max-width: 768px){
        display: flex;
        flex-direction: column-reverse;
        margin: auto;
        width: 100%;

    }

`

export const ImgContainer = styled.div`//Container da Img e que contém o Background
    display: flex;
    justify-content: flex-end;
    background: url(${BgDesktop}) no-repeat;

    @media(min-width: 1400px){
        justify-content: flex-start;
    }
    @media(max-width: 768px){
        justify-content:center;
        width: 100%;
        background-size: 800px;
        background-position: center 0px;
    }
    @media(max-width: 500px){
        background-position: center -99px;
    }

    img{
        position: relative;
        object-fit: cover;
        right: -200px;

        @media(max-width: 1024px){
            right: -100px;
            height: 650px;
        }
        @media(max-width: 768px){
            position: initial;
        }
        @media(max-width: 600px){
            width: 100%;
            height: 100%;
        }

    }
`

export const Content = styled.div`//Container do bloco de texto
    display: flex;
    justify-content: flex-end;
    margin-left: 28px;

    @media(max-width: 1024px){
        margin-left: 48px;
        margin-right: 28px;
    }
    @media(max-width: 768px){
        justify-content: center;
        margin: 20px auto auto auto;
        width: 90%;
    }
    
    div.content{//Bloco de texto
        max-width: 400px;

        @media(max-width: 768px){
            text-align:center;
            padding-bottom: 40px;
        }
        h1{
            font-weight: 400;
            margin-bottom: 15px;
        }
        p{
            margin-bottom: 15px;
        }
    }
   

`   