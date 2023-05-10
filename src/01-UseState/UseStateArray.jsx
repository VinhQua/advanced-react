import { useState } from "react";
import { data } from "../data";

function UseStateArray() {
  const [people, setPeople] = useState(data);
  const handleRemove = (id) => {
    const newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>
          <h4>{person.name}</h4>
          <button
            className="btn"
            data-name={person.name}
            onClick={() => handleRemove(person.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        style={{ marginTop: "2rem" }}
        className="btn"
        onClick={() => setPeople([])}
      >
        Clear ALL
      </button>
    </div>
  );
}

export default UseStateArray;
