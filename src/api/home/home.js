import request from '@/until/request'

//运单数
export function getqueryWaybillCount(data){
       return request({
           url:'transportAnalyse/queryWaybillCount',
           method:'get',
           params:data
       })
}
//运量
export function getqueryCarTransport(data){
    return request({
        url:'transportAnalyse/queryCarTransport',
        method:'get',
        params:data
    })
}

//公铁水运量分析
export function getqueryCarUseTypeShippingCount(data){
    return request({
        url:'transportAnalyse/queryCarUseTypeShippingCount',
        method:'get',
        params:data
    })
}
//自有外协运量对比
export function getqueryLandfactorCount(data){
    return request({
        url:'transportAnalyse/queryLandfactorCount',
        method:'get',
        params:data
    })
}
//库存量
export function getgetWareHouseNum(data){
    return request({
        url:'wareHouseStatistics/getWareHouseNum',
        method:'get',
        params:data
    })
}
//入库量
export function getgetInWareHouseNum(data){
    return request({
        url:'wareHouseStatistics/getInWareHouseNum',
        method:'get',
        params:data
    })
}

//出库量
export function getgetOutWareHouseNum(data){
    return request({
        url:'wareHouseStatistics/getOutWareHouseNum',
        method:'get',
        params:data
    })
}
//长库龄商品车
export function getgetLongTimeWareHouseCar(data){
    return request({
        url:'wareHouseStatistics/getLongTimeWareHouseCar',
        method:'get',
        params:data
    })
}
//出库及时率
export function getqueryOutgoingRate(data){
    return request({
        url:'operationIndex/queryOutgoingRate',
        method:'get',
        params:data
    })
}

//交付及时率
export function getqueryTimelyDeliveryRate(data){
    return request({
        url:'operationIndex/queryTimelyDeliveryRate',
        method:'get',
        params:data
    })
}

//线路数
export function getqueryCircuitNumber(data){
    return request({
        url:'line/queryCircuitNumber',
        method:'get',
        params:data
    })
}
//重复线路
export function getqueryLineRepeat(data){
    return request({
        url:'line/queryLineRepeat',
        method:'get',
        params:data
    })
}
//线路交付及时率
export function getqueryDelayToptenMax(data){
    return request({
        url:'line/queryDelayToptenMax',
        method:'get',
        params:data
    })
}
//线路交付及时率
export function getqueryDelayToptenMin(data){
    return request({
        url:'line/queryDelayToptenMin',
        method:'get',
        params:data
    })
}

//线路承运量
export function getqueryCarriageCapacityMax(data){
    return request({
        url:'line/queryCarriageCapacityMax',
        method:'get',
        params:data
    })
}

//线路承运量
export function getqueryCarriageCapacityMin(data){
    return request({
        url:'line/queryCarriageCapacityMin',
        method:'get',
        params:data
    })
}
//线路运输距离
export function getqueryLineDistance(data){
    return request({
        url:'line/queryLineDistance',
        method:'get',
        params:data
    })
}
//线路运输距离
export function getqueryLineDistanceMin(data){
    return request({
        url:'line/queryLineDistanceMin',
        method:'get',
        params:data
    })
}

//安全事件类型对比
export function getcountRiskBehaviour(data){
    return request({
        url:'carriageSureness/countRiskBehaviour',
        method:'get',
        params:data
    })
}
//高风险次数与有效干预占比
export function gethighRiskMeddle(data){
    return request({
        url:'carriageSureness/highRiskMeddle',
        method:'get',
        params:data
    })
}
//危险行为时段分布
export function getriskTimeFrame(data){
    return request({
        url:'carriageSureness/riskTimeFrame',
        method:'get',
        params:data
    })
}
//高风险行为次数
export function gethighRiskMost(data){
    return request({
        url:'carriageSureness/highRiskMost',
        method:'get',
        params:data
    })
}

//投资企业板车使用
export function getgetTruckNumByOrgCode(data){
    return request({
        url:'Truck/getTruckNumByOrgCode',
        method:'get',
        params:data
    })
}

//投资企业满板率
export function getgetTruckUsageRateByOrgCode(data){
    return request({
        url:'Truck/getTruckUsageRateByOrgCode',
        method:'get',
        params:data
    })
}

//自有车辆利用率
export function getgetTruckOwnRateByOrgCode(data){
    return request({
        url:'Truck/getTruckOwnRateByOrgCode',
        method:'get',
        params:data
    })
}
//库位利用率
export function getgetWarehouseUsageRateDayByOrgCode(data){
    return request({
        url:'Truck/getWarehouseUsageRateDayByOrgCode',
        method:'get',
        params:data
    })
}
//数字化覆盖趋势指标
export function getgetListDayByOrgCode(data){
    return request({
        url:'iot/getListDayByOrgCode',
        method:'get',
        params:data
    })
}
//商品车滞留
export function getqueryRetentionCount(data){
    return request({
        url:'operationIndex/queryRetentionCount',
        method:'get',
        params:data
    })
}




