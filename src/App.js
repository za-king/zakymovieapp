import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch ,useSelector } from "react-redux";
import { loaduser } from "./utils/loginSlice";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import DetailById from "./pages/DetailById";
import SearchPage from "./pages/SearchPage";
import { useEffect, useState } from "react";

function App() {
  
 

  


  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<SignIn />} />
          <Route element={<ProtectedRoute user={ JSON.parse( localStorage.getItem("user"))} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="detail/:id" element={<DetailById />} />
            <Route path="search/:query" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
