import React from 'react';
import { Card } from 'antd';
// import echartTheme from './../themeLight'
//不是按需加载的话文件太大
//import echarts from 'echarts'
//下面是按需加载
import echarts from 'echarts/lib/echarts'
//导入折线图
// import 'echarts/lib/chart/line';  //折线图是line,饼图改为pie,柱形图改为bar
// import 'echarts/lib/component/tooltip';
// import 'echarts/lib/component/title';
// import 'echarts/lib/component/legend';
// import 'echarts/lib/component/markPoint';
import EchartsTest from '../../components/echarts/bar'
export default class Line extends React.Component {
  componentWillMount() {
    //主题的设置要在willmounted中设置
    echarts.registerTheme('Imooc', 'red');
  }
  getOption = () => {
    let option = {
      title: { text: 'ECharts 入门示例' },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    }
    return option
  }

  render() {
    return (
      <div>
        <Card title="折线图表之一">
          <EchartsTest getOption={this.getOption()} />
        </Card>

      </div>
    )
  }
}
