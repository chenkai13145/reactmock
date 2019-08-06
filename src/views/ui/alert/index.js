import React from 'react'
import { Modal, Button,Card } from 'antd';
export default class Alert extends React.Component{
    state={
        alert1:false,
        alert2:false,
        title:''
    }
    showModal=(type)=>{
        let [key,al]=type
        this.setState({
             [al]:!this.state.al,
             title:key
        })
    }
    handleOk = (e) => {
        console.log(e);
        this.setState({
            alert1: false,
            alert2: false,
        });
      }
    
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            alert1: false,
            alert2: false,
        });
      }
    render(){
        return(
            <div>
                <Card style={{marginBottom:20}} title="基础模态框" >
                 <Button type="primary" onClick={()=>this.showModal(['基本弹窗','alert1'])}>
                    基本弹窗
                 </Button>
                 <Button onClick={()=>this.showModal(['异步弹窗','alert2'])}>
                    异步弹窗
                 </Button>
                </Card>
                <Modal
                  title={this.state.title}
                  visible={this.state.alert1 ||this.state.alert2}
                   onOk={this.handleOk}
                   onCancel={this.handleCancel}
                 >
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                  <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}