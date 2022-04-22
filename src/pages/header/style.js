import styled, { keyframes } from 'styled-components';

const show = keyframes`
    from{
        opacity: 0;
        transform: scale(.9)
    }
    to{
        opacity: 1;
        transform: scale(1);
    }

`

export const Container = styled.header`
    position: fixed;
    right: 0;
    left: 0;
    z-index: 50;
    width: min(1440px,100%);
    margin: auto;
    padding: 18px;

    display: flex;
    justify-content: space-around;
    align-items:center;

    background: #fff;
    box-shadow: 0 -5px 9px black;
    
    @media(min-width: 2000px){
        justify-content:space-around;
    }
    @media (max-width: 768px){
        button{
            display: none;
        }
    }
    @media(max-width: 600px){
        width: 100%;
        position: fixed 0 auto auto auto;
        justify-content: space-between;
    }

    nav.openMenu{
        position: absolute;
        top: 80px;
        right: 0;
        left: 0;
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: center;
        padding: 12px;
        border-radius: 10px;
        border: none;
        box-shadow: 0px 0px 2px #333;
        animation: ${show} .4s ease;

        ul{
            display: flex;
            flex-direction: column;
            align-items:center;
            flex: 1;
            text-align:center;
        }
        li{
            margin: 5px auto;
            width: 100%;
            padding: 10px;
        }
    }

`
export const Nav = styled.nav `
    z-index: 900;
    background: #fff;

    ul{
        display: flex;
    }
    li{
        margin: auto 4px;
    }
    a{
        color: hsl(233, 8%, 62%);
        font-family: "Public Sans";

        &:hover{
            border-bottom: 2px solid  hsl(192, 70%, 51%); 
            padding-bottom: 2px;
            transition: 0.3s;
            color:hsl(136, 65%, 51%);
        }
    }

    @media(max-width: 550px){
        display: none;
    }
`
export const MenuToggle = styled.div`
    display: none;
    width: 30px;
    height: 30px;
    cursor: pointer;

    > div{
        background: black;
        height: 2px;
        width: 100%;
        margin: 5px auto;
        transition-duration: 0.3s;
    }

    .top-bar.active{
        transform: translate(0px, 7px) rotate(45deg);
    }
    .mid-bar.active{
        opacity: 0;
    }
    .bot-bar.active{
        transform: translate(0px, -7px) rotate(-45deg);
    }

    @media(max-width: 550px){
        display: block;
    }

`