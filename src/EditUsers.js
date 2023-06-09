import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    let navigate = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
      name: "",
      email: "",
      issudate:"",
    dateofreturn:"", 
      phone: "",
     
    });
  
    const { name, email,issudate,dateofreturn, phone } = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    useEffect(() => {
      loadUser();
    }, []);
  
    const onSubmit = async e => {
      e.preventDefault();
      await axios.put(`https://645b413ca8f9e4d6e7637b71.mockapi.io/teacher/${id}`, user);
      navigate("/dashboard");
    };
  
    const loadUser = async () => {
      const result = await axios.get(`https://645b413ca8f9e4d6e7637b71.mockapi.io/teacher/${id}`);
      setUser(result.data);
    };
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
          <form onSubmit={e => onSubmit(e)}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg mb-3"
                  placeholder="Enter Your Name"
                  name="name"
                  value={name}
                  onChange={e => onInputChange(e)}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="email"
                  className="form-control form-control-lg mb-3"
                  placeholder="Enter Your E-mail Address"
                  name="email"
                  value={email}
                  onChange={e => onInputChange(e)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg mb-3"
                  placeholder="Enter Your Username"
                  name="issudate"
                  value={issudate}
                  onChange={e => onInputChange(e)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg mb-3"
                  placeholder="Enter Your Website Name"
                  name="dateofreturn"
                  value={dateofreturn}
                  onChange={e => onInputChange(e)}
                />
              </div>
              
              <div className="form-group">
                <input
                  type="text"
                  className="form-control form-control-lg mb-3"
                  placeholder="Enter Your Phone Number"
                  name="phone"
                  value={phone}
                  onChange={e => onInputChange(e)}
                />
              </div>
              <button className="btn btn-primary btn-block">Add User</button>
            </form>
        </div>
      </div>
    );
  };
  
  export default EditUser;