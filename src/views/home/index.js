import React from 'react'
import {Card,Button} from 'antd'
import Filter from '@/components/home/homeCustm/filter'
import LineEcharts from '@/components/home/echartst/line'
export default class Home extends React.Component{
    constructor(){
        super()
        this.state={
            headoff:false
        }
    }
    parentsFnHome=(arr)=>{
  console.log(arr)
    }
    render(){
        return(
            <div>
                {/* 删选 */}
                <div className="home_main_top">
                    <Button style={{position:'absolute',right: 0,zIndex:32}} onClick={()=>{this.setState({headoff:!this.state.headoff})}}>自定义</Button>
                    {this.state.headoff?<Filter parentsFnHome={this.parentsFnHome}/>:''}
                </div>
                <Card>
                   <LineEcharts/>
                </Card>
                <Card>
                   <LineEcharts/>
                </Card>
                <Card>
                   <LineEcharts/>
                </Card>
            </div>
        )
    }
}