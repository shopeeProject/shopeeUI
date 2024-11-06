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

axios.interceptors.request.use(config => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    const token = user.accessToken;
    config.headers.Authorization = token;
    // config.host = "localhost:5000"
  }
  console.log(config)
  return config;
});

const getRefreshToken = () => localStorage.getItem('user')['refreshToken'];


// Function to refresh the access token
const refreshAccessToken = async () => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error('No refresh token available');
  }

  const response = await axios.post('/token-refresh', { refreshToken });
  const { accessToken } = response.data;

  // Store the new access token
  let user = localStorage.getItem('user')
  user['accessToken'] = accessToken
  localStorage.setItem('user', user);
  return accessToken;
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // If the response is a 401 (Unauthorized) and the request hasn't been retried yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true; // Mark the request as retried

      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers['Authorization'] = `${newAccessToken}`;
        return axios(originalRequest); // Retry the original request
      } catch (refreshError) {
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);


class UserOperations {
  handleLogout = async () => {
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
  getDetails = async (entity) => {
    // return axios.get("/get-user-details",{proxy:
    //   proxy
    // }).then(response =>{
    //   console.log(response.data)
    //   return response.data;
    // })
    // axios.defaults.baseURL = "http://localhost:5000"
    return axios.get("/" + entity + "/get-" + entity + "-details",
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