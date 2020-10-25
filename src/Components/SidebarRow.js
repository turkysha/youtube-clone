import React from 'react'
import { useHistory } from 'react-router-dom'
import './SidebarRow.css'

function SidebarRow({route, title, selected, Icon}){
    const history = useHistory();
    return(
        <div className={`sidebarRow ${selected && "selected"}`} onClick={() => history.push(route)} >
            <Icon className="sidebarRow__icon"/>
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow;