import React from "react";
import GoogleAuth from "./GoogleAuth";

const SearchBar = () => {
  return (
    <div>
      <GoogleAuth />
      <div>
        <input className="search" placeholder=" 🔍 Search Twittter" />
      </div>
      <div className="box">
        <h5>What's going on</h5>
      </div>
    </div>
  );
};
export default SearchBar;
