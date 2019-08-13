import request from "../../until/request"

export function getCuster(data){
     return request({
         url:'/lawyer/custerlist',
         method:'get',
         params:data,
     })
}

export function editCuster(data){
    return request({	
        url:'/lawyer/infoedit',
        method:'get',
        params:data,
    })
}

export function addCuster(data){
    return request({	
        url:'/lawyer/add',
        method:'get',
        params:data,
    })
}