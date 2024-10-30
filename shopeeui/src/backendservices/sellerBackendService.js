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
    alert(err)
    return err.response.data;
  })
   }
}
export default new sellerOperations();