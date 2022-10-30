import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

// * components
import Pagination from "./Pagination";

// * styles
import "./Users.css";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(12);

  // to redirect page
  const redirectPage = useNavigate();

  // fetch Data fro the API end point
  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      setIsPending(true);

      const url = "https://randomuser.me/api/?results=240";
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const jsonData = await response.json();

        setIsPending(false);
        setUsers(jsonData.results);
        setError(null);
      } catch (err) {
        setIsPending(false);
        setError("could not fetch data");
        // redirect to Error page if there is an error
        redirectPage("/errorPage");
      }
    };

    fetchData();

    // Aborting Fetch Request 
  }, [redirectPage]);

  // Get current Data
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = users.slice(indexOfFirstData, indexOfLastData);

  // change page
  const paginate = (number) => {
    setCurrentPage(number);
  };

  // To go to the previous page
  const prevPage = () => {
    if (currentPage <= 1) {
      return currentPage;
    }
    setCurrentPage((currentPage) => currentPage - 1);
  };

  // To move to the next page
  const nextPage = () => {
    const pagelength = users.length / dataPerPage;
    if (currentPage < pagelength) {
      setCurrentPage((currentPage) => currentPage + 1);
    }
  };
  console.log(error);

  return (
    <div className="users">
      <h2>STUDENT INFORMATION</h2>
      {isPending && <div className="loading">Loading Data...</div>}
      {error && <div className="error">{error}</div>}

      <section className="user-card">
        {currentData &&
          currentData.map((user, index) => (
            <div key={index} className="user-details">
              <img src={user.picture.medium} alt="pics" />
              <p>
                <strong>TITLE:</strong> {user.name.title}
              </p>
              <p>
                <strong>FIRST NAME:</strong>
                {user.name.first}
              </p>

              <p>
                <strong>LAST NAME:</strong>
                {user.name.last}
              </p>
              <p>
                <strong>GENDER:</strong>
                {user.gender}
              </p>
              <p>
                <strong>AGE:</strong>
                {user.dob.age}
              </p>
              <p>
                <strong>EMAIL:</strong>
                {user.email}
              </p>
              <p>
                <strong>PHONE NUMBER:</strong>
                {user.phone}
              </p>
              <p>
                <strong>LOCATION:</strong>
                {user.location.city}
              </p>
            </div>
          ))}
      </section>
      {currentPage}
      <Pagination
        dataPerPage={dataPerPage}
        totalData={users.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        isPending={isPending}
      />

      {/* nested Route */}
      <Routes>
        <Route path="class" element={<p>welcome to class</p>} />
      </Routes>
    </div>
  );
}
