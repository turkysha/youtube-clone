const UPDATE_SEARCH_LIST = 'UPDATE_SEARCH_LIST'
const HEADER_BUTTON_SIDEBAR_TOGGLE = 'HEADER_BUTTON_SIDEBAR_TOGGLE'
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT'
const SET_TIMER_INTERVAL = 'SET_TIMER_INTERVAL'

export const updateSearchList = (searchData) => {
    return{
        type: UPDATE_SEARCH_LIST,
        payload: searchData
    }
}

export const toggleHeaderButtonAction = (toggle) => {
    return{
        type: HEADER_BUTTON_SIDEBAR_TOGGLE,
        payload: toggle
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