import React from 'react'
import { message, Button,Card } from 'antd';
export default class Messages extends React.Component{
    toggle=()=>{
        message.info('This is a 消息全局');
    }
    success = () => {
        message.success('This is a message of 成功自定义时长',10);
      }
      
    error = () => {
        message.error('This is a message of 错误');
      }
      
    warning = () => {
        message.warning('This is message of 警告');
      }
    render(){
        return(
            <div>
                <Card style={{marginBottom:20}} title="全局消息提示" >
                 <Button onClick={this.toggle}  type="primary">
                    基本消息提示
                 </Button>
                 <Button onClick={this.success}>成功10s</Button>
                 <Button onClick={this.error}>错误</Button>
                 <Button onClick={this.warning}>警告</Button>
                </Card>
            </div>
        )
    }
}