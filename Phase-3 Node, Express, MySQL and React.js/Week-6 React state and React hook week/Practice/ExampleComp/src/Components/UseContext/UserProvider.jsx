import React, { useState } from "react";
import UserContext from "./UserContext";

// Create the Provider Component
function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Alice", age: 25 });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
