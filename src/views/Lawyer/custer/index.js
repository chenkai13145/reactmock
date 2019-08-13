import React from 'react';
import {LocaleProvider, Card, Form, Button, Input, Table} from 'antd'
import { connect } from 'react-redux'
import {getcusterlist} from "@/redux/action/custer/custer"
import Alerts from '../../../components/alert/index'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import ModalLeft from '../component/case/modal'
import DrawNodal from '../component/custer/forms'
const FormItem = Form.Item
class LawyerCase extends React.Component {
    constructor(props){
        super(props)
        this.state={
            data:[],
            choose:0,
            selectedRowKeys:[],
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
            loading:false,
            title:''
        }
    }
    params={
        current:"",
        pageSize:""
    }
    componentWillMount(){
    }
    componentWillReceiveProps(nextProps,oldProps){
        let custitem=nextProps.custlist!=undefined?(nextProps.custlist.item_list).toString():''
        let oldcust=oldProps.custlist!=undefined?(oldProps.custlist.item_list).toString():''
         if(custitem!=oldcust&&custitem!=''){
                 this.setState({
                     data:nextProps.custlist.item_list,
                     pagination:{
                        current:nextProps.custlist.page,
                        pageSize:nextProps.custlist.page_size,
                        total:nextProps.custlist.total_count
                     }
                 })
         }
    }
    //数据请求
    requestList(){
        let datas=this.inputVal.props.form.getFieldsValue();
            for(let key in datas){
                this.params[key]=datas[key]===undefined?'':datas[key]
            }
            this.setState({
                choose:0,
                selectedRowKeys:[]
            })
        this.props.getcusterlist(this.params)
    }
    //清空事件
    clear=()=>{
        this.setState({
            choose:0,
            selectedRowKeys:[]
        })
    }
    //分页
    changePagination=(pagination, filters, sorter)=>{
        this.setState({
            pagination:pagination
        })
        this.params.current=pagination.current
        this.params.pageSize=pagination.pageSize
        this.requestList()
        
    }
    onRef = (ref) => {
        this.child = ref
    }
    //编辑
    handleEdit=(record)=>{
        this.setState({visibles:true})
        this.child.params.title="编辑"
        this.child.myName(record)
    }
    //编辑确认
    handleEditOk=()=>{
         this.setState({visibles:false})
         this.requestList()
    }
    componentDidMount(){
        this.requestList()
    }
    //重置
    restVal=()=>{
       this.inputVal.props.form.resetFields()
       this.requestList()
    }
    //查询
    check=()=>{
       this.requestList()
    }
   
    render() {
            const rowSelection={
                type:'checkbox',
                selectedRowKeys:this.state.selectedRowKeys,
                onChange:(selectedRowKeys, selectedRows)=>{
                   this.setState({
                       selectedRowKeys,
                       choose:selectedRowKeys.length
                   })
                }
            }
            const columns = [
                  {
                    title: "序号",
                    dataIndex: " ",
                    key: "rowIndex",
                    width: 60,
                    align: "center",
                    render: function(t, r, index) {
                      return parseInt(index) + 1;
                    }
                  },
                  {
                    title: '客户名称',
                    align:"center",
                    dataIndex: 'caseName'
                   },
                   {
                    title: '性别',
                    align:"center",
                    dataIndex: 'sex',
                    render:(sex)=>{
                       return {
                         '1':'男',
                         '2':'女'
                        }[sex]
                    }
                   },
                   {
                    title: '电话',
                    align:"center",
                    dataIndex: 'phone'
                   },
                   {
                    title: '身份证信息',
                    align:"center",
                    dataIndex: 'cardInfo'
                   },
                   {
                    title: '创建时间',
                    align:"center",
                    dataIndex: 'createTime'
                   },
                  {
                      title: '操作',
                      key: 'operation',
                      width: 100,
                      render: (text, record, index) => (<span><a href="javascript:;" onClick={()=>{this.handleEdit(record)}} style={{color:'green'}}>编辑</a>&nbsp;&nbsp;<a href="javascript:;">详情</a></span>),
                  },
        ];
            const data=[
               {
                   custName:'陈凯',
                   createTime:'2019-0-9',
                   phone:223,
                   cardInfo:"三空间看",
                   sex:'城市里'
               },
               {
                custName:'陈凯',
                createTime:'2019-0-9',
                phone:2232,
                cardInfo:"三空间看",
                sex:'城市里'
            }
           ]
           return (
            <div>
                <Card>
                    <FormValues check={this.check} restVal={this.restVal} wrappedComponentRef={(val)=>{this.inputVal=val}} />
                    <div className="centerBtn">
                        <Button type='dashed' onClick={()=>{
                        this.child.props.form.resetFields()
                        this.child.params.title="新增"
                        this.setState({visibles:true,title:'新增'})
                         }
                        } 
                        icon='plus'>新增</Button>
                        <Button type='default'>批量操作</Button>
                        <Button type='default'>...</Button>
                    </div>
                    <Alerts choose={this.state.choose} clear={this.clear} />
                    {/* 新增模态框 */}
                    <ModalLeft visible={this.state.visible} visibleclose={()=>{this.setState({visible:false})}}/>
                    {/* 跟踪模态框 */}
                    <DrawNodal onRef={this.onRef} handleEditOk={this.handleEditOk}  visible={this.state.visibles} loading={this.state.loading} handleCancel={()=>{this.setState({visibles:false})}}/>
                    <LocaleProvider locale={zh_CN}><Table onChange={this.changePagination} columns={columns} dataSource={this.state.data} pagination={this.state.pagination} rowSelection={rowSelection}/></LocaleProvider>
                </Card>
            </div>
        );
    }
}
const mapStateToProps=(state)=>({
     custlist:state.custer.cust
})
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
                    <Button type="primary" onClick={this.props.check}> 查询</Button>
                    <Button type="primary" onClick={this.props.restVal}> 重置</Button>
                    {
                        this.state.show ? (<a onClick={() => this.setState({ show: false })}>收起</a>) : (<a onClick={() => this.setState({ show: true })}>展开</a>)
                    }
                </FormItem>
            </Form>
        )
    }
}
const FormValues = Form.create({})(FormValue);

export default connect(mapStateToProps,{getcusterlist})(LawyerCase);

