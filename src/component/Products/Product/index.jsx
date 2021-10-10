import React from 'react';
import { ProductCircle,ProductShopCart,ProductSearch,ProductHeart, ProductContainer, ProductIconCont, ProductImage, ProductInfoCont } from './ProductElements';

const Product = ({item}) => {
    return (
        <ProductContainer>
                        <ProductCircle>

</ProductCircle>
<ProductImage src={item.img}/>
<ProductInfoCont>
    <ProductIconCont>
        <ProductShopCart/>
    </ProductIconCont>

    <ProductIconCont>
        <ProductSearch/>
    </ProductIconCont>

    <ProductIconCont>
        <ProductHeart/>
    </ProductIconCont>
</ProductInfoCont>
        </ProductContainer>
    )
}

export default Product
