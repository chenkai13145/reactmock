import {MENU_ITEM} from '../type'

export const menu=(data)=>(dispatch)=>{
    dispatch({
        type:MENU_ITEM,
        playload:data
    })
}