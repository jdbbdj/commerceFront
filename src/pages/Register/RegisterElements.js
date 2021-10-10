import styled from 'styled-components';
import { mobile } from '../../responsive';

export const RegisterContainer = styled.div`

    width:100vw;
    height:100vh !important;
    background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.9)
    ),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RegisterWrapper = styled.div`

    width:40%;
    padding:20px;
    background-color: white;
    ${mobile(
        {
            width:"75%"
        }
        )}
`;

export const RegisterTitle = styled.h1`
font-size: 24px;
font-weight: 300;
`;

export const RegisterForm = styled.form`
display:flex;
flex-wrap: wrap;
`;

export const RegisterInputUser = styled.input`
flex:1;
min-width: 40%;
margin:20px 10px 0px 0px;
padding: 10px;
`;


export const RegisterAgreement = styled.span`
font-size: 12px;
margin:20px 0px;
`;

export const RegisterSubmitBtn = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color: teal;
color:white;
cursor:pointer;
`;