import { Home } from "@mui/icons-material";
import authenticationservice from "../../backendservices/authenticationservice";

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
        <Home></Home>
        <button onClick={changeEmail}>Add</button>
        <button onClick={handleLogout}>Logout</button>
    </div>
}