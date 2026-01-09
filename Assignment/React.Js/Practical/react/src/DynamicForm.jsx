import React, { useState } from "react";

function DynamicForm() {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Type here..."
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default DynamicForm;
