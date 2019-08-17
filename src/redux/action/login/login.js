import {POST_LOGIN} from '../type'
import {login} from '@/api/user/user'
import {message} from 'antd'
import { Date } from 'core-js';


export const postLogin=(data)=>(dispatch)=>{
    login().then(res=>{
        if(res.data.message==='成功'){
        
            dispatch({
                type:POST_LOGIN,
                playload:res.data.auth,
                date:new Date().getTime()+60*60*1000
            })
            message.success('登录成功')
            localStorage.setItem('token',"Bearer YjdhdjsstelwlHhdfkflasdKDLUGhGFGFjdsakdhVCVBNdhjdgsdjashjdsa")
            data.push('/home')
        }
    })
    .catch(err=>{
        message.error('网络出现问题，请检查网络')
    })
}
