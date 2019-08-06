import React from 'react'
import { Tabs, Radio,Card } from 'antd';
const TabPane = Tabs.TabPane;
export default class Tabss extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          mode: 'top',
        };
      }
    
      handleModeChange = (e) => {
        const mode = e.target.value;
        this.setState({ mode });
      }
    render(){
        const { mode } = this.state;
        return(
            <div>
                 <Card style={{marginBottom:20}} title="Tabs标签页" >
                 <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
                 <Radio.Button value="top">水平</Radio.Button>
                <Radio.Button value="left">垂直</Radio.Button>
        </Radio.Group>
        <Tabs
          defaultActiveKey="1"
          tabPosition={mode}
          style={{ height: 220 }}
        >
          <TabPane tab="Tab 1" key="1">第 1 页</TabPane>
          <TabPane tab="Tab 2" key="2">第 2 页</TabPane>
          <TabPane tab="Tab 3" key="3">第 3 页</TabPane>
          <TabPane tab="Tab 4" key="4">第 4 页</TabPane>
          <TabPane tab="Tab 5" key="5">第 5 页</TabPane>
          <TabPane tab="Tab 6" key="6">第 6 页</TabPane>
          <TabPane tab="Tab 7" key="7">第 7 页</TabPane>
          <TabPane tab="Tab 8" key="8">第 8 页</TabPane>
          <TabPane tab="Tab 9" key="9">第 9 页</TabPane>
          <TabPane tab="Tab 10" key="10">第 1 页0</TabPane>
          <TabPane tab="Tab 11" key="11">第 1 页1</TabPane>
        </Tabs>
                </Card>
                
            </div>
        )
    }
}