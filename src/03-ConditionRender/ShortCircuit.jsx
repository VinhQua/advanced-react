import { useState } from "react";

function ShortCircuit() {
  const [text, setText] = useState("");
  const [name, setName] = useState("susan");
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div>
      <h1>Short Circuit</h1>
      <h4>falsy Or: {text || "hello world"}</h4>
      <h4>falsy And: {text && "hello world"}</h4>
      <h4>truthy Or: {name || "hello world"}</h4>
      <h4>truthy And: {name && "hello world"}</h4>
    </div>
  );
}

export default ShortCircuit;
