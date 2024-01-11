import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";
import "./Posts.css";

export default function Posts() {
  const itemsPerPage = 10;
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(posts.length / itemsPerPage);
  const offset = currentPage * itemsPerPage;

  const currentItems = posts.slice(offset, offset + itemsPerPage);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  }, []);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="parent">
          <ReactPaginate
            previousLabel={"Previous"}
            previousLinkClassName={'page-link'}
            nextLabel={"Next"}
            nextLinkClassName={'page-link'}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={5}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>

        <div className="parent">
          {currentItems.map((item) => {
            return (
              <div className="child">
                <h4>{item.id}</h4>
                <h5>{item.title}</h5>
                <p>{item.body}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
