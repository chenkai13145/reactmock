import React from 'react'
// 引入 ECharts 主模块
import echarts from 'echarts';
export default class LineEchart extends React.Component{
    constructor(props){
        super(props)
    }
    echart={
        id:Math.random().toString(16).substring(3),
        thounth:null
    }
    option = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎'],
            type:'scroll',
            left:70,
            bottom:0,
            itemWidth:14

        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['周一','周二','周三','周四','周五','周六','周日']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name:'邮件营销',
                type:'line',
                stack: '总量',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'line',
                stack: '总量',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'line',
                stack: '总量',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'直接访问',
                type:'line',
                stack: '总量',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'搜索引擎',
                type:'line',
                stack: '总量',
                data:[820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    }
    componentWillMount(){
        this.handChange()
    }
    componentDidMount(){
     this.renderEchart()
     window.addEventListener('resize',()=>{
        // console.log(this.echartsVal.myChart)
        this.echart.thounth.resize()
    })
    }

    renderEchart(){
       this.echart.thounth=echarts.init(document.getElementById(this.echart.id))
       this.echart.thounth.showLoading({
        backgroundColor:'#000'
       })
       if( this.echart.thounth!=null){
        this.echart.thounth.clear()
        console.log(this.option)
        this.echart.thounth.setOption(this.option);
        setTimeout(()=>{
          this.echart.thounth.hideLoading()
        },1000)
    }
    }

    handChange(){
        this.option.legend.data=this.option.legend.data.map(item=>{
            let obj={}
            obj.name=item
            obj.icon='rect'
            return obj
        })
    }
    
    render(){
        return(
            <div id={this.echart.id} style={{width:'100%',height:'300px'}}></div>
        )
    }
}