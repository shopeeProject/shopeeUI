import React from "react";
import sellerBackendService from "../backendservices/sellerBackendService";
import MultiActionAreaCard from "./card";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { Grid2 } from "@mui/material";


function GetSellerProducts(props){
    let navigate = useNavigate();
    const [products,setProducts] = React.useState([])
    const [getval,setGetval] = React.useState(true)
    function navigateToHome(){
        navigate("/")
    }
    if(products.length ===0 &&getval===true){
        let sellerProducts = sellerBackendService.getSellerProducts();
        sellerProducts.then((response)=>{
        console.log(response)
        console.log(typeof(response.data));

        if(response.data == null || typeof(response.data) != 'object'){
            alert(response.message)
            navigateToHome()
        }
        else{
            console.log(response)
            setProducts(response.data);
            setGetval(false);
        }
         console.log(response)
        
    })
    }
    
    console.log(products,products,getval)
    return (
 
        <Grid2 container spacing={10}>
        {products.map((item)=>{
                {/* console.log(item); */}
                return <div>
                {/* <Grid2 item  size = {4} key={item.pid}> */}
                {/* <p>{item.name}</p> */}
                <a href= {'/product/'+item.pid}><MultiActionAreaCard name = {item.name} description = {item.description} image = {item.image} edit = {item.pid}></MultiActionAreaCard></a>      
                 {/* </Grid2> */}
                  </div> })}
               </Grid2>
               
        
            
    )
}
export default GetSellerProducts;