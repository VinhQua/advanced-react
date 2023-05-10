/* eslint-disable react/prop-types */
import React from "react";

const UserContainer = ({ user, logout }) => {
  return (
    <div className="user-container">
      {user ? (
        <>
          <p>Hello, there {user?.name?.toUpperCase()}</p>
          <button className="btn" onClick={logout}>
            LogOut
          </button>
        </>
      ) : (
        <p>Please login</p>
      )}
    </div>
  );
};

export default UserContainer;
