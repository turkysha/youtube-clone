import { Avatar } from '@material-ui/core'
import React,{useState} from 'react'
import './CommentAdd.css' 

export default function CommentAdd() {

    const [inputValue, setInputValue] = useState('')
    const [toggleButton, setToggleButton] = useState(true)
    const [toggleButtonsHidden, setToggleButtonsHidden] = useState(true)

    const handelInput = (event) => {
        const {value} = event.target
        if(value.length > 0){
            setToggleButton(false)
        }
        else{
            setToggleButton(true)
        }
        setInputValue(value)
    }

    const handleButtonsHidden = ()=>{
        setToggleButtonsHidden(false)
    }

    const handleCancelButton = ()=>{
        setInputValue('')
        setToggleButtonsHidden(true)
    }

    const handleAddComment = () => {
        setInputValue('')
    }
    return (
        <div className="commentAdd">
            <div className="commmentAdd__left">
                <Avatar className="commentAdd__left__avatar" src="https://www.nme.com/wp-content/uploads/2019/04/peaky_shelby_2000-696x442.jpg" alt="profile-pic"/>
            </div>
            <div className="commentAdd__right">
                <div className="commentAdd__right__inputDiv">
                    <input type="text" placeholder="Add a public comment..." value={inputValue} onChange={handelInput} onFocus={handleButtonsHidden}/>
                    <span></span>
                </div>
                <div className="commentAdd__right__buttons" style={toggleButtonsHidden ? {display:"none"} : {display:"flex"}}>
                    <button className="commentAdd__right__cancel" onClick={handleCancelButton}>
                        CANCEL
                    </button>
                    <button className="commentAdd__right__add" disabled={toggleButton} 
                    style={toggleButton ? {backgroundColor:"lightgray"} : {backgroundColor:"rgb(0, 110, 255)"}}
                    onClick={handleAddComment}
                    >
                        ADD COMMENT
                    </button>
                </div>
            </div>
        </div>
    )
}
