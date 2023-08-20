import React, { useState } from 'react';
import '../style/Register.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [data, setData] = useState({
    fullname: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {fullname,contact}= data;
    if (!fullname || !contact) {
      toast.error('Please fill in all fields!', {
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
    if (!/^\d{10}$/.test(contact)) {
      toast.error('Mobile number must be a 10-digit number!', {
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
    try {
      const response = await axios.post('/', data);
      console.log('hello register')
      if (response.status === 409) {
        toast.error(response.data.message, {
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
      if(response.status === 201){
        console.log("Sent successfully:", response.data);
      
        toast.success(response.data.message, {
          position: 'top-right',
          autoClose: 3000, 
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
        });
      }
     

      // Clear the form fields after successful submission
      setData({
        fullname: '',
        contact: '',
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
        console.log("Oh no, Axios error:", error);
      }
      
    }
  };

  return (
    <div class="imp">
      <form className="register-form" action="" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullname">Enter Fullname</label>
          <input
            type="text"
            placeholder="Fullname"
            name="fullname"
            id="fullname"
            value={data.fullname}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Mobile No</label>
          <input
            type="number"
            placeholder="Mobile no..."
            name="contact"
            id="contact"
            value={data.contact}
            onChange={handleChange}
          />
        </div>
        <button>Submit</button>
      </form>
      <ToastContainer /> {/* Add ToastContainer at the root level to show notifications */}
    </div>
  );
};

export default Register;
