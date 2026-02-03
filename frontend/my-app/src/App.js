import React from "react"
import MemberList from "./components/MemberList";
import './App.css';

function App() {
  return (
    <div style={{ padding:20 }}>
       <h2>Members CRUD (React + Django)</h2>
       <MemberList />
    </div>
  );
}

export default App;
