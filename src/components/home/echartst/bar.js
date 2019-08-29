import React from 'react'
import echarts from 'echarts'
export default class BarEcharts extends React.Component{
    componentDidMount(){
        this.initBarEchart()
        window.addEventListener('resize',()=>{
            this.params.thounth.resize()
        })
    }

    params={
        id:'bar'+Math.random().toString(16).substring(3),
        thounth:null
    }
    option = {
        legend: {
            type:'scroll',
            left:70,
            bottom:0,
            itemWidth:14
        },
        tooltip: {},
        dataset: {
            dimensions: ['product', '2015', '2016', '2017'],
            source: [
                {product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7},
                {product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1},
                {product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5},
                {product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1}
            ]
        },
        xAxis: {type: 'category'},
        yAxis: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '10%',
            containLabel: true
        },
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            {type: 'bar'},
            {type: 'bar'},
            {type: 'bar'}
        ]
    }

    initBarEchart(){
        this.params.thounth=echarts.init(document.getElementById(this.params.id))
        this.params.thounth.showLoading({
            backgroundColor:'#000'
        })
        if( this.params.thounth!=null){
            this.params.thounth.clear()
            this.params.thounth.setOption(this.option);
            setTimeout(()=>{
              this.params.thounth.hideLoading()
            },1000)
        }
    }
    
    render(){
        return(
            <div style={{width:'100%',height:300}} id={this.params.id}></div>
        )
    }
}