import React from 'react'
import { Form, Input,Radio,Modal,Button } from 'antd'

class FormCuster extends React.Component {
    componentDidMount(){
        this.props.onRef(this)
    }
    myName=(record)=>{
        this.props.form.resetFields()
        this.props.form.setFieldsValue({
            ...record
        })
        console.log(record)
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const layoutBable={
            labelCol:{
                span:8
            },
            wrapperCol:{
                span:15
            }
        }
        return (
                 <Modal
                    visible={this.props.visible}
                    title="新增"
                    width={500}
                    onOk={this.handleOk}
                    onCancel={() => { this.props.handleCancel() }}
                    footer={[
                        <Button key="back" onClick={() => { this.props.handleCancel() }}>
                            取消
                        </Button>,
                        <Button key="submit" type="primary" loading={this.props.loading} onClick={this.handleOk}>
                            提交
                        </Button>,
                    ]}
                >
                <Form>
                    <Form.Item {...layoutBable} label="客户名称">
                        {getFieldDecorator('custName', {
                            rules: [{ required: true, message: '必填' }],
                        })(
                            <Input style={{width:200}}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item {...layoutBable} label="性别">
                        {getFieldDecorator('sex')(
                            <Radio.Group style={{width:200}}>
                                <Radio value="男">男</Radio>
                                <Radio value="女">女</Radio>
                            </Radio.Group>
                        )}
                    </Form.Item>
                    <Form.Item {...layoutBable} label="电话">
                        {getFieldDecorator('phone', {
                            rules: [{ required: true, message: '必填' }],
                        })(
                            <Input style={{width:200}}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item {...layoutBable} label="身份证信息">
                        {getFieldDecorator('cardInfo', {
                            rules: [{ required: true, message: '必填' }],
                        })(
                            <Input style={{width:200}}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item {...layoutBable} label="创建时间">
                        {getFieldDecorator('createTime', {
                            rules: [{ required: true, message: '必填' }],
                        })(
                            <Input style={{width:200}}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                </Form>
                </Modal>
        )
    }
}

FormCuster = Form.create({})(FormCuster)
export default FormCuster
