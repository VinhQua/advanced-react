import { useState } from "react";
import { data } from "../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const newUsers = [{ id: Date.now(), name }, ...users];
    setUsers(newUsers);
    setName("");
  };
  const removeUser = (id) => {
    const newUsers = users.filter((user) => user.id !== id);
    setUsers(newUsers);
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
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            name=""
            id="name"
            className="form-input"
          />

          <button type="submit" className="btn btn-block">
            submit
          </button>
        </div>
      </form>
      <div>
        {users.map((user) => {
          return (
            <div key={user.id} className="form">
              <h2>{user.name}</h2>
              <button className="btn" onClick={() => removeUser(user.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default UserChallenge;
