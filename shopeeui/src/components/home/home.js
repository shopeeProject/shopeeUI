import { Home } from "@mui/icons-material";
import authenticationservice from "../../backendservices/authenticationservice";
import MultiActionAreaCard from "../card";
import backendservicewithoutauth from "../../backendservices/backendservicewithoutauth";
let products = await backendservicewithoutauth.getProducts().then((response)=> 
    {return response}
);
console.log(typeof(products))
export default function HomePage(props){
    const handleLogout = () =>{
    let a = authenticationservice.signOut(props.user);
    return alert(a.message)
}
    const changeEmail = () =>{
        console.log("chang")
        console.log(props.user.getState())
        props.user.dispatch({"type":"set","key":"emailAddress","value":"a"})
        console.log(props.user.getState())
    }
    return <div>
        <button>abc</button>
        <Home></Home>
        {
            products.map((item)=>
                <a href= {'/product/'+item.pid}><MultiActionAreaCard name = {item.name} description = {item.description} image = {item.image}></MultiActionAreaCard></a>

            )
        }
        {/* {console.log(props)} */}
        <button onClick={changeEmail}>Add</button>
        <button onClick={handleLogout}>Logout</button>
    </div>
}