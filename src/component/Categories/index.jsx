import React from 'react'
import { CategoriesContainer } from './CategoriesElements';
import { categoryItems } from '../../data';
import CategoryItem from './CategoryItem';

const Categories = () => {
    return (
        <CategoriesContainer>
            {categoryItems.map(item=>(<CategoryItem item={item} key={item.id}/>))}
        </CategoriesContainer>
    )
}

export default Categories
