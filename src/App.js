import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import NavBar from "./components/navbar";
import RecordList from "./components/recordList";
import Create from "./components/create";
import './App.css';
import Edit from "./components/edit";



const App = () => {
  return (
    <div>
      <React.Fragment>
        <NavBar />
        <div style={{ margin: 20 }}>
        <Routes>
          <Route exact path="/" element={<RecordList />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/create" element={<Create />} />
        </Routes>
      </div>
      </React.Fragment>
    </div>
  );
};

export default App;
