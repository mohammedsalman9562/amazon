import React from 'react';

const Products = ({ productData }: any) => {
    
    return (
    <div>
        {productData.map((item) => (
                <p>{item.title}</p>
        ))}
    </div>
    );
};

export default Products;
