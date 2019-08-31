import React from 'react'
import echarts from 'echarts'
export default class BarLines extends React.Component {
    params = {
        id: 'bar' + Math.random().toString(16).substring(3),
        thounth: null
    }
    componentDidMount() {
        this.initBarEchart()
        window.addEventListener('resize', () => {
            this.params.thounth.resize()
        })
    }
    componentWillMount() {
        this.handChange()
    }

    option = {
        legend: {
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
        tooltip: {},
        dataset: {
            dimensions: ['product', '2015', '2016', '2017'],
            source: [
                { product: 'Matcha Latte', '2015': 43.3, '2016': 85.8, '2017': 93.7 },
                { product: 'Milk Tea', '2015': 83.1, '2016': 73.4, '2017': 55.1 },
                { product: 'Cheese Cocoa', '2015': 86.4, '2016': 65.2, '2017': 82.5 },
                { product: 'Walnut Brownie', '2015': 72.4, '2016': 53.9, '2017': 39.1 }
            ]
        },
        xAxis: { type: 'category' },
        yAxis: {},
        // Declare several bar series, each will be mapped
        // to a column of dataset.source by default.
        series: [
            { type: 'bar', stack: 'ds' },
            { type: 'bar', stack: 'ds' },
            { type: 'bar', stack: 'ds' }
        ]
    };

    initBarEchart() {
        this.params.thounth = echarts.init(document.getElementById(this.params.id))
        this.params.thounth.showLoading({
            backgroundColor: '#000'
        })
        if (this.params.thounth != null) {
            this.params.thounth.clear()
            console.log(this.option)
            this.params.thounth.setOption(this.option, true);
            setTimeout(() => {
                this.params.thounth.hideLoading()
            }, 1000)
        }
    }

    //传过来的数据初始化
    handChange() {
        this.option.dataset.dimensions = this.props.datas.dimensions

        // .map(item => {
        //     let obj = {}
        //     obj.name = item
        //     obj.icon = 'rect'
        //     return obj
        // })
        this.option.dataset.source= this.props.datas.source
        this.option.series =this.props.datas.series
    }

    render() {
        return (
            <div style={{ width: '100%', height: 300 }} id={this.params.id}></div>
        )
    }
}