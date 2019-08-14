import { compose, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducer'
const initStore = {}
const appmiddle = [thunk]

const store = createStore(reducer, initStore, compose(applyMiddleware(...appmiddle), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store