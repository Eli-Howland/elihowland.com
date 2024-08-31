import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WeddingPage from "./pages/Wedding";

// TODO:
// 1. Homepage
// 2. Todoist integration
// 3. Eventually deploy ML model

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/wedding" element={<WeddingPage></WeddingPage>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
