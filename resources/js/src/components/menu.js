import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const options = [
    { name: 'My Heroes', path: '/myheroes' },
    { name: 'Create Hero', path: '/create-hero' },
    { name: 'Create Team', path: '/myheroes/createteam' },
]

const style = {
  margin: 10,
};

const Menu = () => {
    const history = useHistory()

    return (<div className="menu">
            {options.map(option => <Link style={style} key={option.name} to={option.path}>{option.name}</Link>)}
        </div>
    )
}

export default Menu
