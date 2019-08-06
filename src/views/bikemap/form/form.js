import React from 'react'
import {Card,Form,Select, DatePicker,Button} from 'antd'
const {RangePicker} = DatePicker;
const FormItem=Form.Item
const Option=Select.Option
export default class FilterForm  extends React.Component{
    handSubmit=()=>{
        this.props.form.validateFields((err, values) => {
            if (!err) {
              this.props.findBike(values)
            }
          });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div>
                <Card>
                    <Form layout='inline'>
                        <FormItem label="城 市">
                        {
                            getFieldDecorator('city',{
                                initialValue:'0'                               
                            })(
                            <Select style={{width:100}}>
                                <Option value='0'>全部</Option>
                                <Option value='1'>北京</Option>
                                <Option value='2'>上海</Option>
                                <Option value='3'>城都</Option>
                            </Select>
                            )
                        }
                            
                        </FormItem>
                        <FormItem>
                        {
                             getFieldDecorator('time')(
                                <RangePicker/>
                             )
                        }
                           
                        </FormItem>
                        <FormItem label="订单状态">
                        {
                            getFieldDecorator('state',{
                                initialValue:'0'
                            })
                        
                            ( <Select style={{width:120}}>
                                 <Option value='0'>全部</Option>
                                 <Option value='1'>进行中</Option>
                                 <Option value='2'>结束行程</Option>
                             </Select>)
                        }
                        </FormItem>
                        <FormItem>
                          <Button typr='priamay' onClick={this.handSubmit}>查询</Button>
                          <Button>重置</Button>
                        </FormItem>

                    </Form>
                </Card>
            </div>
        )
    }
}
FilterForm = Form.create({ name: 'normal_login' })(FilterForm);