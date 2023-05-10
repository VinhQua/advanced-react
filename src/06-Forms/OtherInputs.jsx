import React, { useState } from "react";
const frameWorks = ["react", "angular", "vue", "svelte"];
const OtherInputs = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };
  const handleFramework = (e) => {
    setFramework(e.target.value);
  };

  return (
    <>
      <form className="form" action="">
        <h2>Controlled Inputs</h2>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping">Free Shipping</label>
          <input
            checked={shipping}
            type="checkbox"
            name="shipping"
            id="shipping"
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            framework
          </label>
          <select
            value={framework}
            onChange={handleFramework}
            name="framework"
            id="framework"
          >
            {frameWorks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
          <button type="submit" className="btn btn-block">
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default OtherInputs;
