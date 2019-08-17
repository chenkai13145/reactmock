import {GET_CUSTERLIST} from '../../action/type'
const initStateVal={
    cust:{},
}
export default (state=initStateVal,action)=>{
    switch (action.type) {
        case GET_CUSTERLIST:
           return{
               ...state,
               cust:action.playload
           }
        default:
            return {
                ...state
            }
    }
}