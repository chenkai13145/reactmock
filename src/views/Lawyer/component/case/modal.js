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
                    width={820}
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
                            <Row gutter={16}>
                                <Col span={12}>
                                    <Form.Item label="编号">
                                        {getFieldDecorator('telnumbel', {
                                            rules: [{ required: true, message: '必填' }],
                                        })(<Input placeholder="请输入编号" />)}
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="拘票">
                                        {getFieldDecorator('piao')(
                                            <Radio.Group>
                                                <Radio value="a">item 1</Radio>
                                                <Radio value="b">item 2</Radio>
                                                <Radio value="c">item 3</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                <Form.Item label="类型">
                                        {getFieldDecorator('type')(
                                            <Radio.Group>
                                                <Radio value="a">item 1</Radio>
                                                <Radio value="b">item 2</Radio>
                                                <Radio value="c">item 3</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item label="拘票">
                                        {getFieldDecorator('piao')(
                                            <Radio.Group>
                                                <Radio value="a">item 1</Radio>
                                                <Radio value="b">item 2</Radio>
                                                <Radio value="c">item 3</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col span={12}>
                                <Form.Item label="类型2">
                                        {getFieldDecorator('typeTwo')(
                                            <Radio.Group>
                                                <Radio value="a">item 1</Radio>
                                                <Radio value="b">item 2</Radio>
                                                <Radio value="c">item 3</Radio>
                                            </Radio.Group>
                                        )}
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                              <Form.Item label="案件描述">
                              {getFieldDecorator('neirong')(
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
