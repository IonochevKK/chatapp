import React, { useContext } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { AuthContext } from "../context/AuthContext";
const Navbar : React.FC= () => {
  const { currentUser } = useContext(AuthContext);
  if (!currentUser) return;
  return (
    <div className="navbar">
      <span className="logo">Ionochev Chat</span>
      <div className="user">
        <img src={currentUser.photoURL || ""} alt="" />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  );
};

export default Navbar;
