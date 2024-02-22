import { useState } from "react";

import LogOrSign from "./components/logOrSign/LogOrSign";

import "./App.css";

function App() {
  const [user, setUser] = useState({});
  return (
    <>
      <div className="wrapper">
        {!user.username ? (
          <LogOrSign setUser={setUser} />
        ) : (
          <h2>You are logged in, {user.username}</h2>
        )}
      </div>
    </>
  );
}

export default App;
