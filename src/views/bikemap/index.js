import React from 'react'
import {Card,Form,Select} from 'antd'
import FilterForm from './form/form'
import {getBikeMap} from '../../api/bikemap/bikemap'
const FormItem=Form.Item
const Option=Select.Option
export default class BikeMaps extends React.Component{
    state={
        list:{}
    }
    params={

    }
    componentWillMount(){
        this.requestList()
    }
    findBike=(val)=>{
        this.params=val
        this.requestList()
   }
    requestList=()=>{
        getBikeMap(this.params).then(res=>{
            console.log(res.data.result)
            if(res.data.code=='0'){
               this.setState({
                   list:res.data.result
               })
               this.renderMap(res.data.result)
            }
        })
    }
    renderMap=(res)=>{
        this.map = new window.BMap.Map("container");
        let list=res.route_list
        let startPoint=new window.BMap.Point(list[0].split(',')[0],list[0].split(',')[1])
        let endPoint=new window.BMap.Point(list[list.length-1].split(',')[0],list[list.length-1].split(',')[1])
        this.map.centerAndZoom(endPoint,11)
        let startIcon=new window.BMap.Icon('/assets/start_point.png',new window.BMap.Size(36,42),{
            imageSize:new window.BMap.Size(36,42),
            anchor:new window.BMap.Size(18,42)
        })
        let bikeMarkerstart=new window.BMap.Marker(startPoint,{icon:startIcon})
        this.map.addOverlay(bikeMarkerstart)
        let endIcon=new window.BMap.Icon('/assets/end_point.png',new window.BMap.Size(36,42),{
            imageSize:new window.BMap.Size(36,42),
            anchor:new window.BMap.Size(18,42)
        })
        let bikeMarkerend=new window.BMap.Marker(endPoint,{icon:endIcon})
        this.map.addOverlay(bikeMarkerend)
        //绘制车辆行驶路线
        let routelist=[]
        list.forEach(item=>{
            routelist.push(new window.BMap.Point(item.split(',')[0],item.split(',')[1]))
        })
        let pointLine=new window.BMap.Polyline(routelist,{
            strokeColor:"red",
            strokeWeight:2,
            strokeOpacity:1
        })
        this.map.addOverlay(pointLine)
        //绘制服务区
        let severpointList=[]
        let severList=res.service_list
        severList.forEach(item=>{
            severpointList.push(new window.BMap.Point(item.lon,item.lat))
        })
        let pointseverLine=new window.BMap.Polyline(severpointList,{
            strokeColor:"red",
            strokeWeight:4,
            strokeOpacity:1
        })
        this.map.addOverlay(pointseverLine)
        //绘制所有自行车图标
        let bikelist=res.bike_list
        let bikepointlist=[]
        let bikeIcon=new window.BMap.Icon('/assets/bike.jpg',new window.BMap.Size(36,42),{
            imageSize:new window.BMap.Size(36,42)
        })
        bikelist.forEach(item=>{
            let bikepointlist=new window.BMap.Point(item.split(',')[0],item.split(',')[1])
            let bikelistmarker=new window.BMap.Marker(bikepointlist,{icon:bikeIcon})
            this.map.addOverlay(bikelistmarker)
        })

    }
    render(){
        return(
            <div>
                <Card>
                    <FilterForm findBike={this.findBike}></FilterForm>
                </Card>
                <div id="container" style={{height:500,marginTop:20}}></div>
            </div>
        )
    }
}