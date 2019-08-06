import React from 'react'
import {Form,Select,Input,Transfer, Switch } from 'antd'
const FormItem=Form.Item
export default class Authors extends React.Component{
    filterOption = (inputValue, option) => {
        return option.title.indexOf(inputValue)!=-1
    }
    handleChange = targetKeys => {
        this.props.settargetKeys(targetKeys)
     };
    render(){
        const fromitemLayout={
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:19
            }
        }
      const {AuthorInfo}=this.props
        return(
           <div>
               <Form>
                    <FormItem {...fromitemLayout} label='角色名称' >
                        <Input placeholder={AuthorInfo} disabled/>
                    </FormItem>
                    <FormItem {...fromitemLayout} label='选择用户' >
                        <Transfer
                          dataSource={this.props.AuthorList}
                          titles={['全部', '已授权']}
                          targetKeys={this.props.targetKeys}
                          render={item => item.title}
                          filterOption={this.filterOption}
                          showSearch
                          onChange={this.handleChange}
                        >

                        </Transfer>
                    </FormItem>
               </Form>
           </div>
        )
    }
}
