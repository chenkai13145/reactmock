import React from 'react'
import {Card,Form, Icon, Input, Button, Checkbox} from 'antd'
import './index.less'

class Logins extends React.Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        })
        
    }
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }
    
    render(){
        const { getFieldDecorator, getFieldError, isFieldTouched, } = this.props.form;
        
          // Only show error after a field is touched.
          const usernameError = isFieldTouched('username') && getFieldError('username');
          const passwordError = isFieldTouched('password') && getFieldError('password');
        return(
            <div id='components-form-demo-normal-login'>
                 <Card className="logins" title="登陆行内表单">
                 <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={usernameError ? 'error' : ''}
          help={usernameError || ''}
        >
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
          >
            登录
          </Button>
        </Form.Item>
      </Form>
                 </Card>
                 <Card className="logins" title="登陆水平表单">
                 <Form onSubmit={this.handleSubmit} className="login-form">
           <Form.Item>
          {getFieldDecorator('usernames', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('passwords', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>记住密码</Checkbox>
           
          )} 
          <a style={{float:'right',color:'blue'}}>忘记密码</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
             登录
          </Button>
            
        </Form.Item>
      </Form>
                 </Card>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Logins);
export default WrappedNormalLoginForm