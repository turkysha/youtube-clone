import React from 'react'
import './SearchList.css'
import {useSelector, useDispatch} from 'react-redux'
import {useHistory} from 'react-router-dom'
import { updateSearchList, updateSearchInput } from '../Redux/Search/SearchActions'

function SearchList() {
    let searchResults = useSelector(state => state.searchResults)
    let dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (event, value) => {
        let suggestions = [];
        dispatch(updateSearchList(suggestions));
        dispatch(updateSearchInput(value));
        history.push(`/search/${value}`);
    }

    return (
        <div className="searchList">
            <ul className="searchList__list" onMouseDown={(event) => {event.preventDefault()}}>
                {searchResults.map(item => <li onClick={(event) => handleClick(event, item)} >{item}</li>)}
            </ul>
        </div>
    )
}

export default SearchList
