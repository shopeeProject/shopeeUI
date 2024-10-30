import axios from "axios";
import backendservice from "./userBackendservice";
import { removeUser } from "../stores/userStore";

const proxy = {
  proxy: {
      protocol: 'http',
      host: 'localhost',
      port: 5000,
      auth: {
          username: 'karthik',
          password: 'p@$$w0Rd'
      }
  }
}

/**
 * @Copyright by https://loizenai.com
 *        youtube loizenai
 */
// axios.defaults.baseURL = 'http://localhost:5000';
class AuthenticationService {
  signin = (emailAddress, password,entity) => {
      return axios.post("/"+entity+"-login"
    ,{emailAddress : emailAddress, password:password,port:5000,host:'localhost'})
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("emailAddress",emailAddress)
          }
          console.log(response.data)
          return {
            data:response.data,
            success:true
          };
        })
        .catch(err => {
          console.log(err);
          return {
            data:err.response.data.message,
            success:false
          };
        });
  }

  signOut(userStore) {
    let user = localStorage.getItem("user")
    let email = localStorage.getItem("emailAddress")
    try{
      localStorage.removeItem("user");
      localStorage.removeItem("http://shopee123.com:state")
      userStore.dispatch(removeUser(email))
      return {"message":email + " logged out successfully"}

    }
    catch{
      return {"message":"User is not signed in"}
    }
    
    
    // return backendservice.handleLogout();
  }

  register = async(name, emailAddress, password,entity) => {
    return axios.post("/create-"+entity, {
      name,
      emailAddress:emailAddress,
      password,
      port:5000
    }).then((response)=>{
      console.log(response.data);

      return response.data;
    }).catch((err)=>{
      console.log(err,err.response.data);
      return err.response.data
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthenticationService();