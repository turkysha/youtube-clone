const UPDATE_SEARCH_LIST = 'UPDATE_SEARCH_LIST'
const HEADER_BUTTON_SIDEBAR_TOGGLE = 'HEADER_BUTTON_SIDEBAR_TOGGLE'
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT'
const SET_TIMER_INTERVAL = 'SET_TIMER_INTERVAL'
const TOGGLE_LOGIN = 'TOGGLE_LOGIN'

const initialState = {
    searchResults: [],
    headerButton: true,
    newSearchInputValue: '',
    newTimerInterval: 0,
    loginStatus: false
}

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_SEARCH_LIST: return{
            ...state,
            searchResults: action.payload
        }
        case HEADER_BUTTON_SIDEBAR_TOGGLE: return{
            ...state,
            headerButton: !state.headerButton
        }
        case UPDATE_SEARCH_INPUT: return{
            ...state,
            newSearchInputValue: action.payload
        }
        case SET_TIMER_INTERVAL: return{
            ...state,
            newTimerInterval: action.payload
        }
        case TOGGLE_LOGIN: return{
            ...state,
            loginStatus: action.payload
        }  
        default: return state
    }
}

export default searchReducer;