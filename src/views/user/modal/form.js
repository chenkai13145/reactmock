import React from 'react'
import {Form,Select,Input,Radio,DatePicker} from 'antd'
import moment from 'moment'
const FormItem=Form.Item
const Option=Select.Option
const { TextArea } = Input;
const RadioGrounp=Radio.Group
export default class FilterForm extends React.Component{
    render(){

        const layoutwiith={
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:19
            }
        }
        const { getFieldDecorator } = this.props.form;
        const userinfo=this.props.userinfo||{}
        return(
            <div>
          
                  <Form>
                      <FormItem {...layoutwiith} label="用户名">
                      {getFieldDecorator('user_name',{
                          initialValue:userinfo.username
                      })(
                         <Input placeholder="请输入用户名"/>,
                      )}
                      </FormItem>   
                      <FormItem {...layoutwiith} label="性别">
                      {getFieldDecorator('sex',{
                          initialValue:userinfo.sex
                      })(
                         <RadioGrounp>
                             <Radio value={1}>男</Radio>
                             <Radio value={2}>女</Radio>
                         </RadioGrounp>
                      )}
                      </FormItem>  
                      <FormItem {...layoutwiith} label="状态">
                      {getFieldDecorator('state',{
                          initialValue:userinfo.state
                      })(
                         <Select>
                             <Option value={1}>相}遇繁盛</Option>
                             <Option value={2}>百度</Option>
                             <Option value={3}>创业者</Option>
                             <Option value={4}>游泳者</Option>
                             <Option value={5}>咸鱼者</Option>
                         </Select>
                      )}
                      </FormItem>  
                      <FormItem {...layoutwiith} label="生日">
                      {getFieldDecorator('birthday',{
                          initialValue:moment(userinfo.birthday)
                      })(
                         <DatePicker/>
                      )}
                      </FormItem>  
                      <FormItem {...layoutwiith} label="联系地址">
                      {getFieldDecorator('address',{
                          initialValue:userinfo.address
                      })(
                         <TextArea row={3} placeholder="请输入联系地址"></TextArea>
                      )}
                      </FormItem>           
                  </Form>
           
            </div>
        )
    }
}
FilterForm = Form.create({})(FilterForm);