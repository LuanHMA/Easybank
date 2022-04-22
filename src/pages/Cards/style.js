import styled from 'styled-components';

export const Container = styled.section`
    padding-top: 45px;
    padding-bottom: 45px;
    background-color: hsl(0, 0%, 95%);

`
export const Content = styled.div`
    width: min(570px, 100%);

    @media(max-width: 768px){
        text-align:center;
    }
    h1{
        margin-bottom: 15px;
        font-size: 25px;
    }
   
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:flex-start;
    align-items:center;
    margin: 25px 0;

    h2{
        font-size: 22px;
    }

    @media(max-width: 1024px){
        flex-wrap: wrap;
    }
    @media(max-width: 768px){
        justify-content:center;
    }
    @media(max-width: 500px){
        flex-direction: column;
    }

`