import React from 'react'
import {Card,Button,Table,Form,Select,Modal,message} from 'antd'
import FilterForm from './model/from';
import {getOrder,getOrderinfo,getfinshOrderinfo} from '../../api/order/order'
const FormItem=Form.Item
export default class Orders extends React.Component{
    state={
        pagination:{
             current:1,
             pageSize:10,
             pageSizeOptions:['10', '20', '30', '40'],
             total:30,
             onChange:(page, pageSize)=>{
                this.requestList()
             },
             onShowSizeChange:()=>{
                   
             },
        },
        list:[],
        showvisible:false,
        selectedRowKeys:'',
        selectedRows:[],
        infoorder:{}



    }
    params={
        page:this.state.pagination.current,
        pageSize:this.state.pagination.pageSize
    }
    componentDidMount(){
       this.requestList()
    }
    //初始化数据
    requestList=()=>{
        getOrder(this.params).then(res=>{
            if(res.status=='200' && res.data.code=='0'){
                this.setState({
                    list:res.data.result.item_list.map((item)=>{
                        item.key=item.id
                        return item
                    }),
                    pagination:{
                        current:res.data.result.page,
                        pageSize:res.data.result.page_size,
                        total:res.data.result.total_count
                    }
                })
            }
        })
    }
    //子组件传值
    headerfrom=(val)=>{
        for(let key in val){
            this.params[key]=val[key]
        }
        this.requestList()
    }
    //结束订单
    endfinsh=()=>{
        
        if(!this.state.selectedRows.length){
            Modal.confirm({
                content:"请选择一条订单记录"
            })
            return;
        }
        let id=this.state.selectedRows[0].id
        getOrderinfo(id).then(res=>{
            console.log(res)
            if(res.data.code=='0'){
                this.setState({
                    showvisible:true,
                    infoorder:res.data.result
                })
            }
        })
    }
    //结束订单提交按钮
    handleOk=()=>{
        getfinshOrderinfo()
                       .then(res=>{
                           message.success('订单结束成功')
                           this.setState({
                            showvisible:false
                           })
                           this.requestList()
                       })
    }
    //订单详情
    detail=()=>{
        if(!this.state.selectedRows.length){
            Modal.confirm({
                content:"请选择一条订单记录"
            })
            return;
        }
        let id=this.state.selectedRows[0].id
        window.open('/#/common/order/derails/'+id,'_blank')
    }
    render(){
        const columns=[
            {
                title:'订单编号',
                dataIndex:'order_sn'
            },
            {
                title:'车辆编号',
                dataIndex:'bike_sn'
            },
            {
                title:'用户名',
                dataIndex:'user_name'
            },
            {
                title:'手机号',
                dataIndex:'mobile'
            },
             {
                title:'里程',
                dataIndex:'distance'
            },
             {
                title:'行驶时常',
                dataIndex:'total_time'
            },
            {
                title:'状态',
                dataIndex:'status',
                render(status){
                    return status==1?'可使用':'过期'
                }
            },
            {
                title:'开始时间',
                dataIndex:'start_time'
            },
            {
                title:'结束时间',
                dataIndex:'end_time'
            },
            {
                title:'订单金额',
                dataIndex:'total_fee'
            },
            {
                title:'实付金额',
                dataIndex:'user_pay'
            }
        ]
        const rowSelection={
            type:'radio',
            onChange:(selectedRowKeys, selectedRows)=>{
                this.setState({
                    selectedRowKeys,
                    selectedRows,
                })
            }
        }
        const fromitemLayout={
            labelCol:{span:5},
            wrapperCol:{
                span:19
            }
        }
        
        return(
            <div>
                <Card>
                        <FilterForm orderfn={this.headerfrom}></FilterForm>
                </Card>
                <Card>
                     <Button  type="primary" onClick={this.detail}>订单详情</Button>
                     <Button type="primary" onClick={this.endfinsh}>结束订单</Button>
                </Card>
                <Table
                className="conten_table"
                 columns={columns}
                 pagination={this.state.pagination}
                 dataSource={this.state.list}
                 rowSelection={rowSelection}
                />
                 <Modal
                    title="结束订单"
                    visible={this.state.showvisible}
                    onOk={this.handleOk}
                    onCancel={()=>{
                        this.setState({
                            showvisible:false
                        })
                    }}
                  >
                     <Form>
                    <FormItem label="车辆编号" {...fromitemLayout}>
                    {this.state.infoorder.bike_sn}
                    </FormItem>
                    <FormItem label="剩余电量" {...fromitemLayout}>{this.state.infoorder.battery}%</FormItem>
                    <FormItem label="行程开始时间"{...fromitemLayout}>{this.state.infoorder.start_time}</FormItem>
                    <FormItem label="当前位置" {...fromitemLayout}>{this.state.infoorder.location}</FormItem>
                </Form>
                </Modal>
            </div>
        )
    }
}
