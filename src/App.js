import { Route, Routes } from "react-router";
import MainChat from './components/MainChat'
import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";

function App() {
  const showUserDetails = () => {

  }

  return (

    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <Sidebar />
          <MainChat />
        </div>
      </div>
    </div>
  );
}

export default App;
