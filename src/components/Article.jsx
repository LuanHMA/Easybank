import styled from 'styled-components';

const ArticleContainer= styled.div`
    width: min(290px, 100%);
    display: flex;
    flex-direction: column;
    margin-right: 23px;

    @media(max-width: 1024px){
        margin-top: 18px;
    }
    @media(max-width: 768px){
        text-align:Center;
        align-items:center;
        margin-right: 15px;
        margin-bottom: 30px;
    }
    @media(max-width: 600px){
        margin-right: 0;
    }

    img{
        margin-bottom: 20px;
        width: 100%;
        height: 193px;
    }

`
const TextContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items:flex-start;

    @media(max-width: 768px){
        text-align:left;
    }
    @media(max-width: 500px){
        width: 85%;
    }

    small{
        font-size: 14px;
        margin-bottom: 5px;
        color: hsl(233, 8%, 62%);
        font-weight: 400;
    }
    h3{
        font-size: 20px;
        font-weight: 400;
    }
    p{
        margin-top: 10px;
        font-size: 16px;
    }
`

export const Article = (props)=>{
    return(
        <ArticleContainer>
            <img src={props.src}/>

            <TextContainer>
                <small>{props.author}</small>

                <h3>{props.title}</h3>

                <p>{props.text}</p>
            </TextContainer>
            
        </ArticleContainer>

    )
}