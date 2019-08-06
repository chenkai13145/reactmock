import request from '../until/request'

export function basic(){
     return request({
         url:'table/list',
         method:'get'
     })
}

