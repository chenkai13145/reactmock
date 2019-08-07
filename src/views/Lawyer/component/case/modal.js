import React, { Component } from 'react';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Card,Radio} from 'antd';
import TableList from '../../component/case/tablelist'
const { Option } = Select;
const { TextArea } = Input;
class ModalLeft extends Component {
    constructor() {
        super()
        this.state = {
            visible: false
        }
    }
    //关闭抽屉框
    close = () => {
        this.props.visibleclose()
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div>
                <Drawer
                    title="新增案件"
                    width={1000}
                    onClose={this.close}
                    visible={this.props.visible}
                >

                    <Form layout="vertical" hideRequiredMark>
                        <Card title='客户信息'>
                            <Row gutter={16}>
                                <Col span={8}>
                                    <Form.Item label="客户姓名">
                                        {getFieldDecorator('name', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入姓名" />)}
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="联系电话">
                                        {getFieldDecorator('number', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入电话号码" />)}
                                    </Form.Item>
                                </Col>
                                <Col span={8}>
                                    <Form.Item label="身份证">
                                        {getFieldDecorator('usernumber', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入身份证" />)}
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Card>
                        <Card title="案件信息">
                            <Row justify="space-between" type="flex" gutter={16}>
                                <Col span={5}>
                                    <Form.Item label="案件编号">
                                        {getFieldDecorator('caseNumber', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入案件编号" />)}

                                    </Form.Item>
                                </Col>
                                <Col span={5}>
                                    <Form.Item label="案件名称">
                                        {getFieldDecorator('caseName', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入案件名称" />)}

                                    </Form.Item>
                              
                                </Col>
                                <Col span={5}>
                                    <Form.Item label="总费用">
                                        {getFieldDecorator('allfee', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入总费用" />)}

                                    </Form.Item>
                                </Col>
                                <Col span={5}>
                                    <Form.Item label="案件状态">
                                        {getFieldDecorator('status', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Radio.Group>
                                            <Radio value="1">合同书</Radio>
                                            <Radio value="2">委托书</Radio>
                                        </Radio.Group>)}
                                           
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row justify="space-between" type="flex" gutter={16}>
                                <Col span={5}>
                                    <Form.Item label="起诉人">
                                        {getFieldDecorator('prosecutor', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入起诉人" />)}

                                    </Form.Item>
                                </Col>
                                <Col span={5}>
                                    <Form.Item label="被起诉人">
                                        {getFieldDecorator('byprosecutor', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入被起诉人" />)}

                                    </Form.Item>
                                </Col>
                                <Col span={5}>
                                    <Form.Item label="主办律师">
                                        {getFieldDecorator('lawyer', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入主办律师" />)}
                                    </Form.Item>
                                </Col>
                                <Col span={5}>
                                    <Form.Item label="开庭时间">
                                       {getFieldDecorator('courtDay', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入开庭时间" />)}
                                           
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row justify="space-between" type="flex" gutter={16}>
                                <Col span={5}>
                                    <Form.Item label="收案时间">
                                        {getFieldDecorator('closeTime', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入收案时间" />)}

                                    </Form.Item>
                                </Col>
                                <Col span={5}>
                                    <Form.Item label="据票">
                                        {getFieldDecorator('ticket', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入据票" />)}

                                    </Form.Item>
                                </Col>
                                <Col span={5}>
                                    <Form.Item label="委托方式">
                                        {getFieldDecorator('delegateType', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入委托方式" />)}
                                    </Form.Item>
                                </Col>
                                <Col span={5}>
                                    <Form.Item label="起诉类型">
                                       {getFieldDecorator('sueType', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入起诉类型" />)}
                                           
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row justify="space-between" type="flex" gutter={16}>
                                <Col span={5}>
                                    <Form.Item label="案件类型">
                                        {getFieldDecorator('caseType', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入案件类型" />)}

                                    </Form.Item>
                                </Col>
                                <Col span={5}>
                                   
                                </Col>
                                <Col span={5}>
                                   
                                </Col>
                                <Col span={5}>
                                   
                                </Col>
                            </Row>
                            <Row>
                              <Form.Item label="案件描述">
                              {getFieldDecorator('caseDesc')(
                                   <TextArea rows={4} placeholder="案件描述原因"/>
                              )}
                              </Form.Item>
                            </Row>
                        </Card>
                    </Form>
                    <Card title="律师团队">
                        <TableList></TableList>
                    </Card>
                    <div
                        style={{
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            width: '100%',
                            borderTop: '1px solid #e9e9e9',
                            padding: '10px 16px',
                            background: '#fff',
                            textAlign: 'right',
                        }}
                    >
                        <Button onClick={this.close} style={{ marginRight: 8 }}>
                            取消
            </Button>
                        <Button onClick={this.onClose} type="primary">
                            提交
            </Button>
                    </div>
                </Drawer>
            </div>
        );
    }
}
ModalLeft = Form.create()(ModalLeft);
export default ModalLeft;


