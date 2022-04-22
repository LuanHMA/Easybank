import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
    margin: auto;
    z-index: 1;

    @media (max-width: 500px){
        width: 100%;
    }
`

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
    }
    html{
        scroll-behavior: smooth;
    }
    body{
        font-size: 18px;
        font-family: 'Public Sans', sans-serif;
    }
    h1{
        font-weight: 700;
        color: #2e2e2f;
    }
    h2, h3{
        color: #2e2e2f;
        font-weight: 400;
    }
    p{
        font-weight: 300;
        color: hsl(233, 8%, 62%);
    }
    a img {
        &:hover{
            transform: scale(1.1);
            transition: 0.3s;
        }
    }

`

export const Contents = styled.div`
    transition: filter 0.3s;
`