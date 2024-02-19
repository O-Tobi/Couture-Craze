import React from "react";
import CategoryItem from "../category-item/category-item";
import './category-directory.scss';

const CategoryDirectory = ({categories}) => {
  
    return (
        <div className="category-directory-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>

    )
};

export default CategoryDirectory;