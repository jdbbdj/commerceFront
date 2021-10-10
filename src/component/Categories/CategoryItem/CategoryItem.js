import styled from 'styled-components';
import { mobile } from '../../../responsive';


export const CategoryItemContainer = styled.div`
flex:1;
margin: 3px;
position:relative;
height: 70vh;
`;

export const CategoryItemImage = styled.img`
    width:100%;
    height:100%;
    object-fit: cover;
    ${mobile(
        {
            height:"20vh"

    
    }
        )}
    
`;

export const CategoryItemInfoCont = styled.div`
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const CategoryItemTitle = styled.h1`
    color:white;
    margin-bottom: 20px;
`;

export const CategoryItemButton = styled.button`
    border:none;
    padding:10px;
    background-color: white;
    color:gray;
    cursor:pointer;
    font-weight: 600;
`;