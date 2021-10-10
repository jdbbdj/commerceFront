import styled from 'styled-components';
import { ArrowLeftOutlined,ArrowRightOutlined } from '@material-ui/icons';

import { mobile } from '../../responsive';

export const SliderContainer = styled.div`

    height:100vh;
    width:100%;
    margin-top:10px;
    display:flex;

    position:relative;
    overflow:hidden;
    ${mobile(
        {
            display:"none"
    
    }
        )}
`;

export const SliderArrowCont = styled.div`
    width:50px;
    height:50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    position:absolute;
    top:0;
    bottom:0;
    margin:auto;
    left:${props=>props.direction === "left" && "10px"};
    right:${props=>props.direction === "right" && "10px"};
    cursor:pointer;
    opacity:0.35;
    z-index:2;
    
`;

export const SliderArrowLeftIcon = styled(ArrowLeftOutlined)`
    
`;

export const SliderArrowRighttIcon = styled(ArrowRightOutlined)`
    
`;

export const SliderWrapper = styled.div`
    height:100%;
    display:flex;
    transition:all 0.5s ease-in-out;
    transform:translateX(${props=>props.slideIndex*-100}vw);
`;

export const SlideContent = styled.div`
    display:flex;
    align-items: center;
    width:100vw;
    height:100vh;
    background-color: #${props=>props.bg};
    
`;

export const SlideImgContainer = styled.div`
    flex:1;

    height:100%;
`;

export const SlideImage = styled.img`
    height:80%;
`;

export const SlideInfoContainer = styled.div`
flex:1;
padding:50px;
`;

export const SlideInfoTitle = styled.h1`
font-size:70px;
`;

export const SlideInfoDesc = styled.p`
margin:50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`;

export const SlideInfoButton = styled.button`
padding:10px;
background-color:transparent;
font-size:20px;
cursor:pointer;
`;