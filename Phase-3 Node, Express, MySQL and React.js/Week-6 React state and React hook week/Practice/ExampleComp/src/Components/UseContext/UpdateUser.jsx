import React, { useContext } from "react";
import UserContext from "./UserContext";

// Consume the Context in the UpdateUser Component
function UpdateUser() {
  const { user, setUser } = useContext(UserContext);

  const handleChangeName = () => {
    setUser({ ...user, name: "Bob" });
  };

  return (
    <div>
      <button onClick={handleChangeName}>Change Name to Bob</button>
    </div>
  );
}

export default UpdateUser;
