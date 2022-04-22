import styled from 'styled-components';

const ButtonStyle = styled.button`
    padding: 12px 15px;
    width: 135px;
    border-radius: 18px;
    border: none;
    background: linear-gradient(90deg, hsl(136, 65%, 51%),hsl(192, 70%, 51%));
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: opacity 0.5s;

    &:hover{
        opacity: 0.6
    }
`

export default function Button(props){
    return <ButtonStyle>  Request Invite </ButtonStyle>
}
