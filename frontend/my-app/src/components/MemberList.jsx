import React, { useEffect, useState } from "react";
import axios from "axios";
import MemberForm from "./MemberForm";

const API_BASE = "http://localhost:8000/api";

function MemberList() {
  const [members, setMembers] = useState([]);
  const [editing, setEditing] = useState(null); // member to edit

  const fetchMembers = () => {
    axios
      .get(`${API_BASE}/members/`)
      .then((res) => setMembers(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleDelete = (id) => {
    if (!window.confirm("Delete this member?")) return;
    axios
      .delete(`${API_BASE}/members/${id}/delete`)
      .then(() => fetchMembers())
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <MemberForm
        onsaved={fetchMembers}
        editing={editing}
        setEditing={setEditing}
      />
      <hr />
      <table border="1" cellPadding="6" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>First</th>
            <th>Last</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {members.map((m) => (
            <tr key={m.id}>
              <td>{m.firstname}</td>
              <td>{m.lastname}</td>
              <td>{m.country}</td>
              <td>
                <button onClick={() => setEditing(m)}>Edit</button>{" "}
                <button onClick={() => handleDelete(m.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MemberList;