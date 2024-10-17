import axios, { Axios } from 'axios';
import axiom from 'axios'

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

axios.interceptors.request.use( config => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if(user && user.accessToken){
      const token = user.accessToken;
      config.headers.Authorization =  token;
      // config.host = "localhost:5000"
    }
    console.log(config)
    return config;
  });

 
class UserOperations{
  handleLogout = async() => {
  //   return axios.get("/user/logout",
  //     {
  //         proxy: {
  //             protocol: 'http',
  //             host: 'http://localhost',
  //             port: 5000,
  //             auth: {
  //                 username: 'yasoob',
  //                 password: 'p@$$w0Rd'
  //             }
  //         }
  //     }
  // ).then(res => {
  //       console.log(res.data)
  //   }).catch(err => console.error(err))
      

  }
  getUserDetails = async() =>{
    // return axios.get("/get-user-details",{proxy:
    //   proxy
    // }).then(response =>{
    //   console.log(response.data)
    //   return response.data;
    // })
    // axios.defaults.baseURL = "http://localhost:5000"
    return axios.get("/user/get-user-details",
      {
          proxy: {
              protocol: 'http',
              host: 'http://localhost',
              port: 5000,
              auth: {
                  username: 'yasoob',
                  password: 'p@$$w0Rd'
              }
          }
      }
  )
      .then(res => {
          return res.data;
      }).catch(err => console.error(err))
  }

}
export default new UserOperations();