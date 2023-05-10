import React, { useState } from "react";

const MultipleInputs = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };
  const handleChange = (e) => {
    e.preventDefault;

    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form" action="">
        <h2>Controlled Inputs</h2>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            value={user.name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="form-input"
          />
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            value={user.email}
            type="email"
            name="email"
            id="email"
            className="form-input"
            onChange={handleChange}
          />
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            value={user.password}
            type="password"
            name="password"
            id="password"
            className="form-input"
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-block">
            submit
          </button>
        </div>
      </form>
    </>
  );
};
export default MultipleInputs;
