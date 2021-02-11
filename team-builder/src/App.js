import React, { useState } from 'react';
import AddMember from "./components/Form";
import './App.css';
import DropdownTeamNames from './components/Dropdown';

function App() {

  const [ team, setTeam ] = useState([
    {
      "name" : "",
      "email" : "",
      "role" : "",
      DropdownTeamNames
    }
  ]);

  const addMember = (member) => {
    setTeam([...team, member]);
  }

  return (
    <div className="App">
      <AddMember addsMember={addMember} />
     {team.map((member, index )=> {
       return(
         <div key={index}>
           <h1>{member.name}</h1>
           <h2>{member.email}</h2>
           <h3>{member.role}</h3>
           <h4>{member.Dropdown}</h4>
         </div>
       )
     })}
      
    </div>
  );
}

export default App;