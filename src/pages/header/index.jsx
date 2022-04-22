import { useRef, useState, useEffect } from 'react';
import { Container, Nav, MenuToggle } from './style';
import Logo from '../../assets/images/logo.svg';
import Button from '../../components/Button';

export default function Header(props){

    const content = props.contentRef;
    const topBar = useRef(null);
    const midBar = useRef(null);
    const botBar = useRef(null);
    const menu = useRef(null);

    const [ stateMenu, setStateMenu ] = useState(false);//Se True o menu abre se False o menu fecha
    const [ windowsWidth, setWindowsWidth ] = useState(0);

    function alternateMenu(){
        const bars = [ topBar.current, midBar.current, botBar.current ];
        const active = "active";

        bars.forEach(bar=>{
            bar.classList.toggle(active);

            if(bar.classList[1] == "active"){
                setStateMenu(true);
            }
            else{
                setStateMenu(false);
            }
        })  

    }    

    useEffect(()=>{
        window.addEventListener("resize" , ()=>{
            setWindowsWidth(window.innerWidth);
        })

        if(windowsWidth > 550){
            setStateMenu(false);//Fecha o menu
        }
    }, [windowsWidth])

    useEffect(()=> {
        if(stateMenu){
            openMenu();
            console.log("Menu aberto")
        }
        else{
            closeMenu();
            console.log("Menu fechado")
        }
    }, [stateMenu])

    function openMenu(){
        menu.current.classList.add("openMenu")
        menu.current.classList.remove("closeMenu")
        content.current.style.filter = "blur(6px)"
    }
    function closeMenu(){
        menu.current.classList.add("closeMenu")
        menu.current.classList.remove("openMenu")
        content.current.style.filter = "blur(0)"

    }

    return(
        <Container>

            <a href="#home">
                <img src={Logo} alt="Easybank logotipo" />
            </a>
        
            

            <MenuToggle onClick={ ()=> alternateMenu() }>
                <div className="top-bar" ref={topBar} ></div>
                <div className="mid-bar" ref={midBar}></div>
                <div className="bot-bar" ref={botBar}></div>
            </MenuToggle>

            <Nav ref={menu}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#articles">Articles</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>                      
            </Nav>

            <Button/>

        </Container>
    )
}