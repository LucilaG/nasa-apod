import styled from 'styled-components';
import '../../assets/css/fonts.css';

const primaryColor = '#353034';
const secondaryColor = '#2B282B';
const thirdColor = '#DFDFE1';

export const Article = styled.article`
padding: 0.625rem;
`;

export const CardTitle = styled.h3`
text-align: center;
color: ${primaryColor};
`;


export const Item = styled.div`
position: relative;
margin: 3rem;
border: 1px solid  ${({ primaryColor }) => primaryColor || " "};
border-radius: 0.625rem;
background-color: white;
&:hover { 
    box-shadow: 0 0 1.875rem ${thirdColor}; 
}; 
`;


export const Row = styled.div`
display: flex;
flex-wrap: wrap;
gap: 3rem;
padding: 3rem;
`;

export const Paragraph = styled.p`
font-weight: ${({ primary }) => primary ? '600' : '400'};
color: ${({ primary }) => primary ? primaryColor : secondaryColor};
text-transform: capitalize;
flex: 1;
`;

export const Image = styled.div`
background: url(${({ img }) => img}) no-repeat;
background-size: cover;
flex: 2;
min-height: 70vh;
min-width: 40vh;
`;