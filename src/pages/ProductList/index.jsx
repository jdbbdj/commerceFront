import React from 'react'
import NavBar from "../../component/NavBar";
import Announcement from "../../component/Announcement";
import NewsLetter from '../../component/NewsLetter';
import Products from '../../component/Products';
import Footer from '../../component/Footer';
import {  FilterOption,  FilterSelect, ProductFilter, ProductFilterCont, ProductFilterText, ProductListPageCont, ProductPageTitle } from './ProductListElements'

const ProductList = () => {
    return (
        <ProductListPageCont>
            
            <NavBar/>
            <Announcement/>

            <ProductPageTitle>
                Dresses
            </ProductPageTitle>

            <ProductFilterCont>
                <ProductFilter>
                    <ProductFilterText>
                    Filter Products:
                    </ProductFilterText>
                    <FilterSelect>
                        <FilterOption disabled selected >
                        Color
                        </FilterOption>
                        <FilterOption color="white" textColor="000">
                            White
                        </FilterOption>
                        <FilterOption color="black" textColor="fff">
                            Black
                        </FilterOption>
                        <FilterOption color="black" textColor="FFADAD">
                            Red
                        </FilterOption>
                        <FilterOption color="black" textColor="FCFFA6">
                            Yellow
                        </FilterOption>
                        <FilterOption color="black" textColor="C1FFD7">
                            Green
                        </FilterOption>
                    </FilterSelect>
                    <FilterSelect>
                        <FilterOption disabled selected>
                        Sizes
                        </FilterOption>
                        <FilterOption color="black" textColor="white">
                            XS
                        </FilterOption>
                        <FilterOption color="black" textColor="white">
                            S
                        </FilterOption>
                        <FilterOption color="black" textColor="white">
                            M
                        </FilterOption>
                        <FilterOption color="black" textColor="white">
                            L
                        </FilterOption>
                        <FilterOption color="black" textColor="white">
                            XL
                        </FilterOption>
                    </FilterSelect>
                </ProductFilter>

                <ProductFilter>
                    <ProductFilterText>
                    Sort Products:
                    </ProductFilterText>
                    <FilterSelect>
                        <FilterOption disabled selected>
                        Newest
                        </FilterOption>
                        <FilterOption color="black" textColor="white">
                            Price (asc)
                        </FilterOption>
                        <FilterOption color="black" textColor="white">
                            Price (desc)
                        </FilterOption>
                    </FilterSelect>
                </ProductFilter>

            </ProductFilterCont>

            <Products/>
            <NewsLetter/>
            <Footer/>
        </ProductListPageCont>
    )
}

export default ProductList
