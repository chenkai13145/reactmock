import {combineReducers} from 'redux'
import custerReducer from './custer/custereducer'

const reducer=combineReducers({
    custer:custerReducer
})
export default reducer;