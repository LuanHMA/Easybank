import styled from 'styled-components';

export const Container = styled.section`
    padding-top: 45px;
    padding-bottom: 45px;

    @media(max-width: 768px) and (min-width: 600px){
        h1.titleArticle{
            text-align:center;
        }
    }
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:flex-start;
    align-items:center;
    margin: 25px 0;

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
export const ArticleContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content:flex-start;
    align-items:center;
    margin: 25px 0;

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