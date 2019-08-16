import {GET_CASE} from '@/redux/action/type'
import {getCase} from '@/api/case/caseapi'

export const getCaseList=(data)=>(dispatch)=>{
    getCase().then(res=>{
        if(res.data.code==='0'){
            dispatch({
                type:GET_CASE,
                playload:res.data.result
            })
        }
    })
    .catch(err=>console.log(err))
}