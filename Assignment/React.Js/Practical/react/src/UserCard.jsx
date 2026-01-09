import React from "react";

function UserCard({ name, age, location }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "16px",
      maxWidth: "250px",
      boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)"
    }}>
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Location: {location}</p>
    </div>
  );
}

export default UserCard;
