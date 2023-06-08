import React from 'react'
import 'bootstrap/js/dist/dropdown'
import { Link ,NavLink} from "react-router-dom";

function Nav({Toggle}) {
  return (
    // <nav>

    // </nav>
    <nav className="navbar navbar-expand-sm navbar-dark bg-transparent">
        <i className="navbar-brand bi bi-justify-left fs-4"  onClick={Toggle}></i>
        <button classNameName="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                

                <li className="nav-item dropdown">
                <Link className="btn btn-outline-light" to="/dashboard/create_user">Create User</Link>
                <Link className="btn btn-outline-light ms-2" to="/">logOut</Link>


                </li>
            </ul>
            
        </div>
    </nav>
  )
}

export default Nav;