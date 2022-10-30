import React from "react";
import { useNavigate } from "react-router-dom";

//* style
import "./ErrorPage.css";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className="error-page">
      <h1>ERROR 404</h1>
      <h2>PAGE NOT FOUND</h2>

      <p> Sorry this page does not exist</p>
      <p> Please reconfirm the URL</p>
      

      <button onClick={() => navigate("/")}>clich here to go home</button>
    </div>
  );
};

export default ErrorPage;