import React, { useEffect, useRef, useState } from "react";

const UseRefBasics = () => {
  const [value, setValue] = useState(0);
  const refContainer = useRef(null);
  const isMounted = useRef(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = refContainer.current.value;
    console.log(name);
  };

  useEffect(() => {
    refContainer.current.focus();
  });
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }
    console.log("re-render");
  }, [value]);
  return (
    <>
      <form onSubmit={handleSubmit} className="form" action="">
        <h2>UseRef Inputs</h2>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            ref={refContainer}
          />

          <button type="submit" className="btn btn-block">
            submit
          </button>
        </div>
      </form>
      <div>
        <h1>value: {value}</h1>
        <button onClick={() => setValue(value + 1)} className="btn">
          increase
        </button>
      </div>
    </>
  );
};

export default UseRefBasics;
