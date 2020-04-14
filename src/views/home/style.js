import styled from 'styled-components';
import '../../assets/css/fonts.css';

const primaryColor = '#DFDFE1';
const secondaryColor = '#151524';


export const Body = styled.div`
position: relative;
color: ${primaryColor}
`;

export const Content = styled.div`
position: relative;
font-family: 'Courier Prime', monospace;
min-height: 100vh;
`;


export const Header = styled.div`
margin: 3rem;
}
`;

export const Title = styled.h3`
font-size: ${props => props.subtitle ? '2rem' : '4rem'};
font-weight: 100;
margin-top: 0;
color:${secondaryColor}
`;



