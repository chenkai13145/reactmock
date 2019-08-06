import React from 'react'
import {Card,Button,Form,Select,message,Modal,Icon,Table,Input,Checkbox} from 'antd'
import FilterForm from './model/from'
import {city,opencity} from '../../api/city/city'
import '../../style/common.less'
const Option = Select.Option;
export default class Citys extends React.Component{
    params={
        page:2,
        city_id: '',
        mode: '',
        op_mode: '',
        ops_mode: '',
        pageSize:10
    }
    state={
        list:[],
        openShow:false,
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
                    this.datainit()
            },
            onChange:(page, pageSize)=>{
             this.params.page=page
             this.params.pageSize=pageSize
                this.datainit()
             },
        }
    }
    componentWillMount(){
       this.datainit();
    }
    //数据初始化
    datainit=()=>{
        city(this.params).then(res=>{
            console.log(res)
            if(res.data.code==0){
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
    //子组件调用父子间方法
    subMits=(val)=>{
        for(let key in val){
            this.params[key]=val[key]
         }
        this.datainit()
    }
    //开通城市
    handOpenCity=()=>{
        this.setState({
            openShow:true
        })
    }
    //提交
    handleOk=(e)=>{
         let citydata=this.cityFrom.props.form.getFieldsValue();
         opencity(citydata)
                .then((res)=>{
                    message.success(res.data.result);
                    this.setState({
                        openShow:false
                    })
                    this.datainit()
                })
                .catch(res=>{
                    message.error('失败');
                })
    }
    render(){
        const columns=[
            {
                title:'城市ID',
                dataIndex:'id'
            },
            {
                title:'城市名称',
                dataIndex:'name'
            },
            {
                title:'用车模式',
                dataIndex:'mode',
                render(mode){
                    return mode==1?'指定停车点模式':'禁停区模式'
                }
            },
            {
                title:'运营模式',
                dataIndex:'op_mode',
                render(op_mode){
                    return op_mode==1?'自营':'加盟'
                }
            },
            {
                title:'授权加盟商',
                dataIndex:'franchisee_name'
            },
            {
                title:'城市管理员',
                dataIndex:'city_admins',
                render(city_admins){
                    return city_admins.map(item=>{
                        return item.user_name
                    }).join(',')
                }
            },
            {
                title:'城市开通时间',
                dataIndex:'open_time'
            },
            {
                title:'操作时间',
                dataIndex:'update_time',
                render(update_time){
                    let time=new Date(update_time)
                    return `${time.getFullYear()}-${(time.getMonth()+1).toString().padStart(2,'0')}-${time.getDay().toString().padStart(2,'0')} ${time.getHours().toString().padStart(2,'0')}:${time.getMinutes().toString().padStart(2,'0')}:${time.getSeconds().toString().padStart(2,'0')}`
                }
            },
            {
                title:'操作人',
                dataIndex:'sys_user_name'
            },
        ]
        const dataSource=[
            {

            }
        ]
        return(
            <div>
                <Card>
                   <FilterForm subMit={this.subMits}></FilterForm>
                </Card>
                <Card style={{marginTop:'20px'}}>
                    <Button type="primary" onClick={this.handOpenCity}>开通城市</Button>
                </Card>
                <Table columns={columns} dataSource={this.state.list} pagination={this.state.pagination} className="conten_table">

                </Table>
                <Modal
                  title="开通城市"
                 visible={this.state.openShow}
                 onOk={this.handleOk}
                 onCancel={()=>{
                     this.setState({
                         openShow:false
                     })
                 }}
                  >
                <FilterFromOpens wrappedComponentRef={(ins=>{this.cityFrom=ins})}></FilterFromOpens>
                </Modal>
            </div>
        )
    }
}
class FilterFromOpen extends React.Component{
    render(){
        const { getFieldDecorator } = this.props.form;
        const formItemLayout={
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:10
            }
        }
        return(
              <Form onSubmit={this.handleSubmit} style={{textAlign:'center'}}>
        <Form.Item label="城市" {...formItemLayout}>
          {getFieldDecorator('city_id', {
            initialValue:'1'
          })(
            <Select  style={{ width: 220 }} >
            
                <Option value="1">成都市</Option>
                <Option value="2">天京市</Option>
            </Select>
          )}
        </Form.Item>
        <Form.Item label="运营模式" {...formItemLayout}>
        {getFieldDecorator('op_mode', {
            initialValue:'1'
        })(
          <Select  style={{ width: 220 }} >
          
                <Option value="1">自营</Option>
                <Option value="2">民营</Option>
          </Select>
        )}
        </Form.Item>
        <Form.Item label="用车模式" {...formItemLayout}>
        {getFieldDecorator('use_mode', {
             initialValue:'1'
        })(
          <Select style={{ width: 220 }} >
            
                <Option value="1">禁区</Option>
                <Option value="2">停车区</Option>
          </Select>
        )}
        </Form.Item>
      </Form>
          
        )
    }
}
const FilterFromOpens = Form.create({})(FilterFromOpen);