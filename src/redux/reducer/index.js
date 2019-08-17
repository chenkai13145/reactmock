import {combineReducers} from 'redux'
import custerReducer from './custer/custereducer'
import caseReducer from './case/caseducer'
import loginReducer from './login/login'

const reducer=combineReducers({
    custer:custerReducer,
    caseter:caseReducer,
    loginReducer
})
export default reducer;