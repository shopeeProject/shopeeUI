import axios from "axios";

/**
 * @Copyright by https://loizenai.com
 *        youtube loizenai
 */
// axios.defaults.baseURL = 'http://localhost:5000';
class AuthenticationService {
  signin = (emailAddress, password,person) => {
      return axios.post("/user-login",{
        proxy: {
            protocol: 'http',
            host: 'localhost',
            port: 5000,
            auth: {
                username: 'yasoob',
                password: 'p@$$w0Rd'
            }
        }
    },{emailAddress, password})
        .then(response => {
          if (response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data));
          }
          console.log(response.data)
          return response.data;
        })
        .catch(err => {
          console.log(err);
          throw err;
        });
  }

  signOut() {
    localStorage.removeItem("user");
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