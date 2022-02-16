import React, { useState, useEffect } from "react";
import "../App.css";
import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

const Passing = () => {

  return (
    <div className="App">
      <h1> Search The Country 🧐</h1>
      <form className="search-form" >
        <input
          type="text"
          placeholder="Enter country Name"
          autoComplete="off"

        />
        <input type="submit" value="search" />
      </form>

    </div>
  );
};

export default Passing;
