import request from '../../until/request'
export function getBikeMap(data){
    return request({
        method:"get",
        url:'map/bike_list',
        params:data
    })
}