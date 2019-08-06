import request from '../../until/request'

export function getOrder(data){
    return request({
        method:'get',
        params:data,
        url:'order/list'
    })
}
export function getOrderinfo(data){
    return request({
        method:'get',
        params:data,
        url:'order/ebike_info'
    })
}

export function getfinshOrderinfo(data){
    return request({
        method:'get',
        params:data,
        url:'order/finish_order'
    })
}
export function getOrderdetail(data){
   return request({
       method:'get',
       params:data,
       url:'order/detail'
   })
}