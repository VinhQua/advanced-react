import { useState } from "react";

function UseStateObject() {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    hobby: "reads books",
  });

  const displayPerson = () => {
    setPerson({ ...person, name: "john" });
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>Enjoy: {person.hobby}</h3>
      <button onClick={displayPerson}>Show John</button>
    </>
  );
}

export default UseStateObject;
