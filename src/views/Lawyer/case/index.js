import React from 'react';
import {LocaleProvider, Card, Form, Button, Input, Table} from 'antd'
import Alerts from '../../../components/alert/index'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import ModalLeft from '../component/case/modal'
import DrawNodal from '../component/case/draw'
import './index.less'
const FormItem = Form.Item
class LawyerCase extends React.Component {
    state={
        choose:1,
        pagination:{  //分页参数
            current:1,
            pageSize:5,
            pageSizeOptions:['5','10','15','20'],
            showQuickJumper:true,
            showSizeChanger:true,
            showTotal:(total, range)=>{
               return '共'+total+'页'
            },
            total:30
        },
        visible:false,//新增开关draw
        visibles:false, //跟踪开关
        loading:false
    }
    //清空事件
    clear=()=>{
        this.setState({
            choose:0
        })
    }
    //分页
    changePagination=(pagination, filters, sorter)=>{
        this.setState({
            pagination:pagination
        })
        
    }
    render() {
            const columns = [
                {
                    title: "序号",
                    dataIndex: "",
                    key: "rowIndex",
                    width: 60,
                    align: "center",
                    customRender: function(t, r, index) {
                      return parseInt(index) + 1;
                    }
                  },
                  {
                    title: "案件编号",
                    align: "center",
                    dataIndex: "caseNumber"
                  },
                  {
                    title: "案件名称",
                    align: "center",
                    dataIndex: "caseName"
                  },
                  {
                    title: "总费用",
                    align: "center",
                    dataIndex: "allfee"
                  },
                  {
                    title: "主办律师",
                    align: "center",
                    dataIndex: "lawyer"
                  },
                  {
                    title: "收案时间",
                    align: "center",
                    dataIndex: "closeTime"
                  },
                  {
                      title: '操作',
                      key: 'operation',
                      width: 100,
                      render: () => (<span><a href="javascript:;" onClick={()=>{this.setState({visibles:true})}} style={{color:'green'}}>跟踪</a>&nbsp;&nbsp;<a href="javascript:;">详情</a></span>),
                  },
        ];
            const data=[
               {
                caseNumber:'陈凯',
                   closeTime:'2019-0-9',
                   allfee:223,
                   lawyer:"三空间看",
                   caseName:'城市里'
               },
               {
                name:'陈凯',
                closeTime:'2019-0-9',
                allfee:2232,
                lawyer:"三空间看",
                layer:'城市里'
            }
           ]
           return (
            <div>
                <Card>
                    <FormValues />
                    <div className="centerBtn">
                        <Button type='dashed' onClick={()=>{this.setState({visible:true})}} icon='plus'>新增</Button>
                        <Button type='default'>批量操作</Button>
                        <Button type='default'>...</Button>
                    </div>
                    <Alerts choose={this.state.choose} clear={this.clear} />
                    {/* 新增模态框 */}
                    <ModalLeft visible={this.state.visible} visibleclose={()=>{this.setState({visible:false})}}/>
                    {/* 跟踪模态框 */}
                    <DrawNodal visible={this.state.visibles} loading={this.state.loading} handleCancel={()=>{this.setState({visibles:false})}}/>
                    <LocaleProvider locale={zh_CN}><Table onChange={this.changePagination} columns={columns} dataSource={data} pagination={this.state.pagination}/></LocaleProvider>
                </Card>
            </div>
        );
    }
}

export default LawyerCase;


class FormValue extends React.Component {
    constructor() {
        super()
        this.state = {
            show: true
        }
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form layout='inline'>
                <FormItem label="被告人">
                    {getFieldDecorator('username', {
                        rules: [
                            {
                                required: true,
                                message: '必填！',
                            },
                        ],
                    })(<Input placeholder="请输入" />)}
                </FormItem>
                <FormItem label="联系电话">
                    {getFieldDecorator('number', {
                        rules: [
                            {
                                required: true,
                                message: '必填！',
                            },
                        ],
                    })(<Input placeholder="请输入电话号码" />)}
                </FormItem>
                {
                    this.state.show ? (<FormItem label="身份证号码">
                        {getFieldDecorator('usernumber', {
                            rules: [
                                {
                                    required: true,
                                    message: '必填！',
                                },
                            ],
                        })(<Input placeholder="请输入身份证号码" />)}
                    </FormItem>) : null
                }
                <FormItem>
                    <Button type="primary" onClick={this.check}> 查询</Button>
                    <Button type="primary" onClick={this.check}> 重置</Button>
                    {
                        this.state.show ? (<a onClick={() => this.setState({ show: false })}>收起</a>) : (<a onClick={() => this.setState({ show: true })}>展开</a>)
                    }
                </FormItem>
            </Form>
        )
    }
}

const FormValues = Form.create({})(FormValue);
