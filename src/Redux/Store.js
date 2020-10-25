import {createStore} from 'redux'
import searchReducer from './Search/SearchReducers'

const store = createStore(searchReducer);

export default store;