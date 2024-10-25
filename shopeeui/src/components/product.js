import { useParams } from "react-router-dom";
import backendservicewithoutauth from "../backendservices/backendservicewithoutauth";
import { useEffect } from "react";
import React from "react";
import { addToCart, removeFromCart } from "../stores/userCartStore";
async function getproduct(pid){
   return  backendservicewithoutauth.getProduct(pid).then((response) =>{
            return response
        })
}


let  arr = window.location.href.split("/");
let pid = arr[arr.length-1]
 
// let products = await getproduct(pid).then((response)=>{
//     console.log(response)
//     return response;})
let product = {
    "pid": 1,
    "name": "Iphone16",
    "price": 89999,
    "availability": true,
    "rating": 0,
    "category": 2,
    "description": " ",
    "sid": "a",
    "image": " "
}
let product1 = JSON.parse(JSON.stringify(product));
product1['pid'] = 2;
// console.log(products)
 function Product (props){
    const [product,setProduct] = React.useState([])
    let  arr = window.location.href.split("/");
    let pid = arr[arr.length-1]
    getproduct(pid).then((response)=>{
        console.log(response)
        setProduct(response.data)
    })

    function handleaddToCart() {
    {
        props.store.dispatch(addToCart(product))}
        console.log(props.store.getState())
    }
    function handleaddToCart1() {
        {
            props.store.dispatch(addToCart(product1))
        }
            console.log(props.store.getState())
        }

        function handleDeleteFromCart(pid) {
            {
                props.store.dispatch(removeFromCart(pid))}
                console.log(props.store.getState())
            }


    
    
    // console.log(products)
    return <div>
        <button onClick={handleaddToCart}>Add to cart</button>
        <button onClick={handleaddToCart1}>Add to cart</button>
        <button onClick={()=>handleDeleteFromCart(product.pid)}>Remove cart 1</button>
        <button onClick={()=>handleDeleteFromCart(2)}>Remove cart 2</button>
     </div>
}

export default Product;