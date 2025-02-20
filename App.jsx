import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";

// Import all the components
import Dashboard from "./dashboard/dashboard";
import Page3 from "./page3/page3";
import OTPVerification from "./otp/otp";
import BankForm from "./bank/bank";
import SignUpForm from "./signup/signup";
import Signin from "./signin/signin";
import Step4 from "./step4/step4";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Home from "./home/home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Define all routes */}
          <Route path="/" element={<Signin />} /> 
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/designation" element={<Page3 />} />
          <Route path="/otp" element={<OTPVerification />} />
          <Route path="/bank" element={<BankForm />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/step1" element={<Step1/>} />
          <Route path="/step2" element={<Step2/>} /> 
          <Route path="/login" element={<Signin/>} />         
           <Route path="/home" element={<Home/>} /> 
 
          



          {/* Uncomment the routes/components you may need later */}
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          {/* <Route path="/profile" element={<FormComponent />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
