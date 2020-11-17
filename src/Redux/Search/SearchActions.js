const UPDATE_SEARCH_LIST = 'UPDATE_SEARCH_LIST'
const HEADER_BUTTON_SIDEBAR_TOGGLE = 'HEADER_BUTTON_SIDEBAR_TOGGLE'
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT'
const TOGGLE_LOGIN_MODAL = 'TOGGLE_LOGIN_MODAL'

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

export const toggleLoginModal = (newModalState) =>{
    return{
        type: TOGGLE_LOGIN_MODAL,
        payload: newModalState
    }
}