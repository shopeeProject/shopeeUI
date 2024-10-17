import axios from "axios";
import backendservice from "./backendservice";
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
  signin = (emailAddress, password,person) => {
      return axios.post("/user-login"
    ,{emailAddress : emailAddress, password:password,port:5000,host:'localhost'})
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
            localStorage.setItem("emailAddress",emailAddress)
          }
          console.log(response.data)
          return response.data;
        })
        .catch(err => {
          console.log(err);
          return err;
        });
  }

  signOut(userStore) {
    let user = localStorage.getItem("user")
    let email = localStorage.getItem("emailAddress")
    try{
      localStorage.removeItem("user");
      userStore.dispatch(removeUser(email))
      return {"message":email + " logged out successfully"}

    }
    catch{
      return {"message":"User is not signed in"}
    }
    
    
    // return backendservice.handleLogout();
  }

  register = async(name, emailAddress, password) => {
    return axios.post("/api/auth/signup",{port: 5000}, {
      name,
      emailAddress,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthenticationService();