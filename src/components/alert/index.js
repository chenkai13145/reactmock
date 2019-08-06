/**
 * Alert组件
 * 调用应用
 * choose传值，clear父组件方法
 */

import React, { Component } from 'react';
import {Alert} from 'antd'
import './index.less'

class AlertCom extends Component {
    render() {
        const link=<a onClick={this.props.clear}>清空</a>
        return (
            <Alert message={'你已选择'+this.props.choose+'项'} description={this.props.choose?link:''} type="info" showIcon />
        );
    }
}

export default AlertCom;
