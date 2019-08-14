import React, { Component } from 'react';

// 引入 ECharts 主模块
import echarts from 'echarts/lib/echarts';
// 引入柱状图
import  'echarts/lib/chart/bar';
// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class EchartsTest extends Component {
    constructor(props){
        super(props)
        this.state={
            idount:'echart'+Math.random().toString().substring(2,9),
        }
    }
    echartsVal={
        myChart:null
    }
    componentDidMount() {
        this.ininBar()
    }
    ininBar=()=>{
           
           // 基于准备好的dom，初始化echarts实例
           this.echartsVal.myChart=echarts.init(document.getElementById(this.state.idount))
          // 绘制图表
          this.echartsVal.myChart.showLoading({
              backgroundColor:'#000'
          })
          if( this.echartsVal.myChart!=null){
              this.echartsVal.myChart.clear()
              this.echartsVal.myChart.setOption(this.props.getOption);
              setTimeout(()=>{
                this.echartsVal.myChart.hideLoading()

              },1000)

          }
    }
    render() {
        return (
            <div id={this.state.idount} style={{ width: 400, height: 400 }}></div>
        );
    }
}

export default EchartsTest;
