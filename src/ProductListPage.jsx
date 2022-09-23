import React, { useState } from 'react';
import ProductList from "./ProductList"
import NoMatching from './NoMatching';
import { useEffect } from 'react';
import { getProductList } from './Api';
import Loading from './Loading';




function ProductListPage() {

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
 
  const [query, setQuery] = useState("");
  const [Sort, setSort] = useState("default");

  useEffect(function () {
    getProductList().then(function (products) {
      setProductList(products);
      setLoading(false);
    })

      

  }, []);
  


  let Data = productList.filter(function (item) {
    const lowerCasetitle = item.title.toLowerCase();
    const lowerCaseQuery = query.toLowerCase();

    return lowerCasetitle.indexOf(lowerCaseQuery) != -1;
  });

  if (Sort == "price") {
    Data.sort(function (x, y) {
      return x.price - y.price;
    });
  }
  else if (Sort == "name") {
    Data.sort(function (x, y) {
      return x.title < y.title ? -1 : 1;

    });
  }

  function handlQueryChange(event) {
    setQuery(event.target.value);
  }

  function handSortChange(event) {
    setSort(event.target.value);

 
  }
 
  
  if (loading) {
    return <Loading/>
 
  }

  return (
    <div className=" p-2 max-w-6xl  px-9 py-12 bg-white  pt-10 mx-auto my-16 rounded-md shadow-md shadow-black "  >
      <div className="   flex  mb-9">
        <input
          value={query}
          placeholder='Search Here!'
          className='border h-8 rounded-md border-gray-700  ml-auto text-center '
          onChange={handlQueryChange}
        />

        <select
          onChange={handSortChange}
          className="  bg-white border border-gray-700 rounded-md  ml-6">
          value{Sort}
          <option value="default">Default sort </option>
          <option value="name">Sort By Name </option>
          <option value="price">Sort By Price </option>
        </select>
      </div>

      {Data.length > 0 && <ProductList Products={Data} />}
      {Data.length == 0 && <NoMatching />}



    </div>
  );
  }
export default ProductListPage;