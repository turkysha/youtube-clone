const UPDATE_SEARCH_LIST = 'UPDATE_SEARCH_LIST'
const HEADER_BUTTON_SIDEBAR_TOGGLE = 'HEADER_BUTTON_SIDEBAR_TOGGLE'
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT'

const initialState = {
    searchResults: [],
    headerButton: true,
    newSearchInputValue: ''
}

const searchReducer = (state = initialState, action) => {
    switch(action.type){
        case UPDATE_SEARCH_LIST: return{
            ...state,
            searchResults: action.payload
        }
        case HEADER_BUTTON_SIDEBAR_TOGGLE: return{
            ...state,
            headerButton: action.payload
        }
        case UPDATE_SEARCH_INPUT: return{
            ...state,
            newSearchInputValue: action.payload
        } 
        default: return state
    }
}

export default searchReducer;