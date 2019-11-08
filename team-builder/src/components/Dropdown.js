import React from 'react'
import Dropdown from 'react-dropdown'

const teamNames = [
  { key: 'Runtime Terror', text: 'Runtime Terror', value: 'Runtime Terror' },
  { key: 'Callback Cats', text: 'Callback Cats', value: 'Callback Cats' },
  { key: 'Hypertext Assassins', text: 'Hypertext Assassins', value: 'Hypertext Assassins' },
  { key: 'Celestial Interface', text: 'Celestial Interface', value: 'Celestial Interface' },
  { key: 'Query Language Spies', text: 'Query Language Spies', value: 'Query Language Spies' },
  { key: 'Object Grind', text: 'Object Grind', value: 'Object Grind' },
  { key: 'Mind Map Orbs', text: 'Mind Map Orbs', value: 'Mind Map Orbs' },
]

const DropdownTeamNames = () => (
  <Dropdown 
    styles={{ singleValue: (base) => ({ ...base, padding: 5, borderRadius: 5,  color: 'white', display: 'flex' }) }}
    button 
    className='icon'
    floating
    labeled
    icon='world'
    options={teamNames}
    search
    text='Select Team'
    
  />
)

export default DropdownTeamNames