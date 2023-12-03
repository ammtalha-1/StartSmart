import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Home from "./components/Home";
import "./App.css";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Services from "./components/Services";
import Footer from "./components/Footer";
import MainMenu from "./components/MainMenu";
import React, { createContext, useEffect, useState } from "react";
import Admin from "./components/Admin";
import SearchUniversity from "./components/SearchUniversity";
import UniDescription from "./components/UniDescription";

const global = createContext();

function App() {
  const [user, setUser] = useState(false);

  function userLogin() {
    setUser(!user);
    console.log(user);
  }

  useEffect(() => {
    userLogin();
  }, []);

  return (
    <>
      <global.Provider value={{ user, setUser, userLogin }}>
        <Navbar />
        <Routes>
          <Route path="/Admin" element={<Admin />} />
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/About" element={<About />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/mainMenu" element={<MainMenu />} />
          <Route path="/SearchUniversity" element={<SearchUniversity />} />
          <Route path="/UniversityDescription" element={<UniDescription />} />
        </Routes>
        <Footer />
      </global.Provider>
    </>
  );
}

export default App;
export { global };
