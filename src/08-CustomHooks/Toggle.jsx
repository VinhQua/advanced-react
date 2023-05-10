import React, { useState } from "react";
import useToggle from "./useToggle";

const Toggle = () => {
  const { show, toggle } = useToggle(true);
  return (
    <div>
      <h4>Toggle Custom hook</h4>
      <button className="btn" onClick={toggle}>
        Toggle
      </button>
      {show && (
        <div>
          <h4>Some Stuff</h4>
        </div>
      )}
    </div>
  );
};

export default Toggle;
