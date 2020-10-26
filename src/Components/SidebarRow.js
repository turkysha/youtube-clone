import React from 'react'
import { useHistory } from 'react-router-dom'
import './SidebarRow.css'
import {useSelector} from 'react-redux'

function SidebarRow({route, title, selected, Icon}){
    const history = useHistory();
    const interv = useSelector(state => state.newTimerInterval)

    const handleRoute = ()=>{
        clearInterval(interv)
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