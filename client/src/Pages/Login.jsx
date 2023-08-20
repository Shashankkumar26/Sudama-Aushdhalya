import React, { useState } from 'react';
import axios from 'axios';
import '../style/Login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
  });
  const [handler, setHandler]= useState(true); // Fix: Set initial state to 'User'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await axios.post('/login', data);
      console.log('hello Login');
  
      // Handle the response accordingly based on successful or failed login
      if (response.status === 200) {
        // Login Successful
        toast.success('Login Successful!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      } 
      setData({
        username: '',
        password: '',
      });
    } catch (error) {
      if (error.response && error.response.status) {
        toast.error(error.response.data.message, {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
        return;
      }
      else{
        console.log("Login.jsx", error);
      }
      
    }
  };

  

  return (
    <>
      <div className="form-register">
        <form action="" className="forum" onSubmit={handleSubmit}>
          <div className="userd">
            <label htmlFor="Username">Enter Username</label>
            <input
              type="text"
              placeholder="Username"
              id="Username"
              name="username"
              value={data.username}
              onChange={handleChange}
            />
          </div>
          <div className="pass">
            <label htmlFor="Password">Enter Password</label>
            <input
              type="password"
              placeholder="Password"
              id="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="button-unique">
            Submit
          </button>
        </form>
        <div className='user-selector'>
          <p>Login as <span onClick={()=>setHandler(!handler)}>{handler? 'User': "Admin"}</span></p>
        </div>
        If you don't have an account{' '}
        <a href="/Register" className="register">
          <span>Register here</span>
        </a>
      </div>

      {/* Add ToastContainer at the root level to show notifications */}
      <ToastContainer />
    </>
  );
};

export default Login;
