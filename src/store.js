import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'

const store = (initialState) => {
    return createStore(
        rootReducer, 
        initialState,
        applyMiddleware(thunk)
    )
}

export default store