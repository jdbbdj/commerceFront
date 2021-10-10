import { Add, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from "../../responsive";

export const ProductContainer = styled.div`

`;

export const  ProductWrapper = styled.div`
padding: 50px;
display:flex;
${mobile(
        {
            padding:"10px",
            flexDirection:"column"
        }
        )}
`;

export const ProductImgCont = styled.div`
flex:1;

`;

export const ProductImg = styled.img`
width:100%;
height:90vh;
object-fit: cover;
${mobile(
        {
height:"40vh"
}
        )}
`;

export const ProductInfoCont = styled.div`
flex:1;
padding:0px 50px;
${mobile(
        {
padding:"0 10px"
}
        )}
`;

export const ProductTitle = styled.h1`
font-weight: 200;
`;

export const ProductDesc = styled.p`
margin: 20px 0px;
`;

export const ProductPrice = styled.span`
font-size: 40px;
`;

export const ProductFilterCont = styled.div`
display: flex;
justify-content: space-between;
width:50%;
margin:30px 0px;
${mobile(
        {
width:"100%"
}
        )}
`;

export const ProductFilter = styled.div`
display:flex;
align-items: center;
`;

export const ProductFilterTitle = styled.span`
font-size: 20px;
font-weight: 200;
`;

export const ProductFilterColor = styled.select`

`;

export const ProductFilterColorOption = styled.div`
width:20px;
height:20px;
border-radius: 50%;

background-color: ${props=>props.color};
margin:0px 5px;
cursor:pointer;
`;

export const ProductFilterSize = styled.select`
margin-left: 10px;
padding:5px;
border:none;
border-bottom:1px solid black;
cursor:pointer;
`;

export const ProductFilterSizeOption = styled.option`

`;

export const ProductAddCont = styled.div`

display:flex;
align-items: center;
width:50%;
justify-content: space-between;
margin:30px 0px;
${mobile(
        {
width:"100%"
}
        )}
`;

export const ProductAmountCont = styled.div`
display:flex;
align-items: center;
font-weight: 700;

`;

export const ProductAdd = styled(Add)`

`;

export const ProductRemove = styled(Remove)`

`;

export const ProductAmount = styled.span`
width:30px;
height:30px;
border-radius: 10px;
display:flex;
border: 1px solid teal;
align-items: center;
justify-content: center;
margin:0px 10px;
`;

export const ProductAmountButton = styled.button`

padding:15px;
border:2px solid teal;
background-color: white;
cursor:pointer;
font-weight: 500;

&:hover{
    background-color: #f8f4f4;
}
`;