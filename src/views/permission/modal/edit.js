import React from 'react'
import {Form,Select,Input,Tree} from 'antd'
import menuList from '../../../data/menu/menuConfig'
const { TreeNode } = Tree

const FormItem=Form.Item
const Option=Select.Option
export default class Edits extends React.Component{
    //加载权限列表
    renderMenuTree=(data)=>{
        return data.map(item=>{
            if(item.children && item.children.length>0){
                return <TreeNode {...item}>
                     {this.renderMenuTree(item.children)}
                 </TreeNode>
               }
             return <TreeNode {...item}></TreeNode>
         })
    }
    render(){
        const fromitemLayout={
            labelCol:{
                span:5
            },
            wrapperCol:{
                span:19
            }
        }
        const { getFieldDecorator } = this.props.form;
        const {userInfo}=this.props
        return(
           <div>
               <Form>
                <FormItem label="角色名称" {...fromitemLayout}>  
                      <Input placeholder="Admin" disabled/>  
                </FormItem>
                <FormItem label="状态" {...fromitemLayout}>
                {getFieldDecorator('status',{
                    initialValue:1
                })(
                        <Select style={{width:100}}>
                            <Option value={1}>启用</Option>
                            <Option value={0}>禁用</Option>
                        </Select>
                 )}
                </FormItem>
                <Tree
                   checkable
                   checkedKeys={userInfo}
                   onCheck={(checkedKeys)=>{
                        this.props.patchMenuInfo(checkedKeys)
                   }}
                 >
                     <TreeNode title="平台权限" key="all">
                            {this.renderMenuTree(menuList)}
                     </TreeNode>
                 </Tree>
                </Form>
           </div>
        )
    }
}
Edits=Form.create({})(Edits);