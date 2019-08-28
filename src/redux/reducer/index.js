import {combineReducers} from 'redux'
import custerReducer from './custer/custereducer'
import caseReducer from './case/caseducer'
import loginReducer from './login/login'
import menuReducer from './menu'

const reducer=combineReducers({
    custer:custerReducer,
    caseter:caseReducer,
    loginReducer,
    menuReducer,
})
export default reducer;