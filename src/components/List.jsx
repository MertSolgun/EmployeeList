import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const List = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const perItem = 5; // every page 5 users
  const lastIndex = currentPage * perItem; //   10, 15,20
  const firstIndex = lastIndex - perItem; //   5, 10,,15
  const sPage = data.slice(firstIndex, lastIndex);

  const nextPage = () => {
    const maxPage = Math.ceil(data.length / perItem);
    setCurrentPage(currentPage < maxPage ? currentPage + 1 : 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Employee List</h1>
        <p>
          (Employees {firstIndex + 1} to {lastIndex})
        </p>
        <div className="personels">
          {sPage.map((person, index) => (
            <div className="person" key={index}>
              <img src={person.image} alt="" />
              <div>
                <h3>{person.name}</h3>
                <span className="email">{person.email}</span>
                <p>{person.age} Years</p>
              </div>
            </div>
          ))}
        </div>

        <div className="buttonDiv">
          <button onClick={prevPage} className="Awesomeicon">
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <span className="page">{currentPage}</span>
          <button onClick={nextPage} className="currentPageIcon">
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default List;
