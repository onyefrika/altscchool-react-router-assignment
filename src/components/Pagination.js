import { Link } from "react-router-dom";

// *styles
import "./Pagination.css";
const Pagination = ({
  dataPerPage,
  totalData,
  paginate,
  prevPage,
  nextPage,
  isPending,
}) => {
  //   console.log(isPending);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {!isPending && (
          <Link onClick={() => prevPage()} to="#" className="prev">
            Prev
          </Link>
        )}

        {pageNumber.map((number) => (
          <li className="page-list" key={number}>
            <Link onClick={() => paginate(number)} to="#" className="page-link">
              {number}
            </Link>
          </li>
        ))}

        {!isPending && (
          <Link onClick={() => nextPage()} to="#" className="prev">
            Next
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Pagination;
