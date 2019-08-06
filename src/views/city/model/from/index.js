import React from 'react'
import { Form, Select,Button} from 'antd'
const FormItem = Form.Item
const Option=Select.Option
export default class FilterForm extends React.Component {
    submits=(e)=>{
        this.props.form.validateFields((err, values) => {
            this.props.subMit(values)
        });
      
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout="inline">
                <FormItem label="城市" >
                    {getFieldDecorator('city_id')(
                        <Select style={{width:'100px'}} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">成都市</Option>
                            <Option value="2">内江市</Option>
                            <Option value="3">自贡市</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="用车模式" >
                    {getFieldDecorator('mode')(
                        <Select style={{width:'120px'}} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">指定停车点模式</Option>
                            <Option value="2">禁停区模式</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="运营模式" >
                    {getFieldDecorator('ops_mode')(
                        <Select style={{width:'100px'}} placeholder="全部">
                            <Option value="">全部</Option>
                            <Option value="1">自营</Option>
                            <Option value="2">加盟</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem label="加盟商授权状态" >
                    {getFieldDecorator('op_mode')(
                        <Select style={{width:'100px'}} placeholder="全部" width='100px'>
                            <Option value="">全部</Option>
                            <Option value="1">已授权</Option>
                            <Option value="2">未授权</Option>
                        </Select>
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" style={{margin:'0 20px'}} onClick={this.submits}>查询</Button>
                    <Button onClick={()=>{
                        this.props.form.resetFields();
                    }}>重置</Button>
                </FormItem>
                
            </Form>

        )
    }
}
FilterForm=Form.create({})(FilterForm);