import React from 'react'
import echarts from 'echarts'
export default class BarEcharts extends React.Component{
    params={
        id:'bar'+Math.random().toString(16).substring(3),
        thounth:null
    }
    componentDidMount(){
        this.initBarEchart()
        window.addEventListener('resize',()=>{
            this.params.thounth.resize()
        })
    }
   componentWillMount(){
       this.handChange()
   }
    
    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他'],
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
        xAxis : [
            {
                type : 'category',
                data : ['周一','周二','周三','周四','周五','周六','周日']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'直接访问',
                type:'bar',
                data:[320, 332, 301, 334, 390, 330, 320]
            },
            {
                name:'邮件营销',
                type:'bar',
                stack: '广告s',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'联盟广告',
                type:'bar',
                stack: '广告s',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'视频广告',
                type:'bar',
                stack: '广告s',
                data:[150, 232, 201, 154, 190, 330, 410]
            },
            {
                name:'搜索引擎',
                type:'bar',
                data:[862, 1018, 964, 1026, 1679, 1600, 1570],
                markLine : {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data : [
                        [{type : 'min'}, {type : 'max'}]
                    ]
                }
            },
            {
                name:'百度',
                type:'bar',
                barWidth : 5,
                stack: '搜索引擎',
                data:[620, 732, 701, 734, 1090, 1130, 1120]
            },
            {
                name:'谷歌',
                type:'bar',
                stack: '搜索引擎',
                data:[120, 132, 101, 134, 290, 230, 220]
            },
            {
                name:'必应',
                type:'bar',
                stack: '搜索引擎',
                data:[60, 72, 71, 74, 190, 130, 110]
            },
            {
                name:'其他',
                type:'bar',
                stack: '搜索引擎',
                data:[62, 82, 91, 84, 109, 110, 120]
            }
        ]
    };

    initBarEchart(){
        this.params.thounth=echarts.init(document.getElementById(this.params.id))
        this.params.thounth.showLoading({
            backgroundColor:'#000'
        })
        if( this.params.thounth!=null){
            this.params.thounth.clear()
            console.log(this.option)
            this.params.thounth.setOption(this.option,true);
            setTimeout(()=>{
              this.params.thounth.hideLoading()
            },1000)
        }
    }

     //传过来的数据初始化
     handChange(){
        this.option.legend.data=this.props.datas.lengend.map(item=>{
            let obj={}
            obj.name=item
            obj.icon='rect'
            return obj
        })
        this.option.series=this.props.datas.series
        this.option.xAxis[0].data=this.props.datas.dataX
     }
    
    render(){
        return(
            <div style={{width:'100%',height:300}} id={this.params.id}></div>
        )
    }
}