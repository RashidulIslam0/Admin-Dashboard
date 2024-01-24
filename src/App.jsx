import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Home route */}
          <Route path="/" element={<Home />} />

          {/* Login route */}
          <Route path="/login" element={<Login />} />

          {/* Users route */}
          <Route path="/users">
            {/* List route */}
            <Route path="list" element={<List />} />

            {/* Single user route */}
            <Route path=":userId" element={<Single />} />

            {/* New user route */}
            <Route path="new" element={<New />} />
          </Route>

          {/* products route */}
          <Route path="/products">
            {/* List route */}
            <Route path="list" element={<List />} />

            {/* Single product route */}
            <Route path=":productId" element={<Single />} />

            {/* New product route */}
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
