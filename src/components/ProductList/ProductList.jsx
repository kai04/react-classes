import React from "react";
import {useState, useEffect} from "react";
import ProductCard from "../ProductCard/ProductCard";

function ProductList() {
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [products, setProductState] = useState([]);
  useEffect(()=> {
    console.log("Monitor API called started");
    const promise = fetch("http://localhost:3001/products");
    promise.then(response =>{
      console.log("Mock Response:", response);
      return response.json();
    }).then(result => {
      console.log("Mock json result:", result);
      setLoading(false);
      setProductState(result);
    }).catch(error =>{
      setError(true);
      console.log("Mock Error:", error);
      // 
    });
  }
  ,[]);
  if(isError){
    return (<div> Something went wrong ERROR</div>);
  } else if(isLoading){
    return (<div> Loading ...</div>);
  } else{
    return (
      <div>
        {products.map(function (product) {
          return <ProductCard title={product.title} price={product.price} />;
        })}
      </div>
    );
  }
  
}

export default ProductList;
