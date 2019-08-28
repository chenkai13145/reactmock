import {MENU_ITEM} from '@/redux/action/type'
let initMenuVal={
    menu:sessionStorage.getItem('valHeader')||'首页'
}
export default (state=initMenuVal,action)=>{
      switch (action.type) {
          case MENU_ITEM:
              return{
                 ...state,
                 menu:action.playload
              }
          default:
              return{
                  ...state
              }
      }
}