import React from 'react'
import { Card, Form, Input, Button, Row, Col, Table } from 'antd'
import './index.less'
const FormItem = Form.Item
export default class LawyerTeam extends React.Component {
    constructor(props){
        super()
        this.state={
            data: [
                {
                    name:'12',
                    type:'3',
                    number:'2',
                },
                {
                    name:'1',
                    type:'3',
                    number:'3',
                },
                {
                    name:'3',
                    type:'4',
                    number:'6',
                },
            ]
        }
    }
    //删除操作
    delete=(val)=>{
          this.state.data.splice(val,1)
          this.setState({
              data:this.state.data
          })
    }
    render() {
        const { getFieldDecorator } = this.props.form
        const columns = [
            {
                title: '成员',
                dataIndex: 'name',
                key: '1',
                width: 150,
            },
            {
                title: '人员类别',
                dataIndex: 'type',
                key: '2',
                width: 150,
            },
            { title: '联系电话', dataIndex: 'number', key: '8' },
            {
                title: '操作',
                key: 'operation',
                width: 100,
                render: (text, record, index) => <a onClick={()=>this.delete(index)}>删除</a>,
            },
        ]
        
        return (
            <div>
                <Card title='团队信息'>
                    <Form layout='vertical'>
                        <Row>
                            <Col span={8}>
                                <FormItem label="律所名称" wrapperCol={{ span: 6 }}>
                                    {getFieldDecorator('name', {
                                        rules: [{ required: true, message: '不能为空' }]
                                    })(<Input style={{ width: 300 }} placeholder="请输入律所名称" />)}
                                </FormItem>
                            </Col>
                            <Col span={2} style={{ position: 'relative', height: 92 }}>
                                <FormItem style={{ position: 'absolute', bottom: 0, }}>
                                    <Button>保存</Button>
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Card>
                <Card title='团队成员' style={{ position: 'relative',paddingBottom:30 }} extra={<Button icon="plus">新增</Button>}>
                    <Table columns={columns} dataSource={this.state.data} pagination={false}/>
                    <Button className="btns">保存</Button>
                </Card>

            </div>
        )
    }
}
LawyerTeam = Form.create({ name: 'dynamic_rule' })(LawyerTeam);