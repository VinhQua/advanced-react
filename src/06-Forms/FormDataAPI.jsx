import React, { useState } from "react";

const FormDataAPI = () => {
  const [user, setUser] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log([...formData.entries()]);
    const newUser = Object.fromEntries(formData);
    console.log(newUser);
    setUser(user + 1);
    e.currentTarget.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form" action="">
        <h2>Controlled Inputs</h2>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input type="text" name="name" id="name" className="form-input" />
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" name="email" id="email" className="form-input" />
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="form-input"
          />
          <button type="submit" className="btn btn-block">
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormDataAPI;
