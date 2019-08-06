import React from 'react'
import { LocaleProvider,Card,Modal, Form, Input, DatePicker,Button,Table,message } from 'antd'
import {getUserlist} from '../../api/user/user'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import FilterForm from './modal/form'
import {addUser} from '../../api/user/user'

moment.locale('zh-cn');
const FormItem = Form.Item

export default class Users extends React.Component {
    state={
        userList:[],
        pagination:{
            total:50,//总数
            current:2,//当前页
            pageSize:10,//每页条数
            showTotal:(total, range)=>{
                 return'共'+total+'条'
            },
            showSizeChanger:true,
            onShowSizeChange:(current, pageSize)=>{
                this.params.pageSize=pageSize
                    this.requestList()
            },
            onChange:(page, pageSize)=>{
             this.params.page=page
             this.params.pageSize=pageSize
                this.requestList()
             },
        },
        selectedRowKeys:"",
        selectedRows:[],
        title:'',
        visible:false,
        type:'',
        footer:null



    }
   
    params={
        page:1,
        pageSize:10
    }
    componentWillMount(){
        this.requestList()
    }
    infoAction=(type)=>{
        switch(type){
            case 'add':
              this.setState({
                visible:true,
                title:'创建员工',
                type:type,
                selectedRows:[],
                selectedRowKeys:''
              })
            break;
            case 'edit':
           
            if(this.state.selectedRows.length=='0'){
                Modal.info({
                    title:'提示',
                    content:'请选择一个用户'
                })
                return;
            }
            this.setState({
                visible:true,
                title:'编辑员工',
                type:type
              })
              console.log(this.state.selectedRows)
            break;
            case 'info':
           
            if(this.state.selectedRows.length=='0'){
                Modal.info({
                    title:'提示',
                    content:'请选择一个用户'
                })
                return;
            }
            this.setState({
                visible:true,
                title:'员工详情',
                type:type
              })
            break;
            case 'delete':
            if(this.state.selectedRows.length=='0'){
                Modal.info({
                    title:'提示',
                    content:'请选择一个用户'
                })
                return;
            }
            let _that=this
            let id=this.state.selectedRows[0].id
            let url='user/delete/'
            let obj={
                id,
                url,
            }
           let off=Modal.confirm({
                title:'确认删除',
                onOk(){
                    addUser(obj).then(res=>{
                        if(res.data.code=='0'){
                            message.success('删除成功')
                        }
                        _that.requestList()
                    })
                }
            })
            
            break;
        }
    }
    handOk=()=>{
        let type=this.state.type
        let data=this.userForm.props.form.getFieldsValue();
        let obj={datas:data}
        switch(type){
            case 'add':
            obj.url="user/add"
            addUser(obj).then(res=>{
                if(res.data.code=='0'){
                    this.setState({
                        visible:false
                    })
                    message.success('创建成功')
                    this.userForm.props.form.resetFields();
                    this.requestList()
                }
            })
            break;
            case 'edit':
            obj.url="user/edit"
            addUser(obj).then(res=>{
                if(res.data.code=='0'){
                    this.setState({
                        visible:false
                    })
                    message.success('编辑成功')
                    this.requestList()
                }
            })

        }
       
       
        
    }
    //查询
    userFind=()=>{
        this.props.form.validateFields((err, values) => {
            if (!err) {
                for(var key in values){
                    this.params[key]=values[key]
                }
                this.requestList()
            }
          });
    }
    //获取员工列表
    requestList=()=>{
        getUserlist(this.params).then(res=>{
            console.log(res)
            if(res.status=='200'&&res.data.code=="0"){
              this.setState({
                  userList:res.data.result.list.map((item,index)=>{
                      item.key=index
                      return item
                  }),
                  pagination:{
                    total:res.data.result.total_count,//总数
                    current:res.data.result.page,//当前页
                    pageSize:res.data.result.page_size,//每页条数
                  }
              })
            }
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        const columns=[
            {
                title:'id',
                dataIndex:'id'
            },
            {
                title:'用户民',
                dataIndex:'username'
            },
            {
                title:'性别',
                dataIndex:'sex',
                render(sex){
                        return sex==1?'男':'女'
                }
            },
            {
                title:'状态',
                dataIndex:'state',
                render(state){
                    return({
                        '1':'良好',
                        '2':'差',
                        '3':'不合格',
                        '4':'优秀',
                        '5':'满分'
                    }[state])
                }
            },
            {
                title:'爱好',
                dataIndex:'interest',
                render(interest){
                    return('喜欢'+{
                        '1':'打篮球',
                        '2':'云毛球',
                        '3':'兵兵球',
                        '4':'排球',
                        '5':'游戏',
                        '6':'跑步',
                        '7':'跳远',
                        '8':'散步',
                        '9':'游泳'
                    }[interest])
                }
            },
            {
                title:'生日',
                dataIndex:'birthday'
            },
            {
                title:'联系地址',
                dataIndex:'address'
            },
            {
                title:'早期时间',
                dataIndex:'time'
            },
        ]
        const rowSelection={
            selectedRowKeys:this.state.selectedRowKeys,
            type:'radio',
            onChange:(selectedRowKeys, selectedRows)=>{
                    this.setState({
                        selectedRows,
                        selectedRowKeys
                    })
            }
        }
        let footer={}
        if(this.state.type=='info'){
            footer={
                footer:null
            }
        }
        return (
            <div>
                <Card>
                    <Form layout='inline'>
                        <FormItem>
                            {getFieldDecorator('user_name')(
                                <Input placeholder="请输入用户名" />,
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('user_mobile')(
                                <Input placeholder="请输入手机号" />,
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('date-picker')(<DatePicker placeholder="请选择时间" />)}
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.userFind} htmlType="submit" className="login-form-button">查询</Button>
                            <Button onClick={()=>{
                                this.props.form.resetFields();
                            }}>重置</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card>
                    <Button icon="plus" onClick={()=>this.infoAction('add')}>创建员工</Button>
                    <Button icon="edit" onClick={()=>this.infoAction('edit')}>编辑员工</Button>
                    <Button onClick={()=>this.infoAction('info')}>员工详情</Button>
                    <Button icon="delete" onClick={()=>this.infoAction('delete')}>删除</Button>
                </Card>
              <LocaleProvider locale={zh_CN}><Table className='conten_table' columns={columns} dataSource={this.state.userList}
                  pagination={this.state.pagination}
                  rowSelection={rowSelection}
                  />
                  </LocaleProvider> 
                  <Modal
                   title={this.state.title}
                   visible={this.state.visible}
                   onOk={this.handOk}
                   onCancel={()=>{
                    this.setState({
                        visible:false
                    }) 
                 }}
                {...footer}
                 >
                   <FilterForm userinfo={this.state.selectedRows[0]} wrappedComponentRef={(ins)=>{this.userForm=ins}}></FilterForm>
                </Modal>
            </div>
           
            
            )
    }
} 

Users = Form.create({})(Users);