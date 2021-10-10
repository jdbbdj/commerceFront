import { Add, AttachMoney, Remove } from '@material-ui/icons';
import styled from 'styled-components';
import { mobile } from "../../responsive";

export const CartContainer = styled.div`

`;

export const CartWrapper = styled.div`
padding:20px;
${mobile(
        {
            margin:"10px"
        }
        )}
`;

export const CartTitle = styled.h1`
font-weight: 300;
text-align: center;
`;

export const CartWrapperTop = styled.div`
display:flex;
align-items:center ;
justify-content: space-between;
padding:20px;
`;

export const CartTopTexts = styled.div`

flex:1;
display:flex;
justify-content: space-around;
${mobile(
        {
            display:"none"
        }
        )}
`;

export const CartTopText = styled.span`
text-decoration: underline;
cursor:pointer;
margin:0px 10px;
`;

export const CartTopButton = styled.button`
padding:10px;
font-weight: 600;
cursor:pointer;
border: ${props=>props.type === "filled" && "none"};
background-color: ${props=>props.type  === "filled" ? "black" : "transparent"};
color: ${props=>props.type  === "filled" && "white"};

`;


export const CartWrapperBottom = styled.div`
display:flex;
align-items:center;
${mobile(
        {
            flexDirection:"column"
        }
        )}

`;

export const CartBottomInf= styled.div`
flex:3;
`;

export const CartProduct = styled.div`
display: flex;
justify-content: space-between;
${mobile(
        {
            flexDirection:"column",
            border:"2px solid #eee"
        }
        )}
`;

export const CartProductDetailCont = styled.div`
flex:2;
display:flex;

`;

export const CartProductDetails = styled.div`
padding:20px;
display:flex;
flex-direction: column;
justify-content: space-around;
`;

export const CartDetailName = styled.span`

`;

export const CartDetailId = styled.span`

`;

export const CartDetailColor = styled.div`
width:20px;
height:20px;
border-radius: 50%;
background-color:${props=>props.color};
`;

export const CartDetailSize = styled.span`

`;

export const CartImg = styled.img`
width:200px;

`;

export const ProductPriceDetails = styled.div`
flex:1;

display:flex;
align-items: center;
justify-content: center;
flex-direction: column;
`;

export const ProductAmount = styled.span`
${mobile(
        {
            margin:"5px 15px"
        }
        )}
`;

export const ProductAmountCont = styled.div`
align-items: center;
justify-content: center;
display:flex;
font-size: 24px;

margin-bottom: 20px;

&:hover ${ProductAmount}{
font-weight: 600;
}


`;

export const ProductAdd = styled(Add)`
cursor:pointer;
&:hover{
    color:green;
}
`;



export const ProductRemove = styled(Remove)`
cursor:pointer;
&:hover{
    color:red;
}
`;

export const ProductPriceCont = styled.div`

`;

export const ProductPriceIcon = styled(AttachMoney)`

`;

export const ProductPrice = styled.span`
font-size: 30px;
font-weight: 200;
`;

export const ProductBreak = styled.div`
background-color: #eee;
border:none;
height:0.2vh;
`;

export const CartBottomSummary = styled.div`

flex:1;
border:0.5px solid lightgray;
border-radius: 10px;
padding:20px;
height:50vh;
`;

export const CartSummaryTitle = styled.h1`
font-weight: 200;

`;

export const SummaryItem = styled.div`
margin:30px 0px;
display:flex;
justify-content: space-between;
font-weight:${props=>props.type === "total" && "500"};
font-size: ${props=>props.type === "total" && "24px"};
`;

export const SummaryItemText = styled.span`

`;

export const SummaryItemPrice = styled.span`

`;

export const SummaryButton = styled.button`
width:100%;
padding:10px;
background-color: black;
color:white;
font-weight: 300;
cursor:pointer;
border:none;
`;