import { Grid3x3, Home, OtherHouses } from "@mui/icons-material";
import authenticationservice from "../../backendservices/authenticationservice";
import MultiActionAreaCard from "../card";
import backendservicewithoutauth from "../../backendservices/backendservicewithoutauth";
import InputFileUpload from "../fileUpload";
import React from "react";
import { Grid2 } from "@mui/material";
// let products = {

// }
// products = await backendservicewithoutauth.getProducts().then((response)=> 
//     {return response}
// );
let sampleProduct = [{
    pid:"",
    image:"",
    name:"",
    description:""
}]
console.log(typeof(products))
export default function HomePage(props){
    const [products,setProducts] = React.useState(sampleProduct)
    const handleLogout = () =>{
    let a = authenticationservice.signOut(props.store);
    return alert(a.message)
    }
    if(sampleProduct==products){
        backendservicewithoutauth.getProducts().then((response)=> {
            setProducts(response)
        })
    }
    const changeEmail = () =>{
        console.log("chang")
        console.log(props.store.getState())
        props.store.dispatch({"type":"set","key":"emailAddress","value":"a"})
        console.log(props.store.getState())
    }

    
    return <div>
        <button>abc</button>
        <Home></Home>
        <Grid2 container spacing={10}>
        {
            products.map((item)=>
                <Grid2 item  size = {4} key={item.pid}>
                <a href= {'/product/'+item.pid}><MultiActionAreaCard name = {item.name} description = {item.description} image = {item.image}></MultiActionAreaCard></a>
                </Grid2>

            )
        }</Grid2>
        {/* {console.log(props)} */}
        {/* <button onClick={changeEmail}>Add</button> */}
        <button onClick={handleLogout}>Logout</button>

        <InputFileUpload></InputFileUpload>
    </div>
}