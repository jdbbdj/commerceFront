import styled from 'styled-components';
import { Send } from '@material-ui/icons';
import { mobile } from '../../responsive';

export const NewsLetterContainer = styled.div`
    height:60vh;
    background-color: #fcf5f5;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    overflow:hidden;

`;

export const NewsLetterTitle = styled.h1`
font-size: 70px;
margin-bottom: 20px;
${mobile(
        {
            fontSize:"60px"

    
    }
        )}
`;

export const NewsLetterDesc = styled.p`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile(
        {
            textAlign:"center"

    
    }
        )}
`;

export const NewsLetterInputCont = styled.div`
display:flex;
width:50%;
height:40px;
background-color: white;
justify-content: space-between;
border:1px solid lightgray;

${mobile(
        {
            width:"80%"
    
    }
        )}
`;

export const NewsLetterInput = styled.input`
border:none;
flex:8;
padding-left: 20px;
`;

export const NewsLetterButton = styled.button`
flex:1;
cursor:pointer;
border:none;
background-color: teal;
color:white;
`;

export const NewsLetterIcon = styled(Send)`

`;