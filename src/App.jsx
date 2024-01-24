import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import "./App.css";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           {/* Home route */}
//           <Route path="/" element={<Home />} />

//           {/* Login route */}
//           <Route path="/login" element={<Login />} >

//           {/* Users route */}
//           <Route path="/users">
//             {/* List route */}
//             <Route path="list" element={<List />} />

//             {/* Single user route */}
//             <Route path=":userId" element={<Single />} />

//             {/* New user route */}
//             <Route path="new" element={<New />} />
//           </Route>

//           {/* products route */}
//           <Route path="/products">
//             {/* List route */}
//             <Route path="list" element={<List />} />

//             {/* Single product route */}
//             <Route path=":productId" element={<Single />} />

//             {/* New product route */}
//             <Route path="new" element={<New />} />
//           </Route>
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;
