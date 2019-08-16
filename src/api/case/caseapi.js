import request from '@/until/request'

export function getCase(data){
   return request({
       url:'/lawyer/caselist',
       method:'get',
       params:data
   })
}