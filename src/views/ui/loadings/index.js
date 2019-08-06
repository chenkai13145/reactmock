import React from 'react'
import { Spin, Alert, Switch,Button,Card } from 'antd';
export default class Loadings extends React.Component{
    state={
        loading:false
    }
    toggle=(e)=>{
        this.setState({
            loading:e
        })
    }
    render(){
        return(
            <div>
                 <Card style={{marginBottom:20}} title="loading加载" >
                 <Button onClick={()=>this.toggle(true)}  type="primary">
                    loading
                 </Button>
                 <Button onClick={()=>this.toggle(false)}>
                    关闭loading
                 </Button>
                </Card>
                <Spin spinning={this.state.loading}>
                 <Alert
                      message="Alert message title"
                       description="Further details about the context of this alert."
                    type="info"
                     />
                 </Spin>
            </div>
        )
    }
}