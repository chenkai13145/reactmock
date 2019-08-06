import React from 'react'
import { Table, Divider, Tag,Card } from 'antd';
import { basic } from '../../../api/axios.js'
export default class Tables extends React.Component{
  state={
    data2:[],
    selectedRowKeys:[],
    rowdata:{},
    selectedRowKeys2:[],
    rowdata2:[]
   
  }
  componentWillMount(){
    basic().then(res=>{
      if(res.status==200 && res.data.code==0){
        res.data.result.list.map((item,index)=>{
          item.key=index
        })
        this.setState({
          data2:res.data.result.list
        })
      }
      console.log(res)})
  }
  //单选
  onRowClick=(record,index)=>{
      this.setState({
        selectedRowKeys:[index],
        rowdata:record
      },function(){
        console.log(this.state)
      })
      
  }
  //复选
  check=(rr)=>{
    console.log(rr)
   this.setState({
    selectedRowKeys:this.state.selectedRowKeys
   })
  }
    render(){
         const rowSelection={
          type:'radio',
          selectedRowKeys:this.state.selectedRowKeys,
         
        }
        const rowSelection2={
          type:'checkbox',
          selectedRowKeys:this.state.selectedRowKeys2,
          onChange:(selectedRowKeys, selectedRows)=>{
               
                 this.setState({
                     rowdata2:selectedRows,
                     selectedRowKeys2:selectedRowKeys
                },function(){
                  console.log(this.state)
                })
          }
        }
        const data = [{
            id: '1',
            userName: '陈模块',
            sex: 32,
            state:'新技术',
            interest:'打篮球',
            address: '天津',
            birthday:'1998-8-9',
            time:"19:5:6",
          },
          {
            id: '2',
            userName: '陈模块',
            sex: 32,
            state:'新技术',
            interest:'打篮球',
            address: '天津',
            birthday:'1998-8-9',
            time:"19:5:6",
          },
          {
            id: '3',
            userName: '陈模块',
            sex: 32,
            state:'新技术',
            interest:'打篮球',
            address: '天津',
            birthday:'1998-8-9',
            time:"19:5:6",
          }]
          data.map((item,index)=>{
            item.key=index
          })
          const columns = [{
            title: 'id',
            dataIndex: 'id'
          },
          {
            title: '姓名',
            dataIndex: 'userName'
          },
          {
            title: '性别',
            dataIndex: 'sex',
            render(sex){
              return  sex==1?'男':'女'
            }
          },
          {
            title: '状态',
            dataIndex: 'state'
          },
          {
            title: '爱好',
            dataIndex: 'interest'
          },
          {
            title: '生日',
            dataIndex: 'birthday'
          },
          {
            title: '地址',
            dataIndex: 'address'
          },
          {
            title: '起床时间',
            dataIndex: 'time'
          },]
        return(
            <div>
                <Card style={{marginBottom:'20px'}} title="基础表格">
                   <Table columns={columns} pagination={false} dataSource={data}/>
                </Card>
                <Card style={{marginBottom:'20px'}} title="动态渲染表格">
                   <Table columns={columns} pagination={false} dataSource={this.state.data2}/>
                </Card>
                <Card style={{marginBottom:'20px'}} title="动态渲染表格-单选">
                   <Table columns={columns}
                    pagination={false} 
                    rowSelection={rowSelection}
                    dataSource={this.state.data2}
                    onRow={(record,index) => {
                      return {
                        onClick: () => {
                          this.onRowClick(record,index)
                        },       // 点击行
                       
                      };
                    }}
                    />
                </Card>
                <Card style={{marginBottom:'20px'}} title="动态渲染表格-多选">
                   <Table rowSelection={rowSelection2}
                     columns={columns} 
                     pagination={false}
                     dataSource={this.state.data2}
                   
                     />
                </Card>
                
            </div>
        )
    }
}