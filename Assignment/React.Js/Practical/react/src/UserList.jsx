import React from "react";

function UserList() {
  const users = [
    { id: 1, name: "Poonam" },
    { id: 2, name: "Tisha" },
    { id: 3, name: "Charmi" },
  ];

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
