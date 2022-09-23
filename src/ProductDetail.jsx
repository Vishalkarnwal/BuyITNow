import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getProductData } from "./Api";
import Loading from "./Loading";
import { HiArrowNarrowLeft, HiArrowNarrowRight } from "react-icons/hi";
import NotFound from "./NotFund";

function ProductDetail({ onAddToCart }) {

    const id = +useParams().id;
    const [product, setProduct] = useState();
    const [loading, setLoading] = useState(true);
    const [count, setCount] = useState(1);


    useEffect(function () {
        const p = getProductData(id);

        p.then(function (response) {

            setProduct(response.data);
            setLoading(false);
        })
            .catch(function (error) {
                setLoading(false);


            });

    }, [id]);


    function handleCountChange(event) {
        setCount(+event.target.value)


    }

    function handleButtonClick() {
        onAddToCart(id, count)

    }



    if (loading) {
        return <Loading />;
    }

    if (!product) {
        return <NotFound />;
        // return <div className='text-3xl bg-red-600'> Not found</div>
    }






    return (
        <div>

            <div className="flex flex-col justify-center m-6">
                <Link className="  text-2xl  text-blue-700" to={"/"} >
                    <HiArrowNarrowLeft className="text-5xl bg-white rounded-full border-2 border-blue-700" />
                </Link>
            </div>

            <div className=" flex justify-center ">
                <div class=" mt-6 rounded-lg  py-12 mx-60  shadow-lg shadow-black  p-10 flex   bg-white justify-center text-lg  ">

                    <div className="h-auto   max-w-lg w-80 ">
                        <img class=" " src={product.thumbnail} />
                    </div>
                    <div class="mx-10  flex flex-col justify-center ">
                        <h1 class="font-bold  ">{product.title}</h1>
                        <h3 class="mt-2 font-bold  ">
                            $15.00
                        </h3>
                        <p class="mt-2 text-gray-700">{product.category}</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae fugiat facere enim quasi, reprehenderit ut voluptate quo ea porro molestiae.</p>
                        <div class="mt-4 ">

                            <input

                                onChange={handleCountChange}
                                value={count}
                                className="text-gray-500 text-center border border-black rounded-lg w-10 "
                                type="number"
                            />

                            <button onClick={handleButtonClick} className=" bg-red-500 rounded-md px-4   ml-2"> ADD TO CART</button> </div>
                        <div className="flex justify-between">


                        </div>
                    </div>
                </div>
            </div>
            <div className=" flex  justify-between m-7  mb-20 text-2xl text-blue-700 ">
                <div  className="flex flex-col   items-center m-6">
                    {id > 1 &&
                        <Link className=" flex flex-col " to={"/products/" + (id - 1)} >
                            <HiArrowNarrowLeft className="text-5xl bg-white rounded-full border-2 border-blue-700" />
                            Preview</Link>
                    }
                </div>
                <div>
                    <Link className="flex flex-col   items-center m-6 text-blue-700" to={"/products/" + (id + 1)} >
                        
                        <HiArrowNarrowRight className="text-5xl bg-white rounded-full border-2 border-blue-700" /> NEXT</Link>
                </div>
            </div>
        </div>

    );


}


export default ProductDetail;

