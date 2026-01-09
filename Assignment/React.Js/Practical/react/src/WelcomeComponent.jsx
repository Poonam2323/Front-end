import React from "react";

const WelcomeComponent = () => {
  const topic = "JSX";
  const description = 
  "JSX allows you to write HTML-like syntax inside JavaScript and makes writing React components easier.";

  return (
    <div>
      <h1>Welcome to JSX</h1>
      <p>
        {topic} is used in React. {description}
        </p>
    </div>
  );
};

export default WelcomeComponent;
