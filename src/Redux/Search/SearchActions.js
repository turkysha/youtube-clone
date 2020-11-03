const UPDATE_SEARCH_LIST = 'UPDATE_SEARCH_LIST'
const HEADER_BUTTON_SIDEBAR_TOGGLE = 'HEADER_BUTTON_SIDEBAR_TOGGLE'
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT'
const SET_TIMER_INTERVAL = 'SET_TIMER_INTERVAL'
const TOGGLE_LOGIN = 'TOGGLE_LOGIN'

export const updateSearchList = (searchData) => {
    return{
        type: UPDATE_SEARCH_LIST,
        payload: searchData
    }
}

export const toggleHeaderButtonAction = () => {
    return{
        type: HEADER_BUTTON_SIDEBAR_TOGGLE,
    }
}

export const updateSearchInput = (newInput) => {
    return{
        type: UPDATE_SEARCH_INPUT,
        payload: newInput
    }

}

export const setTimerInterval = (newInterval) =>{
    return{
        type: SET_TIMER_INTERVAL,
        payload: newInterval
    }
}

export const toggleLogin = (newLoginStatus) =>{
    return{
        type: TOGGLE_LOGIN,
        payload: newLoginStatus
    }
}