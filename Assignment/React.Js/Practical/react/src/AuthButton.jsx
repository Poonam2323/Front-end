import React, { useState } from 'react';

function AuthButton() {
  // State to track login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Toggle login state
  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      {isLoggedIn ? (
        <button onClick={handleAuthClick}>Logout</button>
      ) : (
        <button onClick={handleAuthClick}>Login</button>
      )}
    </div>
  );
}

export default AuthButton;
