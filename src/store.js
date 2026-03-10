import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import allReducers from './reducers/index'

const middleware = [thunk]

const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
let cartItemsFromStorage = []
try {
    const stored = localStorage.getItem('cartItems')
    cartItemsFromStorage = stored ? JSON.parse(stored) : []
} catch(e) {}

let initialState = {
    cartReducer: { cartItems: cartItemsFromStorage },
    userLoginReducer: { userInfo: userInfoFromStorage }
}

const store = createStore(allReducers, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store