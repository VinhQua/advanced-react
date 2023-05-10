import { useState } from "react";

function ErrorExample() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <div>UseState Error Example</div>
      <h2>{count}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Increase
      </button>
    </>
  );
}

export default ErrorExample;
