import React, { useState } from 'react';
import Navbar from './Navbar';
import ProductListPage from './ProductListPage';
import Footer from './Footer';
import { Route, Routes, } from 'react-router-dom';
import ProductDetail from './ProductDetail';
import NotFound from './NotFund';



function App() {
  const savedDataSring = localStorage.getItem("my-cart")||"{}"
  const savedData=JSON.parse(savedDataSring);


  const[cart, setCart] = useState(savedData);


     function handleAddToCart(productId,count){
      const oldCart=cart[productId] || 0;

      const newCart= {...cart, [productId]: oldCart + count }
      setCart(newCart);

      const cartSring=JSON.stringify(newCart);
      localStorage.setItem("my-cart", cartSring)
        
     }
 
     const totalCount = Object.keys(cart).reduce(function(previous,current){
      return previous + cart[current];
     },0);
      

  return (

    <div className="bg-gray-200 h-screen overflow-y-scroll  flex  flex-col">
      <Navbar productCount={totalCount}  />
      <div className="grow">
  
        <Routes>
          <Route index element={<ProductListPage />}></Route>
          <Route path="/products/:id" element={<ProductDetail  onAddToCart= {handleAddToCart}/>}> </Route>
          <Route path="/products" element={<ProductListPage />}></Route>
          <Route path="*/" element={<NotFound />}>  </Route>


        </Routes>
      </div>
      <Footer logo="https://media.discordapp.net/attachments/999601406514298951/1021644432170303498/Beige_Ivory_Minimalist_Floral_and_Botanical_Woman_Logo_1.png" />
    </div>



  );
}
export default App;
// productCount={totalCount}
