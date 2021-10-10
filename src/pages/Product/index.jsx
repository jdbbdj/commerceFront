import React from 'react';

import NavBar from "../../component/NavBar";
import Announcement from "../../component/Announcement";
import NewsLetter from '../../component/NewsLetter';
import Footer from '../../component/Footer';


import { ProductFilterSize, ProductFilterSizeOption,ProductContainer, ProductDesc, ProductFilter, ProductFilterCont, ProductFilterColorOption, ProductFilterTitle, ProductImg, ProductImgCont, ProductInfoCont, ProductPrice, ProductTitle, ProductWrapper, ProductAddCont, ProductAmountCont, ProductAdd, ProductRemove, ProductAmount, ProductAmountButton } from './ProductElement';

const Product = () => {
    return (
        <ProductContainer>
            
            <NavBar/>
            <Announcement/>
            
            <ProductWrapper>
                
                <ProductImgCont>
                    <ProductImg src="https://i.ibb.co/S6qMxwr/jean.jpg" alt=""/>
                </ProductImgCont>

                <ProductInfoCont>
                    <ProductTitle>
                        Billy Jeans
                    </ProductTitle>

                    <ProductDesc>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. ... The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.
                    </ProductDesc>

                    <ProductPrice>
                        $20.00
                    </ProductPrice>

                    <ProductFilterCont>
                            
                        <ProductFilter>
                            <ProductFilterTitle>
                                Color
                            </ProductFilterTitle>
                            <ProductFilterColorOption color="black"/>
                            <ProductFilterColorOption color="darkblue"/>
                            <ProductFilterColorOption color="gray"/>
                            
                        </ProductFilter>

                        <ProductFilter>
                        <ProductFilterTitle>
                                Size
                        </ProductFilterTitle>
                        <ProductFilterSize>
                            <ProductFilterSizeOption>
                                XS
                            </ProductFilterSizeOption>
                            <ProductFilterSizeOption>
                                S
                            </ProductFilterSizeOption>
                            <ProductFilterSizeOption>
                                M
                            </ProductFilterSizeOption>
                            <ProductFilterSizeOption>
                                L
                            </ProductFilterSizeOption>
                            <ProductFilterSizeOption>
                                XL
                            </ProductFilterSizeOption>
                        </ProductFilterSize>
                        </ProductFilter>
                    </ProductFilterCont>

                <ProductAddCont>
                <ProductAmountCont>
                        <ProductRemove/>
                            <ProductAmount>
                                1
                            </ProductAmount>
                        <ProductAdd/>
                </ProductAmountCont>
                <ProductAmountButton>
                    ADD TO CART
                </ProductAmountButton>
                </ProductAddCont>

                </ProductInfoCont>

                


            </ProductWrapper>
            

            <NewsLetter/>
            <Footer/>
        </ProductContainer>
    )
}

export default Product
