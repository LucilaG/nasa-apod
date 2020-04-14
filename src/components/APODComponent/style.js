import styled from 'styled-components';
import '../../assets/css/fonts.css';

const primaryColor = '#353034';
const secondaryColor = '#2B282B';
const thirdColor = '#DFDFE1';

export const Article = styled.article`
padding: 10px;
`;

export const CardTitle = styled.h3`
text-align: center;
color: ${primaryColor};
`;


export const Item = styled.div`
position: relative;
margin: 3rem;
border: 1px solid  ${props => props.primaryColor || " "};
border-radius: 10px;
background-color: white;
&:hover { 
    box-shadow: 0 0 30px ${thirdColor}; 
}; 
`;


export const Row = styled.div`
border-bottom: 1px solid #DFDFE1;
display: flex;
`;

export const Paragraph = styled.p`
font-weight: ${props => props.primary ? '600' : '400'};
color: ${props => props.primary ? primaryColor : secondaryColor};
margin: ${props => props.description ? '0 4rem' : '0' };
text-transform: capitalize; 
`;