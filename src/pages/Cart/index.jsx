import React from 'react'
import Announcement from '../../component/Announcement'
import Footer from '../../component/Footer'
import NavBar from '../../component/NavBar'

import { CartBottomInf, CartBottomSummary, CartContainer, CartDetailColor, CartDetailId, CartDetailName, CartDetailSize, CartImg, CartProduct, CartProductDetailCont, CartProductDetails, CartSummaryTitle, CartTitle, CartTopButton, CartTopText, CartTopTexts, CartWrapper, CartWrapperBottom, CartWrapperTop, ProductAdd, ProductAmount, ProductAmountCont, ProductBreak, ProductPrice, ProductPriceCont, ProductPriceDetails, ProductPriceIcon, ProductRemove, SummaryButton, SummaryItem, SummaryItemPrice, SummaryItemText } from './CartElements'

const Cart = () => {
    return (
        <CartContainer>
            <NavBar/>
            <Announcement/>

                <CartWrapper>
                <CartTitle>
                YOUR BAG
                </CartTitle>
                    <CartWrapperTop>
                    <CartTopButton>
                            CONTINUE SHOPPING?
                        </CartTopButton>
                        <CartTopTexts>
                            <CartTopText>
                                Shopping bag(2)
                            </CartTopText>
                            <CartTopText>
                                Your Wishlists(0)
                            </CartTopText>
                        </CartTopTexts>
                        <CartTopButton type="filled">
                            CHECK OUT NOW
                        </CartTopButton>
                    </CartWrapperTop>
                    <CartWrapperBottom>
                        <CartBottomInf>
                            <CartProduct>
                                <CartProductDetailCont>
                                    <CartImg src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                    <CartProductDetails>
                                        <CartDetailName>
                                            <b>Product: </b> JESSE THUNDER SHOES
                                        </CartDetailName>

                                        <CartDetailId>
                                        <b>ID: </b> 123232131312
                                        </CartDetailId>

                                        <CartDetailColor color="black"/>

                                        <CartDetailSize>
                                        <b>Size: </b> 37.5
                                        </CartDetailSize>
                                    </CartProductDetails>
                                </CartProductDetailCont>

                                <ProductPriceDetails>
                                        <ProductAmountCont>
                                        <ProductRemove/>
                                            <ProductAmount>
                                                2
                                            </ProductAmount>
                                            <ProductAdd/>
                                            
                                        </ProductAmountCont>
                                        <ProductPriceCont>
                                            <ProductPriceIcon/>
                                            <ProductPrice>
                                                100
                                            </ProductPrice>
                                        </ProductPriceCont>
                                        
                                </ProductPriceDetails>
                            </CartProduct>
                            <ProductBreak/>
                            <CartProduct>
                                <CartProductDetailCont>
                                    <CartImg src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                                    <CartProductDetails>
                                        <CartDetailName>
                                            <b>Product: </b> JESSE THUNDER SHOES
                                        </CartDetailName>

                                        <CartDetailId>
                                        <b>ID: </b> 123232131312
                                        </CartDetailId>

                                        <CartDetailColor color="black"/>

                                        <CartDetailSize>
                                        <b>Size: </b> 37.5
                                        </CartDetailSize>
                                    </CartProductDetails>
                                </CartProductDetailCont>

                                <ProductPriceDetails>
                                        <ProductAmountCont>
                                        <ProductRemove/>
                                            <ProductAmount>
                                                2
                                            </ProductAmount>
                                            <ProductAdd/>
                                            
                                        </ProductAmountCont>
                                        <ProductPriceCont>
                                            <ProductPriceIcon/>
                                            <ProductPrice>
                                                100
                                            </ProductPrice>
                                        </ProductPriceCont>
                                        
                                </ProductPriceDetails>
                            </CartProduct>
                        </CartBottomInf>


                        <CartBottomSummary>
                            <CartSummaryTitle>
                                ORDER SUMMARY
                            </CartSummaryTitle>

                            <SummaryItem>
                                <SummaryItemText>
                                    Subtotal
                                </SummaryItemText>
                                <SummaryItemPrice>
                                    $100
                                </SummaryItemPrice>
                            </SummaryItem>

                            <SummaryItem>
                                <SummaryItemText>
                                    Estimated Shipping
                                </SummaryItemText>
                                <SummaryItemPrice>
                                    $5.90
                                </SummaryItemPrice>
                            </SummaryItem>

                            <SummaryItem>
                                <SummaryItemText>
                                    Shipping Discount
                                </SummaryItemText>
                                <SummaryItemPrice>
                                    $ - 2.8
                                </SummaryItemPrice>
                            </SummaryItem>

                            <SummaryItem type="total">
                                <SummaryItemText >
                                    Total
                                </SummaryItemText>
                                <SummaryItemPrice>
                                    $ 100
                                </SummaryItemPrice>
                            </SummaryItem>
                        
                        <SummaryButton>
                            CHECKOUT NOW
                        </SummaryButton>
                        </CartBottomSummary>
                    </CartWrapperBottom>
                </CartWrapper>

            <Footer/>
        </CartContainer>
    )
}

export default Cart
