import styled from 'styled-components';
import { mobile } from '../../responsive';

export const LoginContainer = styled.div`

    width:100vw;
    height:100vh !important;
    background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.9)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginWrapper = styled.div`

    width:25%;
    padding:20px;
    background-color: white;
    ${mobile(
        {
            width:"75%"
        }
        )}
`;

export const LoginTitle = styled.h1`
font-size: 24px;
font-weight: 300;
`;

export const LoginForm = styled.form`
display:flex;
flex-direction: column;
`;

export const LoginInputUser = styled.input`
flex:1;
min-width: 40%;
margin:10px 0px;
padding: 10px;
`;


export const LoginAgreement = styled.span`
font-size: 12px;
margin:20px 0px;
`;

export const LoginSubmitBtn = styled.button`
width:40%;
border:none;
padding:15px 20px;
background-color: teal;
color:white;
cursor:pointer;
margin-bottom: 10px;
`;

export const LoginLinks = styled.a`
margin:12px 0px;
font-size: 12px;
text-decoration:underline;
cursor:pointer;
`;