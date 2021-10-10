import React from 'react'
import { CategoryItemButton,CategoryItemTitle, CategoryItemContainer, CategoryItemImage, CategoryItemInfoCont } from './CategoryItem'

const CategoryItem = ({item}) => {
    return (
        <CategoryItemContainer>
            <CategoryItemImage src={item.imag} alt=""/>
            <CategoryItemInfoCont>
                <CategoryItemTitle>
                {item.title}
                </CategoryItemTitle>
                <CategoryItemButton>
                    SHOP NOW
                </CategoryItemButton>
            </CategoryItemInfoCont>
        </CategoryItemContainer>
    )
}

export default CategoryItem
