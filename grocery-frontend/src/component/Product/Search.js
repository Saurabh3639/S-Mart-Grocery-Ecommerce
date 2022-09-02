import React, { useState, Fragment } from "react";
import MetaData from "../layout/MetaData";
import "./Search.css";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <Fragment>
      <MetaData title="Search Product - S-Mart Grocery Ecommerce" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
      <span className="closeIcon">
        <img
          src="https://img.icons8.com/color/32/000000/delete-sign--v1.png"
          alt="close"
          onClick={goBack}
        />
      </span>
    </Fragment>
  );
};

export default Search;
