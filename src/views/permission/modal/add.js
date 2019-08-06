import React from 'react'
import {Form,Select,Input} from 'antd'
const FormItem=Form.Item
const Option=Select.Option

export default class Adds extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form
        const fromitemLayout={
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:19
            }
        }
       
        return(
            <Form>
                <FormItem {...fromitemLayout} label='角色名称' >
                {getFieldDecorator('role_name')(
                 <Input placeholder="请输入角色名称"/>
                )}
                </FormItem>
                <FormItem {...fromitemLayout} label='状态' >
                {getFieldDecorator('state')(
                  <Select>
                        <Option value={1}>开启</Option>
                        <Option value={0}>关闭</Option>
                  </Select>
                )}
                </FormItem>
            </Form>
        )
    }
}
Adds = Form.create({})(Adds);
