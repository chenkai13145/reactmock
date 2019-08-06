import React from 'react'
import {Form,Select,DatePicker,message,Button} from 'antd'
const FormItem=Form.Item
const Option=Select.Option
export default class FilterFrom extends React.Component{
    submitOrder=()=>{
        this.props.form.validateFields((err, values) => {
           err?message.error(err):this.props.orderfn(values)
          });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Form layout='inline'>
                <FormItem label="城市">
                {getFieldDecorator('city_id')(
                <Select style={{width:100}}  placeholder="全部">
                  <Option value="">全部</Option>
                  <Option value="1">北京市</Option>
                  <Option value="2">天津市</Option>
                  <Option value="3">成都市</Option>
                </Select>
                    )}
                        </FormItem>
                        <FormItem label="订单时间">
                        {getFieldDecorator('start-time')(
                            <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )}      
                       
                        </FormItem>
                        <FormItem>
                            
                        {getFieldDecorator('end-time')(
                         <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />
                        )}
                        </FormItem>
                        <FormItem label="订单状态">
                {getFieldDecorator('op_mode')(
                <Select style={{width:100}}  placeholder="全部"> 
                  <Option value="">全部</Option>
                  <Option value="1">进行中</Option>
                  <Option value="2">结束行程</Option>
                  <Option value="3">行程结束</Option>
                </Select>
                    )}
                        </FormItem>
                        <FormItem>
                            <Button onClick={this.submitOrder}>查询</Button>
                            <Button onClick={()=>{
                                this.props.form.resetFields();
                            }}>重置</Button>
                        </FormItem>
                </Form>
            </div>
        )
    }
}
FilterFrom=Form.create({})(FilterFrom);