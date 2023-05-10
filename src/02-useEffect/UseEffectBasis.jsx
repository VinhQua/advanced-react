import { useEffect, useState } from "react";

function UseEffectBasis() {
  const [value, setValue] = useState(0);
  const [secondValue, setSecondValue] = useState(0);

  useEffect(() => {
    setValue(value + 1);
  }, []);
  return (
    <>
      <h1>Value: {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        Click Me
      </button>
      <h1>Second Value: {secondValue}</h1>
      <button onClick={() => setSecondValue(secondValue + 1)} className="btn">
        Click Me Second
      </button>
    </>
  );
}

export default UseEffectBasis;
