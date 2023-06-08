import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

/////////////Users Lists/////
const Users=()=>{
    const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);


     const loadUsers = async () => {
        const result = await axios.get("https://645b413ca8f9e4d6e7637b71.mockapi.io/teacher");
        setUser(result.data.reverse());
      };
    
      const deleteUser = async id => {
        await axios.delete(`https://645b413ca8f9e4d6e7637b71.mockapi.io/teacher/${id}`);
        loadUsers();
      };
    
      return (
        <div className="container">
          <div className="py-4">
            <h3 className="para">Records</h3>
            <table className="backg table ">
              <thead class="thead-dark">
                <tr>
                  <th scope="col" className="head1 ">#</th>
                  <th scope="col" >Name</th>
                  <th scope="col" className="heademail">Email</th>
                  <th scope="col">Issued</th>
                  <th scope="col">Return</th>
                  <th scope="col">Contact</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((users, index) => (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{users.name}</td>
                    <td>{users.email}</td>
                    <td>{users.issudate}</td>
                    <td>{users.dateofreturn}</td>
                    <td>{users.phone}</td>

                   
                    <td>
                      <Link class="bi bi-person-fill me-2 " to={`/dashboard/profile/${users.id}`}>
                        
                      </Link>
                      <Link
                        // class="btn btn-outline-primary "
                        className="bi bi-pencil-fill me-2 "
                        to={`/dashboard/edit_user/${users.id}`}
                      >
                       
                      </Link>
                      <Link
                        className="bi bi-trash3-fill me-2"
                        onClick={() => deleteUser(users.id)}
                      >
                        
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
};

export default Users;