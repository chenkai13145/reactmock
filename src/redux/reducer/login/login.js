import {POST_LOGIN} from '@/redux/action/type'
let loginUser={
    auth:localStorage.getItem('token')?true:false,
    infoUser:{},
    date:''
}
export default (state=loginUser,action)=>{
      switch(action.type){
          case POST_LOGIN:
              return{
                  ...state,
                  auth:action.playload,
                  date:action.date
              }
          default:
              return{
                  ...state
              }
      }
}