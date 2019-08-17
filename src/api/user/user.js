import request from '../../until/request'
export function getUserlist(data){
    return request({
        method:'get',
        params:data,
        url:'table/list1'
    })
}
export function addUser(data){
    return request({
        method:'get',
        params:data.datas,
        url:data.url
    })
}

export function login(data){
    return request({
        url:'/login',
        method:'post',
        data,
    })
}