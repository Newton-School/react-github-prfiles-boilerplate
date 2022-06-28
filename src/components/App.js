import React from "react";
import { useState } from "react";
import "../styles/App.css";
import { getUser } from "../Api";
import UserCard from "./UserCard";
import ErrorCard from "./ErrorCard";

function App() {


  return (
    <>
      <form className="user-form" id="form">
        <input
          type="text"
          id="search"
          placeholder="Search a Github User"
        />
      </form>
    </>
  );
}

export default App;
