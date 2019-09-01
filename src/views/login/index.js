import React from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {connect} from 'react-redux'
import {postLogin} from '@/redux/action/login/login'
import './idnex.less'

class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(values.username==='陈凯' && values.password==='654321'){
           this.props.postLogin(this.props.history)
           localStorage.setItem('date',new Date().getTime()+60*60*1000)
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const layoutCol={
        labelCol:{
            span:8
        },
        wrapperCol:{
            span:16
        }
    }
    return (
      <Form onSubmit={this.handleSubmit} layout='horizontal' className="login">
        <Form.Item {...layoutCol} label='用户名'>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="陈凯"
            />,
          )}
        </Form.Item>
        <Form.Item {...layoutCol} label="密码">
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="654321"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
         
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps=(state)=>{
    return{
          auth:state.loginReducer.auth
    }
}

export default  connect(mapStateToProps,{postLogin})(WrappedNormalLoginForm)