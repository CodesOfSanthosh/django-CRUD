import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE = "http://localhost:8000/api";

function MemberForm({ onSaved, editing, setEditing}) {
    const [first, setFirst] = useState(" ");
    const [last, setLast] = useState(" ");
    const [country, setCountry] = useState(" ");

    useEffect(() => {
        if (editing) {
            setFirst(editing.firstname);
            setLast(editing.lastname);
            setCountry(editing.country);
        } else {
            setFirst(" "); setLast(" "); setCountry(" ");
        }
    }, [editing]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const payload = { firstname: first, lastname: last, country: country };

        if (editing) {
            axios.put(`${API_BASE}/members/${editing.id}`,/update/, payload)
                .then(() => {
                    onSaved();
                    setEditing(null);
                }).catch(err => console.error(err));
        } else {
            axios.post(`${API_BASE}/members/create/`, payload)
                .then(() => {
                    onSaved();
                    setFirst(" "); setLast(" "); setCountry(" ");
                }).catch(err => console.error(err));
        }
    };

    return (
        <div>
        <h3>{editing ? "Edit Member" : "Add Member"}</h3>
        <form onSubmit={handleSubmit}>
            <input placeholder="First" value={first} onChange={e => setFirst(e.target.value)} required/>{" "}
            <input placeholder="Last" value={last} onChange={e => setLast(e.target.value)} required/>{" "}
            <input placeholder="Country" value={country} onChange={e => setCountry(e.target.value)} required />{" "}
            <button type="submit">{editing ? "Update" : "Add"}</button> 
            {editing && <button type="button" onClick={() => setEditing(null)}>Cancel</button>}
        </form>
        </div>
     );
    }

export default MemberForm;