import React from "react";
import Product from "./Product"




function ProductList({ Products }) {

    return (
        <div className=" md:grid grid-cols-3 gap-2 space-y-2 md:space-y-0   grow">
            {
                Products.map(function (item) {
                    return (
                        <Product
                            key={item.title}{...item}

                        />
                    );
                })
            }
        </div >
    );
}

export default ProductList;

