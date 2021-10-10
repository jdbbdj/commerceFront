import React from 'react'
import { ProductsContainer } from './ProductsElements'
import { popularProducts } from '../../data';
import  ProductContainer  from './Product';
const Products = () => {
    return (
        <ProductsContainer>
            {popularProducts.map(item=>(<ProductContainer item={item} key={item.id}/>))}
        </ProductsContainer>
    )
}

export default Products
