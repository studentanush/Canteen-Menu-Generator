import React from "react";
import {Routes,Route} from "react-router-dom";
import LandingPage from "./components/landingPage";
import UserLogin from "./components/UserLogin";
import AdminLogin from "./components/AdminLogin";
import { ToastContainer } from "react-toastify";
import UserSignup from "./components/UserSignup";
import UserPage from "./components/UserPage";
const App = ()=>{
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path="/" element = {<LandingPage/>}></Route>
        <Route path="/student-login" element={<UserLogin/>}></Route>
        <Route path="/admin-login" element={<AdminLogin/>}></Route>
        <Route path="/user-signup" element={<UserSignup/>}></Route>
        <Route path="/user-page" element={<UserPage/>}></Route>
      </Routes>
    </div>
  )
}
export default App
