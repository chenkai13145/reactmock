import {combineReducers} from 'redux'
import custerReducer from './custer/custereducer'
import caseReducer from './case/caseducer'

const reducer=combineReducers({
    custer:custerReducer,
    caseter:caseReducer
})
export default reducer;