import request from '../../until/request'

export function city(data){
     return request({
         url:'city/open_city',
         method:'get',
         params:data
     })
}

export function opencity(data){
    return request({
        url:'city/open',
        method:'get',
        params:data
    })
}

