import React from "react";
import { Link } from "react-router-dom";



function Product({ title, price, category, thumbnail, id, rating,  brand }) {
    return (
        <div className=" max-w-xs rounded-md  shadow-md shadow-black ">
            <div className="w-full  aspect-square ">
                <img className="object-cover w-full h-full" src={thumbnail} />
            </div>
            <div className=" mt-4 ml-4 font-semibold">
                <div>{category}</div>
                <div> {title}</div>
                <div>Rs.{price}</div>
                <div>{rating}</div>
                <div>{brand}</div>
            </div>
            <div className="flex justify-center">
                <Link className="bg-blue-500 rounded-md border border-black m-2 text-white font-semibold px-2 py-1 shadow-md shadow-slate-500" to={"/products/" + id}>  View Detail</Link>
            </div>
        </div>




    );

}
export default Product;
