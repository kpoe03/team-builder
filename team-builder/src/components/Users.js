import React, { useState } from "react";
import 'react-dropdown/style.css'
import DropdownTeamNames from './Dropdown'

const Form = props => {
  const [user, setUser] = useState({ name: "", email: "", role: "", teamName: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewUser(user);
    setUser({ username: "", email: "", role: "", teamName: "" });
  };

  return (
    <div>
      <form onSubmit={event => submitForm(event)}>
        <label htmlFor="">
          Name:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label htmlFor="">
          Email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label htmlFor="">
          Role:
          <input
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