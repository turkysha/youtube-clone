import React from 'react'
import './Comment.css'
import { Avatar } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';

function Comment() {
    return (
        <div className="comment">
            <div className="comment__Left">
                <Avatar className="comment__left__avatar" src="https://www.nme.com/wp-content/uploads/2019/04/peaky_shelby_2000-696x442.jpg" alt="profile-pic"/>
            </div>
            <div className="comment__right">
                <div className="comment__right__top">
                    <div>Thommy Shelby</div>
                    <label>2 months ago</label>
                </div>
                <div className="comment__right__middle">
                    <div>
                        1st comment ever yeah!!
                    </div>
                </div>
                <div className="comment__right__bottom">
                    <button className="comment__right__bottom__like">
                        <ThumbUpAltIcon className="comment__right__bottom__icon"/>
                        125
                    </button>
                    <button className="comment__right__bottom__dislike">
                        <ThumbDownIcon className="comment__right__bottom__icon"/>
                    </button>
                    <label>ANSWER</label>
                </div>
            </div>
        </div>
    )
}

export default Comment
