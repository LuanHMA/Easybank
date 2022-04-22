import styled from 'styled-components';

const CardContainer= styled.div`
    width: min(250px, 100%);
    display: flex;
    flex-direction: column;
    margin-right: 18px;

    @media(max-width: 1024px){
        margin-top: 18px;
    }
    @media(max-width: 768px){
        text-align:Center;
        align-items:center;
    }

    img{
        margin-bottom: 20px;
        height: 80px;
        width: 80px;
    }
    h2{
        margin-bottom: 15px;
    }

`


export const Card = (props)=>{
    return(
        <CardContainer>
            <img src={props.src}/>

            <h2>{props.title}</h2>

            <p>{props.text}</p>
        </CardContainer>

    )
}