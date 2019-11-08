import React, { useState } from "react";
import DropdownTeamNames from "./Dropdown";


const Form = props => {
    const [ team, setTeam ] = useState({
        "name" : "",
        "email": "",
         "role": "",
        DropdownTeamNames
    });
    const addMember = event => {
        setTeam({...team, [event.target.name] : event.target.value});
    }

    const submitMember = e => {
        e.preventDefault();
        props.addsMember(team);
        setTeam({
            "name" : "",
            "email" : "",
            "role": "",
            DropdownTeamNames

        });
        
    }
    return(
        <div>
            
            <form className="teamInput" onSubmit={submitMember}>
                <label className="boxes" htmlFor="name">Name: </label>
                <input type="text" id="name" name="name" onChange={addMember} />
                <br />
                <label htmlFor="email">Email: </label>
                <input type="text" id="email" name="email" onChange={addMember} />
                <br />
                <label htmlFor="role">Role: </label>
                <input type="text" id="role" name="role" onChange={addMember} />
                <br />
                <DropdownTeamNames />
                <br />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default Form;