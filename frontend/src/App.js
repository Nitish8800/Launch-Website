import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { Routes } from "./Routes";
import { useEffect } from "react";
import { Set_token_status } from "./redux/Action";

function App() {
  const { user } = useSelector((state) => state);
  

  return (
    <div className="App">
    
      <Routes />
    
    </div>
  );
}

export default App;
