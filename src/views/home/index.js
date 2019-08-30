import React from 'react'
import {Card,Button,Row,Col} from 'antd'
import Filter from '@/components/home/homeCustm/filter'
import LineEcharts from '@/components/home/echartst/line'
import BarEcharts from '@/components/home/echartst/bar'
import ProgressTe from '@/components/home/echartst/prcoose'
import {
    getqueryWaybillCount,
    getqueryCarTransport,
    getqueryCarUseTypeShippingCount,
    getqueryLandfactorCount,
    getgetWareHouseNum,
    getgetInWareHouseNum,
    getgetOutWareHouseNum,
    getgetLongTimeWareHouseCar,
    getqueryOutgoingRate,
    getqueryRetentionCount,
    getqueryTimelyDeliveryRate,
    getqueryCircuitNumber,
    getqueryLineRepeat,
    getqueryDelayToptenMax,
    getqueryDelayToptenMin,
    getqueryLineDistanceMin,
    getqueryLineDistance,
    getcountRiskBehaviour,
    gethighRiskMeddle,
    getriskTimeFrame,
    gethighRiskMost,
    getgetTruckNumByOrgCode,
    getgetTruckUsageRateByOrgCode,
    getgetTruckOwnRateByOrgCode,
    getgetWarehouseUsageRateDayByOrgCode,
    getgetListDayByOrgCode
} from "@/api/home/home"
export default class Home extends React.Component{
    constructor(){
        super()
        this.state={
            headoff:false
        }
    }
    identification={
        '运单数':'getqueryWaybillCount',
        '运量':'getqueryCarTransport',
        '公铁水运量分析':'getqueryCarUseTypeShippingCount',
        '自有外协运量对比':'getqueryLandfactorCount',
        '库存量':'getgetWareHouseNum',
        '入库量':'getgetInWareHouseNum',
        '出库量':'getgetOutWareHouseNum',
        '长库龄商品车':'getgetLongTimeWareHouseCar',
        '出库及时率':'getqueryOutgoingRate',
        '商品车滞留':'getqueryRetentionCount',
        '交付及时率':'getqueryTimelyDeliveryRate',
        '线路数':'getqueryCircuitNumber',
        '重复线路':'getqueryLineRepeat',
        '线路交付及时率':'getqueryDelayToptenMax---getqueryDelayToptenMin',
        '线路承运量':'getqueryLineDistance---getqueryLineDistanceMin',
        '安全事件类型对比':'getcountRiskBehaviour',
        '高风险次数与有效干预占比':'gethighRiskMeddle',
        '危险行为时段分布':'getriskTimeFrame',
        '高风险行为次数':'gethighRiskMost',
        '投资企业板车使用':'getgetTruckNumByOrgCode',
        '投资企业满板率':'getgetTruckUsageRateByOrgCode',
        '自有车辆利用率':'getgetTruckOwnRateByOrgCode',
        '库位利用率':'getgetWarehouseUsageRateDayByOrgCode',
        '数字化覆盖趋势指标':'getgetListDayByOrgCode'
        
    }
    parentsFnHome=(arr)=>{

    }
    render(){
        return(
            <div>
                {/* 删选 */}
                <div className="home_main_top">
                    <Button style={{position:'absolute',right: 0,zIndex:32}} onClick={()=>{this.setState({headoff:!this.state.headoff})}}>自定义</Button>
                    {this.state.headoff?<Filter parentsFnHome={this.parentsFnHome}/>:''}
                </div>
                <Card>
                   <LineEcharts/>
                </Card>
                <Card>
                   <LineEcharts/>
                </Card>
                <Card>
                   <LineEcharts/>
                </Card>

                <Card>
                   <BarEcharts/>
                </Card>
                
                <Card>
                   <BarEcharts/>
                </Card>
                
                <Card>
                   <BarEcharts/>
                </Card>
                <Card>
                     <Row gutter={6}>
                         
                         <Col span={12}>
                          <Card>
                             <ProgressTe/>
                             <ProgressTe/>
                             <ProgressTe/>
                             <ProgressTe/>
                             <ProgressTe/>
                         </Card>
                          </Col>
                         <Col span={12}>
                         <Card>
                             <ProgressTe/>
                             <ProgressTe/>
                             <ProgressTe/>
                             <ProgressTe/>
                             <ProgressTe/>
                         </Card>
                         </Col>
                     </Row>
                </Card>
            </div>
        )
    }
}