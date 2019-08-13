import React from 'react'
import {message, Form, Input,Radio,Modal,Button } from 'antd'
import {editCuster,addCuster} from '@/api/custer/custer'

class FormCuster extends React.Component {
    params={
        title:''
    }
    componentDidMount(){
        this.props.onRef(this)
    }
    myName=(record)=>{
        this.props.form.resetFields()
        this.props.form.setFieldsValue({
            ...record
        })
    }
    //确认按钮
    handleOk=()=>{
         let datas=this.props.form.getFieldsValue()
         this.params.title==="编辑"?editCuster(datas).then(res=>{
           if(res.data.code===0){
            // this.props.handleCancel()
            message.success('编辑成功')
            this.props.handleEditOk()
           }
         }):addCuster(datas).then(res=>{
            if(res.data.code===0){
                // this.props.handleCancel()
                message.success('新增成功')
                this.props.handleEditOk()
               }
         })
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
                    title={this.params.title}
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
                        {getFieldDecorator('caseName', {
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
                                <Radio value={1}>男</Radio>
                                <Radio value={2}>女</Radio>
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
