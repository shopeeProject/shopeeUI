import axios from 'axios';

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

class backendServiceWithoutAuth{

    getProducts = async() =>{
        return axios.get("/product/get-all-products",
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
    
         getProduct = async(pid) =>{
            return axios.get("/product/get-product?pid="+pid,
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


export default new backendServiceWithoutAuth();
    