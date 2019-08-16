import {GET_CASE} from '@/redux/action/type'
let initCaeVal={
    case:{}
}
export default (state=initCaeVal,action)=>{
    switch(action.type){
        case GET_CASE:
            return{
                ...state,
                case:action.playload
            }
        default:
            return{
                ...state
            }
    }
}