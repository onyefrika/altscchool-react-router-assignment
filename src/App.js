import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
// *page component
import Home from "./components/Home";
import Users from "./components/Users";
import ErrorPage from "./pages/ErrorPage";

// *styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1 className="logo">AltSchool</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
              <Link to="/users/*">Users</Link>
             
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="*" element={<ErrorPage />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;