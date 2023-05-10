import { useState } from "react";

function UseStateGotCha() {
  const [value, setValue] = useState(0);
  const handClick = () => {
    setTimeout(() => {
      setValue((prev) => {
        return prev + 1;
      });
    }, 3000);
  };

  return (
    <>
      <h1>{value}</h1>

      <button type="button" className="btn" onClick={handClick}>
        Increase
      </button>
    </>
  );
}

export default UseStateGotCha;
