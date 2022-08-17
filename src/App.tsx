import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {Sidebar} from "./apps/sidebar/Sidebar";
import {Settings} from "./apps/settings/Settings";

function App() {
  return (
    <Router>
      <Sidebar />
      <Settings />
      <Routes>
        <Route path={""} element={<></>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
