
import './App.css';
import {BrowserRouter as Router, Route , Routes, Navigate} from "react-router-dom";
import BasicForm from './BasicForm';
import Dashboard from './Dashboard';
import Create_user from './Create_user';
import EditUsers from './EditUsers'
import Profile from'./Profile'
import NotFound from './NotFound';




function App() {



  return (
    <div className="App">
      <Router>
      <Routes>
       
        <Route path="/" element={< BasicForm/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/Create_user" element={<Create_user />}/>
        <Route path="/dashboard/edit_user/:id" element={<EditUsers />}/>
        <Route path="/dashboard/profile/:id" element={<Profile />}/>
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate replace to="/404" />} />
      </Routes>
      </Router>


    

    </div>
  );
}

export default App;
