import styled from 'styled-components';

export const Responsive = styled.div`
    width: min(1440px, 85%);
    margin: auto;
    
    @media(max-width: 600px){
        width: 90%;
        margin: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`