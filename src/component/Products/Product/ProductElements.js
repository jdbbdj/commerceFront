import styled from 'styled-components';
import { ShoppingBasketOutlined,
        SearchOutlined,
        FavoriteBorderOutlined
} from '@material-ui/icons';

export const ProductInfoCont = styled.div`
    opacity:0;
    width:100%;
    z-index:3;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color: rgba(0,0,0,0.2);
    display:flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor:pointer;
`;


export const ProductContainer = styled.div`
    flex:1;
    margin:5px;
    min-width:280px;
    height:350px;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color:#f5fbfd;
    position:relative;
    & ${ProductInfoCont}:hover{
        opacity:1;
    }
`;

export const ProductCircle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`;

export const ProductImage = styled.img`
height:75%;
object-fit: cover;
z-index: 2;
`;



export const ProductIconCont = styled.div`
    cursor:pointer;
    width:40px;
    height:40px;
    border-radius: 50%;
    background-color: white;
    display:flex;
    align-items: center;
    justify-content: center;
    margin:10px;
    transition: all 0.5s ease;
    &:hover{
        background-color: #e9f5f5;
        color:#ffb3b3;
        transform:scale(1.1);
    }
`;



export const ProductShopCart = styled(ShoppingBasketOutlined)``;

export const ProductSearch = styled(SearchOutlined)`

`;

export const ProductHeart = styled(FavoriteBorderOutlined)`

`;

