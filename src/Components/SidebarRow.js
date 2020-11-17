import React from 'react'
import { useHistory } from 'react-router-dom'
import './SidebarRow.css'

function SidebarRow({route, title, selected, Icon}){
    const history = useHistory();

    const handleRoute = ()=>{
        history.push(route)
    }
    return(
        <div className={`sidebarRow ${selected && "selected"}`} onClick={handleRoute} >
            <Icon className="sidebarRow__icon"/>
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow;