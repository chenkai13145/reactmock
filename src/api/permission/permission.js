import request from '../../until/request'
export function getRole(data){
    return request({
        method:'get',
        params:data,
        url:'role/list'
    })
}
export function RoleCreate(data){
     return request({
         method:"get",
         url:'role/create',
         params:data
     })
}
export function RoleEdit(data){
    return request({
        method:'get',
        params:data,
        url:'permission/edit'
    })
}
export function RoleAuthorlist(data){
     return request({
         method:"get",
         params:data,
         url:'role/user_list'
     })
}
export function RoleAuthor(data){
    return request({
        method:'get',
        url:'role/user_role_edit',
        params:data
    })
}