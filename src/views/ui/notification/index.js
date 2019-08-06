import React from 'react'
import { Button, notification,Card } from 'antd';
export default class Notifications extends React.Component{
    state={
        key:'updatable'
    }
    openNotificationWithIcon = (type) => {
        notification[type]({
          message: 'Notification Title',
          description: type,
        });
      }
      

       openNotification = () => {
        notification.open({
          key:this.state.key,
          message: 'Notification Title',
          description: 'description.',
        });
        setTimeout(() => {
          notification.open({
            key:this.state.key,
            message: '修改后',
            description: '大家好我是修改后的结果',
          });
        }, 3000);
      }      
    render(){
        return(
            <div>
                <Card style={{marginBottom:20}} title="左侧通知消息提示" >
                <Button onClick={() => this.openNotificationWithIcon('success')}>成功</Button>
                <Button onClick={() => this.openNotificationWithIcon('info')}>详情</Button>
                <Button onClick={() => this.openNotificationWithIcon('warning')}>警告</Button>
                <Button onClick={() => this.openNotificationWithIcon('error')}>错误</Button>
                <Button type="primary" onClick={this.openNotification}>通过key修改内容</Button>
                </Card>
            </div>
        )
    }
}