import React from 'react'
import {Card,Form,Select,Button,Table,Modal,message} from 'antd'
import {formatDate} from '../../until/untils'
import {getRole,RoleCreate,RoleEdit,RoleAuthorlist,RoleAuthor} from '../../api/permission/permission'
import Adds from './modal/add'
import Edits from './modal/edit'
import Authors from './modal/author'

export default class Permissions extends React.Component{
 
        state={
            list:[],
            visible1:false,
            visible2:false,
            visible3:false,
            selectedRowKeys:'',
            selectedRows:[],
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
           patchMenuInfo:[], //所选中的菜单数
           AuthorList:[], //所有用户
           targetKeys:[],//已授权用户
           AuthorInfo:[]

        }
        params={
           page:1,
           pageSize:60
        } 
        componentWillMount(){
           this.requestList()
        }
  
        //获取数据
        requestList=()=>{
         getRole(this.params).then(res=>{
            if(res.data.code=='0'){
               this.setState({
                  list:res.data.result.item_list.map((item,index)=>{
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
        handleOk=()=>{
           let data=this.addForm.props.form.getFieldsValue();
           console.log(data)
           RoleCreate(data).then(res=>{
              if(res.data.code=='0'){
               this.setState({
                  visible1:false
               }) 
               this.requestList()
               this.addForm.props.form.resetFields();
               message.success('创建成功')}
           })
        }
        //权限提交
        handleOkedit=()=>{
         let data=this.userEdits.props.form.getFieldsValue()
         data.role_id=this.state.selectedRows[0].id
         data.menu=this.state.patchMenuInfo
         RoleEdit(data).then(res=>{
            if(res.data.code=='0'){
                message.success('设置成功')
                this.setState({
                  visible2:false,
                  selectedRowKeys:'',
                  selectedRows:[],
                  patchMenuInfo:[]
                })
                this.requestList()
            }
         })
        }
        //用户授权提交
        handleOkAuthor=()=>{
           let role_id=this.state.selectedRows[0].id
           let user_ids=this.state.targetKeys
           let obj={role_id,user_ids}
           RoleAuthor(obj).then(res=>{
              if(res.data.code=='0'){
                 message.success('授权成功')
                 this.setState({///成功后要清空内容
                     selectedRowKeys:'',
                     selectedRows:[],
                     AuthorList:[],
                     targetKeys:[],
                     visible3:false,
                 })
                 this.requestList()
              }
           })
        }
        //创建角色
        addUser=()=>{
              this.setState({
                 visible1:true
              })
        }
        //设置权限
        editUser=()=>{
           if(this.state.selectedRows.length<=0){
              Modal.info({
                 title:"提示",
                 content:'请选择一条数据'
              })
              return;
           }
              this.setState({
                 visible2:true
              })
        }
        //用户授权
        AuthorUser=()=>{
        
           let item=this.state.selectedRows[0]
           console.log(item)
           if(this.state.selectedRows.length<=0){
              Modal.info({
                 title:"提示",
                 content:"请选择一条数据"
              })
              return;
           }
           this.setState({
               visible3:true
           })
           this.getAuthors(item.id)
        }
        getAuthors=(id)=>{
         RoleAuthorlist({id}).then(res=>{
              if(res.data.code=='0'){
                  let dtat=res.data.result
                  const mockData = [];
                  const targetKeys=[]
                  for (let i = 0; i <dtat.length; i++) {
                    mockData.push({
                      key: dtat[i].user_id,
                      title: dtat[i].user_name,
                     });
                     if(dtat[i].status){
                        targetKeys.push(dtat[i].user_id);
                     }
                  }
                  console.log(targetKeys)
                  this.setState({
                     AuthorList:mockData,
                     targetKeys:targetKeys
                  })
               }
           })
        }
        //edit组件中传过来的选中的菜单[menu]
        patchMenuInfo=(val)=>{
             this.setState({
               patchMenuInfo:val
             })
        }
        //author组件中已授权的值[key]
        settargetKeys=(val)=>{
            this.setState({
               targetKeys:val
            })
        }
   
    render(){
         const columns=[
            {
               title:'角色ID',
               dataIndex:'id'
            },
            {
                title:'角色名称',
                dataIndex:'role_name'
             },
             {
                title:'创建时间',
                dataIndex:'create_time',
                render(create_time){
                   return formatDate(create_time)
                }
             },
             {
                title:'使用状态',
                dataIndex:'status'
             },
             {
                title:'授权时间',
                dataIndex:'authorize_time',
                render(authorize_time){
                   return formatDate(authorize_time)
                }
             },
             {
                title:'授权人',
                dataIndex:'authorize_user_name'
             }

        ]
        const rowSelection={
         type:'radio',//单选
         selectedRowKeys:this.state.selectedRowKeys,
         onChange:(selectedRowKeys, selectedRows)=>{
             this.setState({
               selectedRowKeys,
               selectedRows,
               patchMenuInfo:selectedRows[0].menus,
               AuthorInfo:selectedRows[0].role_name 
             })
         }
     }
        return(
            <div>
                <Card>
                    <Button type="primary" onClick={this.addUser}>创建角色</Button>
                    <Button type="dashed" onClick={this.editUser}>设置权限</Button>
                    <Button onClick={this.AuthorUser}>用户授权</Button>
                </Card>
                <Table columns={columns} dataSource={this.state.list} rowSelection={rowSelection}  pagination={this.state.pagination} className="conten_table"
                
                >

                </Table>
               <Modal title="创建角色"
                  visible={this.state.visible1}
                  onOk={this.handleOk}
                  onCancel={()=>{
                     this.setState({
                        visible1:false
                     })
                  }}
               >
                  <Adds wrappedComponentRef={(ins)=>{this.addForm=ins}}></Adds>
               </Modal>
               <Modal title="权限设置"
                  visible={this.state.visible2}
                  onOk={this.handleOkedit}
                  onCancel={()=>{
                     this.setState({
                        visible2:false
                     })
                  }}
                  width={600}
               >
                  <Edits patchMenuInfo={this.patchMenuInfo} userInfo={this.state.patchMenuInfo} wrappedComponentRef={(ins)=>{this.userEdits=ins}}></Edits>
               </Modal>
               <Modal title="用户授权"
                  visible={this.state.visible3}
                  onOk={this.handleOkAuthor}
                  onCancel={()=>{
                     this.setState({ 
                        visible3:false
                     })
                  }}
                  width={700}
               >
                  <Authors settargetKeys={this.settargetKeys} targetKeys={this.state.targetKeys} AuthorInfo={this.state.AuthorInfo}  AuthorList={this.state.AuthorList} wrappedComponentRef={(ins)=>{this.userAuthors=ins}}></Authors>
               </Modal>
            </div>
        )
    }
}