import React, { useState } from "react";
import 'react-dropdown/style.css'
import DropdownTeamNames from './Dropdown'
import './Form.css'

const Form = props => {
  const [user, setUser] = useState({ name: "", email: "", role: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewUser(user);
    setUser({ username: "", email: "", role: "", teamName: "" });
  };


  return (
    <div className="teamInput">
      <form onSubmit={event => submitForm(event)}>
        <label htmlFor="">
          Name:
          <input className="boxes"
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label htmlFor="">
          Email:
          <input className="boxes"
            type="text"
            name="email"
            value={user.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label htmlFor="">
          Role:
          <input className="boxes"
            type="text"
            name="role"
            value={user.role}
            onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <DropdownTeamNames />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;