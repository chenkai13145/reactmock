import React from 'react'
import { Card, Form } from 'antd'
import './derail.less'
import { getOrderdetail } from '../../api/order/order'
const FormItem = Form.Item

export default class Derails extends React.Component {
    state = {
        detail: {}
    }
    componentDidMount() {
        let orderId = this.props.match.params.id
        if (orderId) {
            const obg = {
                orderId
            }
            getOrderdetail(obg).then(res => {
                console.log(res)
                if (res.status == '200' && res.data.code == '0') {
                    this.setState({
                        detail: res.data.result
                    })
                    this.renderMap(res.data.result)
                }
            })
        }
       
    }
    //地图
    renderMap = (result) => {
       this.map=new window.BMap.Map('ordermap');
       this.map.centerAndZoom('北京', 11);    
       this.addmapcontrol()
       this.drawbikerouter(result.position_list)
       this.drawbikerArae(result.area)

    }
    //地图控件
    addmapcontrol = () => {
        let map=this.map
        map.addControl(new window.BMap.NavigationControl({anchor:window.BMAP_ANCHOR_TOP_LEFT}));
        map.addControl(new window.BMap.ScaleControl({anchor:window.BMAP_ANCHOR_TOP_LEFT}));
        map.addControl(new window.BMap.OverviewMapControl());
        map.addControl(new window.BMap.MapTypeControl());
        map.setCurrentCity("北京");
    }
    //绘制用户路线
    drawbikerouter=(positionList)=>{
         let map=this.map
         let startPoint='';
         let endPoint="";
        

         if(positionList.length>0){
          
             let arr=positionList[0]
             startPoint=new window.BMap.Point(arr.lon,arr.lat)//起点坐标
           let startIcon=new window.BMap.Icon('/assets/start_point.png',new window.BMap.Size(36,42),{
             imageSize:new window.BMap.Size(36,42),//图标大小
            anchor:new window.BMap.Size(36,42)
            })//起点的图标
            let startmark=new window.BMap.Marker(startPoint,{icon:startIcon});//必须使用Marker放入起点和图标
            this.map.addOverlay(startmark);//addOverlay添加到地图


            //jieshu
            let arrend=positionList[positionList.length-1]
            endPoint=new window.BMap.Point(arrend.lon,arrend.lat)//结束点坐标
            let endIcon=new window.BMap.Icon('/assets/end_point.png',new window.BMap.Size(36,42),{
             imageSize:new window.BMap.Size(36,42),
            anchor:new window.BMap.Size(36,42)
            })
            let endmark=new window.BMap.Marker(endPoint,{icon:endIcon});
            this.map.addOverlay(endmark);
         }

         //连接线路图
         let trackPoint=[]
         for(let i=0;i<positionList.length;i++){
             let point=positionList[i]
            trackPoint.push(new window.BMap.Point(point.lon,point.lat))//把点存入数组中
         }
         let polyline=new window.BMap.Polyline(trackPoint,{//设置线的颜色大小，透明度
             strokeColor:"#1869AD",
             strokeWeight:3,
             strokeOpacity:1
         })
         this.map.addOverlay(polyline)
        this.map.centerAndZoom('endPoint',11)
    }
    //挥之服务区
    drawbikerArae=(positionList)=>{
        console.log(positionList)
        let trackPoint=[]
         for(let i=0;i<positionList.length;i++){
             let point=positionList[i]
            trackPoint.push(new window.BMap.Point(point.lon,point.lat))
         }
         let polygon=new window.BMap.Polygon(trackPoint,{//服务区的设置
             strokeColor:"#CE0000",
             strokeWeight:4,
             strokeOpacity:1,
             fillColor:'#ff8605'
         })
         this.map.addOverlay(polygon)
        this.map.centerAndZoom('endPoint',11)
    }
    render() {
        return (
            <div>
                <div id='ordermap' style={{ width: '90%', height:'400px', margin: '30px auto' }}></div>
                <Card className='cards' >
                    <div>基础信息</div>
                    <div style={{ padding: '40px 0 20px 26px', color: '#000' }}>
                        <Form>
                            <FormItem label="用车模式">
                                {this.state.detail.mode == 1 ? '服务区' : '停车点'}
                            </FormItem>
                            <FormItem label="订单编号" style={{ width: 390, display: 'block', clear: 'both' }}>
                                {this.state.detail.order_sn}
                            </FormItem>
                            <FormItem label="车辆编号">
                                {this.state.detail.bike_sn}
                            </FormItem>
                            <FormItem label="用户姓名">
                                {this.state.detail.user_name}
                            </FormItem>
                            <FormItem label="手机号码">
                                {this.state.detail.mobile}
                            </FormItem>
                        </Form>
                    </div>
                </Card>
                <Card className='cards'>
                    <div>行驶轨迹</div>
                    <div style={{ padding: '40px 0 20px 26px' }}>
                        <Form>
                            <FormItem label="行程起点">
                                {this.state.detail.start_location}
                            </FormItem>
                            <FormItem label="行程终点">
                                {this.state.detail.end_location}
                            </FormItem>
                            <FormItem label="行驶里程">
                                {this.state.detail.distance / 1000}公里
                           </FormItem>
                        </Form>
                    </div>
                </Card>
            </div>
        )
    }
}