import { useReducer, useState } from "react";
import { data } from "../data";
import { REMOVE_ITEM, RESET_LIST, CLEAR_LIST } from "./actions";
import reducer from "./reducer";

const defaultState = {
  users: data,
  isLoading: false,
};

function ReducerBasics() {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!name) return;
    // const newUsers = [{ id: Date.now(), name }, ...users];
    // setUsers(newUsers);
    // setName("");
  };
  const removeUser = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };
  const handleClearAll = () => {
    dispatch({ type: CLEAR_LIST });
  };
  const handleReset = () => {
    dispatch({ type: RESET_LIST });
  };
  console.log(state);
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
      <div className="form">
        <>
          {state.users.map((user) => {
            return (
              <div key={user.id}>
                <h2>{user.name}</h2>
                <button className="btn" onClick={() => removeUser(user.id)}>
                  Remove
                </button>
              </div>
            );
          })}
        </>
        {state.users.length !== 0 ? (
          <button className="btn" onClick={handleClearAll}>
            Clear All
          </button>
        ) : (
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        )}
      </div>
    </>
  );
}

export default ReducerBasics;
