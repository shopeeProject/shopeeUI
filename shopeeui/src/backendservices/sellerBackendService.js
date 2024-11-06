import { FormControlLabel } from "@mui/material";
import axios from "axios";
  const axiosInstance = axios.create({
    proxy:{
        host: 'localhost', // or your proxy server address
        port: 5000,
      }
  });
axiosInstance.interceptors.request.use( config => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if(user && user.accessToken){
      const token = user.accessToken;
      config.headers.Authorization =  token;
    //   config.host = "localhost:5000"
    }
    console.log(config)
    config.proxy =  {
      host: 'localhost', // or your proxy server address
      port: 5000,
    }
    return config;
  });

 
  const getRefreshToken = () => JSON.parse(localStorage.getItem('user'))['refreshToken'];


// Function to refresh the access token
const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  console.log("In refresh Access token function2",refreshToken)

  if (!refreshToken) {
    throw new Error({data:'No refresh token available'});
  }
  console.log("In refresh Access token function")
  return await axios.post('/token-refresh', {refreshToken: refreshToken }).then((response)=>{
    console.log(response)
    const { accessToken } = response.data;
      console.log(response.data)
      // Store the new access token
      let user = JSON.parse(localStorage.getItem('user'))
      console.log(user)
      user['accessToken'] = accessToken
      console.log(user)
      localStorage.setItem('user',JSON.stringify(user));
      console.log(accessToken)
        return accessToken;
  })
 

};

axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const originalRequest = error.config;
      console.log(error)
      console.log(error.response.status === 401 , originalRequest._retry1===undefined,originalRequest._retry1)
      // If the response is a 401 (Unauthorized) and the request hasn't been retried yet
      if (error.response.status === 401 && originalRequest._retry1===undefined) {
        originalRequest._retry1 = true; // Mark the request as retried
        console.log("Entered refresh")
        try {
          const newAccessToken = await refreshAccessToken();
          console.log(newAccessToken)
          originalRequest.headers['Authorization'] = `${newAccessToken}`;
          return axiosInstance(originalRequest); // Retry the original request
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      }
  
      return Promise.reject(error);
    }
  );

class sellerOperations{
    addProduct = async(data) => {
     console.log(data)
     const formdata = new FormData();
     formdata.append("image",data.product_image.file)
     formdata.append("name",data.product_name)
     formdata.append("price",data.product_price)
     formdata.append("description",data.product_description)
     formdata.append("count",data.product_count)
     formdata.append("category",data.product_category)
     
     return axiosInstance.post("/seller/add-product",formdata,{proxy: {
            host: 'localhost', // or your proxy server address
            port: 5000,
        }}
    //     {
    //     port:5000,
    //     name:data.product_name,
    //     price:data.product_price,
    //     descrition:data.product_description,
    //     image:data.product_image.file,
    //     count:data.product_count
    //  }
    )
   }

   editProduct = async(data) => {
    console.log(data)
    const formdata = new FormData();
    formdata.append("image",data.product_image.file)
    formdata.append("name",data.product_name)
    formdata.append("price",data.product_price)
    formdata.append("description",data.product_description)
    formdata.append("count",data.product_count)
    formdata.append("category",data.product_category)
    formdata.append("pid",data.product_pid)
    formdata.append("availability",data.product_availability)
    return axiosInstance.post("/seller/edit-product",formdata,{proxy: {
           host: 'localhost', // or your proxy server address
           port: 5000,
       }}
   //     {
   //     port:5000,
   //     name:data.product_name,
   //     price:data.product_price,
   //     descrition:data.product_description,
   //     image:data.product_image.file,
   //     count:data.product_count
   //  }
   )
  }

   getSellerProducts = async() =>{

      return axiosInstance.get("/seller/get-products",
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
  ).then((response)=>{
    return response.data;
  }).catch((err)=>{
    
    return err;
  })
   }
}
export default new sellerOperations();