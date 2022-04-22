import { useRef } from 'react';
import { Container, GlobalStyle, Contents } from './styles/Global'
import Header from './pages/header/index';
import Home from './pages/home/index'
import Cards from './pages/Cards/index'
import Articles from './pages/Articles/index'
import Footer from './pages/Footer/index'

export default function App(){

  const content = useRef(null);

  return(
    <Container>
      <GlobalStyle/>

      <Header contentRef ={content} />

      <Contents ref={content}>
        <Home/>
        <Cards/>
        <Articles/>
        <Footer/>
      </Contents>

    </Container>
  )
}