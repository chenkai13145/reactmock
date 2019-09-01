import React from 'react'
import { Card, Button, Row, Col } from 'antd'
import Filter from '@/components/home/homeCustm/filter'
import LineEcharts from '@/components/home/echartst/line'
import BarEcharts from '@/components/home/echartst/bar'
import ProgressTe from '@/components/home/echartst/prcoose'
import DivProgressTe from '@/components/home/echartst/divprcoose'
import BarLines from '@/components/home/echartst/barline'

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
    getqueryCarriageCapacityMax,
    getqueryCarriageCapacityMin,
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
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            headoff: false,
            newDatarr: [],
            newDatarrs:[],
            alloff: true
        }
    }
    identification = {
        '运单数': 'getqueryWaybillCount',
        '运量': 'getqueryCarTransport',
        '公铁水运量分析': 'getqueryCarUseTypeShippingCount',
        '自有外协运量对比': 'getqueryLandfactorCount',
        '库存量': 'getgetWareHouseNum',
        '入库量': 'getgetInWareHouseNum',
        '出库量': 'getgetOutWareHouseNum',
        '长库龄商品车': 'getgetLongTimeWareHouseCar',
        '出库及时率': 'getqueryOutgoingRate',
        '商品车滞留': 'getqueryRetentionCount',
        '交付及时率': 'getqueryTimelyDeliveryRate',
        '线路数': 'getqueryCircuitNumber',
        '重复线路': 'getqueryLineRepeat',
        '线路交付及时率': 'getqueryDelayToptenMax',
        '线路承运量': 'getqueryLineDistance',
        '安全事件类型对比': 'getcountRiskBehaviour',
        '高风险次数与有效干预占比': 'gethighRiskMeddle',
        '危险行为时段分布': 'getriskTimeFrame',
        '高风险行为次数': 'gethighRiskMost',
        '投资企业板车使用': 'getgetTruckNumByOrgCode',
        '投资企业满板率': 'getgetTruckUsageRateByOrgCode',
        '自有车辆利用率': 'getgetTruckOwnRateByOrgCode',
        '库位利用率': 'getgetWarehouseUsageRateDayByOrgCode',
        '数字化覆盖趋势指标': 'getgetListDayByOrgCode'

    }
    arrs = []
    arrss=[]
    alloffline = false
    alloffprco = false
    alllength = 0  //总共请求多少次
    linelenght = 0 //计数
    prcolenght = 0 //计数
    barlenght = 0 //计数
    prcoTwolenght = 0 //计数
    //由子组件触发方法
    parentsFnHome = (arr) => {

        if (arr.length === 0) {
            this.setState({
                newDatarr: []
            })
            return;
        }
        this.alllength = arr.length
        this.linelenght = 0
        this.prcolenght = 0
        this.barlenght = 0
        this.prcoTwolenght = 0
        this.arrs = []
        arr.forEach(item => {
            let idnex = item.name.indexOf('(')
            let names = idnex === -1 ? item.name : item.name.substring(0, idnex)
            let oldtwo = this.identification[names].indexOf('---')
            if (oldtwo !== -1) {
                let arr = this.identification[names].split('---')
                let oneFn = arr[0]
                let twoFn = arr[1]
                this[oneFn]()
                this[twoFn]()
            } else {
                this[this.identification[names]]()
            }
        })
    }
    //line封装方法
    lineFun(res, title) {
        let arr = []
        let obj = {}
        if (res.status === 200) {
            this.linelenght++;
            let data = res.data.data
            obj.type = 'line'
            obj.name = title
            obj.dataX = Array.from(new Set(data.map(item => item.date)))
            obj.lengend = Array.from(new Set(data.map(item => item.code_name)))
            obj.lengend.forEach(item => {
                let objs = {}
                objs.name = item
                objs.type = 'line'
                objs.data = obj.dataX.map(num => 0)
                data.forEach((items, index) => {
                    obj.dataX.forEach((itemX, index2) => {
                        if (items.date === itemX && item === items.code_name) {
                            objs.data[index2] = title === '库存量(辆)' || title === '入库量(辆)' || title === '出库量(辆)' ? items.warehouse_car_num : items.num
                        }
                    })
                })
                arr.push(objs)
            })
            obj.series = arr
            this.arrs.push(obj)
            if (this.barlenght + this.prcoTwolenght + this.prcolenght + this.linelenght === this.alllength) {
                this.setState({
                    newDatarr: this.arrs
                })
            }
            // this.setState({ newDatarr: this.arrs })
        }
    }
    //运单数
    getqueryWaybillCount() {
        getqueryWaybillCount().then(res => {
            this.lineFun(res, '运单数(单)')
        })
    }
    //运量
    getqueryCarTransport() {
        getqueryCarTransport().then(res => {
            this.lineFun(res, '运量(辆)')
        })
    }
    //公铁水运量分析
    getqueryCarUseTypeShippingCount() {
        getqueryCarUseTypeShippingCount().then(res => {
            if (res.status === 200) {
                this.barlenght++;
                let arr = []
                let obj = {}
                let data = res.data.data
                obj.type = 'bar'
                obj.name = '自有外协运量对比(单)'
                obj.lengend = ['陆运', '水运', '铁运']
                obj.dataX = data.map(item => item.code_name)
                obj.lengend.forEach(item => {
                    let objs = {}
                    objs.name = item
                    objs.type = 'bar'
                    objs.stack = '对比'
                    objs.barWidth = 20
                    objs.data = obj.dataX.map(it => 0)
                    data.forEach(itbar => {
                        obj.dataX.forEach((items, index2) => {
                            if (items === itbar.code_name) {
                                objs.data[index2] = item === '陆运' ? itbar.type_land_sum : item === '水运' ? itbar.type_sea_sum : itbar.type_railway_sum
                            }
                        })
                    })
                    arr.push(objs)
                })
                obj.series = arr
                this.arrs.push(obj)
                if (this.barlenght + this.prcoTwolenght + this.prcolenght + this.linelenght === this.alllength) {
                    this.setState({
                        newDatarr: this.arrs
                    })
                }
            }
        })
    }
    //自有外协运量对比
    getqueryLandfactorCount() {
        getqueryLandfactorCount().then(res => {
            if (res.status === 200) {
                this.barlenght++;
                let arr = []
                let obj = {}
                let data = res.data.data
                obj.type = 'bar'
                obj.name = '自有外协运量对比(单)'
                obj.lengend = ['外协', '自有']
                obj.dataX = data.map(item => item.code_name)
                obj.lengend.forEach(item => {
                    let objs = {}
                    objs.name = item
                    objs.type = 'bar'
                    objs.stack = '对比'
                    objs.barWidth = 20
                    objs.data = obj.dataX.map(it => 0)
                    data.forEach(itbar => {
                        obj.dataX.forEach((items, index2) => {
                            if (items === itbar.code_name) {
                                objs.data[index2] = item === '外协' ? itbar.type_land_sum : itbar.type_railway_sum
                            }
                        })
                    })
                    arr.push(objs)
                })
                obj.series = arr
                this.arrs.push(obj)
                if (this.barlenght + this.prcoTwolenght + this.prcolenght + this.linelenght === this.alllength) {
                    this.setState({
                        newDatarr: this.arrs
                    })
                }
            }
        })
    }
    //商品车滞留
    getqueryRetentionCount() {
        getqueryRetentionCount().then(res => {
            this.lineFun(res, '商品车滞留(辆)')
        })
    }
    //库存量
    getgetWareHouseNum() {
        getgetWareHouseNum().then(res => {
            this.lineFun(res, '库存量(辆)')
        })
    }
    //入库量
    getgetInWareHouseNum() {
        getgetInWareHouseNum().then(res => {
            this.lineFun(res, '入库量(辆)')
        })
    }
    //出库量
    getgetOutWareHouseNum() {
        getgetOutWareHouseNum().then(res => {
            this.lineFun(res, '出库量(辆)')
        })
    }
    //长库龄商品车
    getgetLongTimeWareHouseCar() {
        getgetLongTimeWareHouseCar().then(res => {
            console.log(res)
            if (res.status === 200) {
                this.barlenght++;
                let data = res.data.data
                let arr = []
                let obj = {}
                obj.name = '长库龄商品车'
                obj.type = 'bar'
                obj.lengend = Array.from(new Set(data.map(item => item.code_name)))
                obj.dataX = Array.from(new Set(data.map(item => item.date)))
                obj.lengend.forEach(item => {
                    let objs = {}
                    objs.name = item
                    objs.type = 'bar'
                    objs.data = obj.dataX.map(iy => 0)
                    data.forEach(items => {
                        obj.dataX.forEach((itdate, index2) => {
                            if (items.date === itdate && item === items.code_name) {
                                objs.data[index2] = items.num
                            }
                        })
                    })
                    arr.push(objs)
                })
                obj.series = arr
                this.arrs.push(obj)
                if (this.barlenght + this.prcoTwolenght + this.prcolenght + this.linelenght === this.alllength) {
                    this.setState({
                        newDatarr: this.arrs
                    })
                }
            }
        })
    }
    //出库及时率
    getqueryOutgoingRate() {
        getqueryOutgoingRate().then(res => {
            this.lineFun(res, '出库及时率(%)')
        })
    }
    //交付及时率
    getqueryTimelyDeliveryRate() {
        getqueryTimelyDeliveryRate().then(res => {
            this.lineFun(res, '交付及时率(%)')
        })
    }
    //线路数
    getqueryCircuitNumber() {
        getqueryCircuitNumber().then(res => {
            this.lineFun(res, '线路数(条)')
        })
    }
    //重复线路
    getqueryLineRepeat() {
        getqueryLineRepeat().then(res => {
            if (res.status === 200) {
                this.barlenght++;
                let data = res.data.data.slice(0, res.data.data.length - 1)
                let obj = {}
                let copy = res.data.data[res.data.data.length - 1]
                let objkey = Object.keys(copy)
                obj.name = '重复线路(条)'
                obj.type = 'barlines'
                obj.dimensions = ['address', ...Object.values(copy)]
                obj.source = data.map(item => {
                    let objs = {}
                    objs.address = item.address
                    for (let key in copy) {
                        objs[copy[key]] = item[key]
                    }
                    return objs
                })
                obj.series = objkey.map(item => {
                    return { type: 'bar', stack: 'ds' }
                })
                this.arrs.push(obj)
                if (this.barlenght + this.prcoTwolenght + this.prcolenght + this.linelenght === this.alllength) {
                    this.setState({
                        newDatarr: this.arrs
                    })
                }
            }
        })
    }
    //线路交付及时率
    getqueryDelayToptenMax() {
        getqueryDelayToptenMax().then(res => {
            if (res.status === 200) {
                // this.prcoTwolenght = this.prcoTwolenght + 0.5
                let data = res.data.data
                let obj = {}
                let twoobj = {}
                let arr = []
                obj.name = "线路交付及时率(%)"
                obj.type = 'prcoose'
                twoobj.type = '交付及时率最优TOP10'
                twoobj.data = data
                arr.push(twoobj)
                getqueryDelayToptenMin().then(res => {
                    if (res.status === 200) {
                        let data = res.data.data
                        let twoobj = {}
                        twoobj.type = '交付及时率最差TOP10'
                        twoobj.data = data
                        arr.push(twoobj)
                        obj.prcents = arr
                        this.arrss.push(obj)
                        if(this.arrss.length===2){
                            this.setState({
                                newDatarrs:this.arrss
                            })
                        }
                    }
                })
            }
        })
    }
    //线路交付及时率
    getqueryDelayToptenMin() {

    }
    //线路运输距离
    getqueryCarriageCapacityMax() {
        getqueryCarriageCapacityMax().then(res => {
            console.log(res)
        })
    }
    //线路运输距离
    getqueryCarriageCapacityMin() {
        getqueryCarriageCapacityMin().then(res => {
            console.log(res)
        })
    }
    //线路承运量
    getqueryLineDistance() {
        getqueryLineDistance().then(res => {
             if (res.status === 200) {
            // this.prcoTwolenght = this.prcoTwolenght + 0.5
                let data = res.data.data
                let obj = {}
                let total=0
                let twoobj = {}
                let arr = []
                obj.name = "线路承运量(辆)"
                obj.type = 'prcoose'
                data.forEach(item=>{
                    total+=item.distance
                })
                let datas=data.map(item=>{
                    item.prn=parseInt((item.distance/total)*100)
                    return item
                })
                twoobj.type = '承运量最多TOP10'
                twoobj.data = datas
                arr.push(twoobj)
            getqueryLineDistanceMin().then(res => {
                if (res.status === 200) {
                    // this.prcoTwolenght = this.prcoTwolenght + 0.5
                    let data = res.data.data
                    let total=0
                    let twoobj = {}
                    twoobj.type = '承运量最少TOP10'
                    data.forEach(item=>{
                        total+=item.distance
                    })
                    let datas=data.map(item=>{
                        item.prn=total===0?0:parseInt((item.distance/total)*100)
                        return item
                    })
                    twoobj.data = datas
                    arr.push(twoobj)
                    obj.prcents = arr
                    this.arrss.push(obj)
                        if(this.arrss.length===2){
                            this.setState({
                                newDatarrs:this.arrss
                            })
                        }
                    
                }
            })
        }
        })
    }
    //线路承运量
    getqueryLineDistanceMin() {
        
    }
    //安全事件类型对比
    getcountRiskBehaviour() {
        getcountRiskBehaviour().then(res => {
            console.log(res)
        })
    }
    //高风险次数与有效干预占比
    gethighRiskMeddle() {
        gethighRiskMeddle().then(res => {
            console.log(res)
        })
    }
    //危险行为时段分布
    getriskTimeFrame() {
        getriskTimeFrame().then(res => {
            console.log(res)
            if(res.status===200){
                this.barlenght++;
                let data=res.data.data
                let obj={}
                let arr=[]
                obj.name='危险行为时段分布(次)'
                obj.type='barlines'
                arr.push(['name',...data.map(item=>item.code_name)])
                data.forEach(item=>{
                    let objs={}
                    objs.name=item.code_name
                    for(let key in item.value){
                       let ring=item.value[key].risk_descr.toString().substring(0,item.value[key].risk_descr.length-1)
                       let numstring='numbers_hour_'+ring.padStart(2,'0')
                       console.log(numstring)
                         
                        objs[key]=item[numstring]
                    }
                    let arrobjs=Object.values(objs)
                    let lastindex=arrobjs.length-1
                    let lastvalue=arrobjs.splice(lastindex,1)
                    arrobjs.unshift(...lastvalue)
                
                    arr.push(arrobjs)
                })
                obj.source=arr
                this.arrs.push(obj)
                if (this.barlenght + this.prcoTwolenght + this.prcolenght + this.linelenght === this.alllength) {
                    this.setState({
                        newDatarr: this.arrs
                    })
                }
            }
        })
    }
    //高风险行为次数
    gethighRiskMost() {
        gethighRiskMost().then(res => {
            if (res.status === 200) {
                this.prcolenght++;
                let data = res.data.data
                let total = 0
                data.forEach(item => {
                    total += item.num
                })
                let dataprence = data.map((item, index) => {
                    item.prence = parseInt(item.num / total * 100)
                    item.id = index + 1
                    return item
                })
                let obj = {}
                obj.prcents = dataprence
                obj.name = '高风险行为次数(次)'
                obj.type = 'divprcoose'
                this.arrs.push(obj)
                if (this.barlenght + this.prcoTwolenght + this.prcolenght + this.linelenght === this.alllength) {
                    this.setState({
                        newDatarr: this.arrs
                    })
                }

            }
        })
    }
    //投资企业板车使用
    getgetTruckNumByOrgCode() {
        getgetTruckNumByOrgCode().then(res => {
            this.lineFun(res, '投资企业板车使用(%)')
        })
    }
    //投资企业满板率
    getgetTruckUsageRateByOrgCode() {
        getgetTruckUsageRateByOrgCode().then(res => {
            this.lineFun(res, '投资企业满板率(%)')
        })
    }
    //自有车辆利用率
    getgetTruckOwnRateByOrgCode() {
        getgetTruckOwnRateByOrgCode().then(res => {
            this.lineFun(res, '自有车辆利用率(%)')
        })
    }
    //库位利用率
    getgetWarehouseUsageRateDayByOrgCode() {
        getgetWarehouseUsageRateDayByOrgCode().then(res => {
            this.lineFun(res, '库位利用率(%)')
        })
    }
    //数字化覆盖趋势指标
    getgetListDayByOrgCode() {
        getgetListDayByOrgCode().then(res => {
            this.lineFun(res, '数字化覆盖趋势指标')
        })
    }
    componentWillMount(){
        this.getqueryLineDistance()
        this.getqueryDelayToptenMax()
    }
    //数据摸板
    dataEchart = [
        {
            type: 'bar',
            name: "撒大苏打",
            dimensions: ['product', '2015', '2016', '2017'],
            source: [
                { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
                { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
                { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
                { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
            ]
        },
        {
            type: 'line',
            name: "撒大苏打",
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
    ]
    render() {
        return (
            <div>
                {/* 删选 */}
                
                <div className="home_main_top">
                    <Button style={{ position: 'absolute', right: 0, zIndex: 32 }} onClick={() => { this.setState({ headoff: !this.state.headoff }) }}>自定义</Button>
                    {this.state.headoff ? <Filter chek={this.state.newDatarr} parentsFnHome={this.parentsFnHome} /> : ''}
                </div>
                {this.state.newDatarr.map((item, index) => {
                    return (
                        <Card title={item.name} key={index}>
                                {item.type === 'line' ? <LineEcharts datas={item} /> : item.type === 'divprcoose' ? item.prcents.map(it => {
                                    return <DivProgressTe key={it.carnum} datas={it} />
                                }) : item.type === 'barlines' ? <BarLines datas={item} /> : <BarEcharts datas={item} />}
                            </Card>


                    )
                })}
                {
                 this.state.newDatarrs.map((item,index)=>{
                        return(
                            <Row gutter={6} key={item.type+index}>
                            {item.prcents.map(items => {
                                return (<Col span={12} key={items.type} ><Card title={items.type}>{items.data.map((prcitem,indes) => <ProgressTe type={item.name} key={prcitem.code_name+indes} datas={prcitem} />)}</Card></Col>)
                            })}
                            </Row>
                        )
                    })
                }
            </div>
        )
    }
}