import { useState } from "react";

const ControlledInput = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email);
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
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name=""
            id="name"
            className="form-input"
          />
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name=""
            id="email"
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

export default ControlledInput;
