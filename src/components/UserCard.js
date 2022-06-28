import React from "react";
import "../styles/App.css";
import { getRepos } from "../Api";
import { useEffect, useState } from "react";
import ErrorCard from "./ErrorCard";

const UserCard = () => {

  return (
    <div class="card" id="user-card">
      <div className="user-info">
        <h2>{userID}</h2>
        <p>{userBio}</p>
        <ul>
          <li>
            <span id="follower-count"></span>{" "}
            <strong>Followers &nbsp;</strong>
          </li>
          <li>
            <span id="following-count"></span>{" "}
            <strong>Following &nbsp;</strong>
          </li>
          <li>
            <span id="repo-count"></span>{" "}
            <strong>Repos</strong>
          </li>
        </ul>
        <div id="repo-container">
        </div>
      </div>
    </div>
  );
};

export default UserCard;
