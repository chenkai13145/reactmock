import React, { Component } from 'react';
import { Modal, Card, Button, Row, Col, Form, Input, Radio, Switch, Upload, Icon } from 'antd'
const FormItem = Form.Item;
const { TextArea } = Input;
class DrawModal extends Component {
    render() {
        return (
            <div>
                <Modal
                    visible={this.props.visible}
                    title="跟踪"
                    width={1000}
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
                    <Card title="案件信息">
                        <Row gutter={14}>
                            <Col span={8}>
                                <strong>客户姓名:</strong><span>撑开</span>
                            </Col>
                            <Col span={8}>
                                <strong>联系电话:</strong><span>13981722057</span>
                            </Col>
                        </Row>
                        <Row gutter={14}>
                            <Col span={8}>
                                <strong>案件名称:</strong><span>婚姻是</span>
                            </Col>
                            <Col span={8}>
                                <strong>案件类别:</strong><span>调差</span>
                            </Col>
                            <Col span={8}>
                                <strong>类型:</strong><span>撒旦</span>
                            </Col>
                        </Row>
                        <Row gutter={14}>
                            <Col span={24}>
                                <strong>案件描述:</strong><span>给用户就开始撒娇国际快递噶数据给大家就啥都吉萨根据德国撒娇的感觉撒给大家撒给大家仨过的结果撒娇撒娇给大家仨过的计划嘎斯撒大苏打萨达萨达是</span>
                            </Col>
                        </Row>
                    </Card>
                    <Card title="合同审批">
                        <DrawTop />
                    </Card>
                    <Card title="结案信息">
                        <DrawCenter />
                    </Card>
                    <Card title="案件结果">
                        <DrawBottom />
                    </Card>
                </Modal>
            </div>
        );
    }
}

export default DrawModal;




//合同审批
class DrawTop extends Component {
    submits=()=>{
      console.log(this.props.form.getFieldsValue())
    }
    render() {
        const layoutItem = {
            labelCol: {
                span: 4
            },
            wrapperCol: {
                span: 16
            }
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form layout="vertical">
                    <Row>
                        <FormItem {...layoutItem} label='原因'>
                            {
                                getFieldDecorator('textare')(
                                    <TextArea rows={4} />
                                )
                            }
                        </FormItem>
                    </Row>
                    <Row type="flex" justify="end">
                        <Col push={8} span={20}>
                            <FormItem>
                                {getFieldDecorator('radio-group')(
                                    <Radio.Group>
                                        <Radio value="a">item 1</Radio>
                                        <Radio value="b">item 2</Radio>
                                        <Radio value="c">item 3</Radio>
                                    </Radio.Group>
                                )}
                            </FormItem>
                        </Col>
                        <Col push={1} span={4}>
                            <FormItem>
                                <Button onClick={this.submits}>提交</Button>
                            </FormItem>
                        </Col>


                    </Row>
                </Form>
            </div>
        );
    }
}
DrawTop = Form.create({ name: 'yuanyin' })(DrawTop);


//结案信息
class DrawCenter extends Component {
    render() {
        const layoutItem = {
            labelCol: {
                span: 8
            },
            wrapperCol: {
                span: 16
            }
        }
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form layout="inline">
                    <Row>
                        <FormItem label='是否付清'>
                            {getFieldDecorator('isout', { valuePropName: 'checked' })(<Switch />)}
                        </FormItem>
                        <FormItem {...layoutItem} label="已付">
                            {getFieldDecorator('out')(
                                <Input placeholder="已付" />
                            )}
                        </FormItem>
                        <FormItem {...layoutItem} label="未付">
                            {getFieldDecorator('in')(
                                <Input placeholder="未付" />
                            )}
                        </FormItem>
                    </Row>
                    <Row type="flex" justify="end">
                        <FormItem>
                            <Button>结案</Button>
                        </FormItem>
                    </Row>
                </Form>
            </div>
        );
    }
}
DrawCenter = Form.create({ name: 'yuanyins' })(DrawCenter);

//案件结果
class DrawBottom extends Component {
    render() {
        // const layoutItem = {
        //     labelCol: {
        //         span: 4
        //     },
        //     wrapperCol: {
        //         span: 20
        //     }
        // }
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Form layout="inline">
                    <Row>
                        <FormItem label='是否调解'>
                            {getFieldDecorator('isout', { valuePropName: 'checked' })(<Switch />)}
                        </FormItem>
                        <FormItem label="调节通知单">
                            <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
                                <Button>
                                    <Icon type="upload" /> 上传文件
                            </Button>
                            </Upload>
                        </FormItem>
                    </Row>
                    <Row type="flex" justify="end">
                        <FormItem>
                            <Button>保存</Button>
                        </FormItem>
                    </Row>
                </Form>
            </div>
        );
    }
}
DrawBottom = Form.create({ name: 'yuanyinss' })(DrawBottom);