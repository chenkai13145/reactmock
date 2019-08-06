import React from 'react'
import {Button,Card,Icon,Radio} from 'antd'
import './index.less'
const ButtonGroup = Button.Group;
export default class Buttons extends React.Component{
    state={
        loading:true,
        size:'small'
    }
    handcoseloading(){
        
        this.setState({
            loading:!this.state.loading
        })
    }
    handleSizeChange=(e)=>{
           this.setState({
               size:e.target.value
           })
    }
    render(){
        return(
            <div>
                <Card style={{marginBottom:20}} title="基础按钮" >
                  <Button type="primary">kai antd</Button>
                  <Button>kai antd</Button>
                  <Button type="dashed">kai antd</Button>
                  <Button type="danger">kai antd</Button>
                </Card>
                <Card style={{marginBottom:20}} title="图行按钮"  >
                  <Button icon="plus">创建</Button>
                  <Button icon="edit">编辑</Button>
                  <Button icon="delete">删除</Button>
                  <Button icon="search" shape="circle"></Button>
                  <Button type="primary" icon="download">下载</Button>
                  <Button type="primary" icon="search">搜素</Button>
                </Card>
                <Card style={{marginBottom:20}} title="Loading按钮"  >
                  <Button type="primary" loading={this.state.loading} >确定</Button>
                  <Button type="primary" shape="circle" loading={this.state.loading} ></Button>
                  <Button loading={this.state.loading}>点击加载</Button>
                  <Button shape="circle" loading={this.state.loading}></Button>
                  <Button onClick={this.handcoseloading.bind(this)}>{this.state.loading?'关闭':'加载'}</Button>
                </Card>
                <Card style={{marginBottom:20}} title="按钮组" >
                <ButtonGroup>
                     <Button type="primary" style={{margin:0}}>
                     <Icon type="left" />返回
                     </Button>
                     <Button type="primary" style={{margin:0}}>
                         前进<Icon type="right" />
                     </Button>
                </ButtonGroup> 
                </Card>
                <Card style={{marginBottom:20}} title="按钮尺寸" >
                 <Radio.Group value={this.state.size} onChange={this.handleSizeChange}>
                     <Radio value="large">大</Radio>
                     <Radio value="default">中</Radio>
                     <Radio value="small">小</Radio>
                 </Radio.Group>
                 <Button size={this.state.size} type="primary">kai antd</Button>
                  <Button size={this.state.size}>kai antd</Button>
                  <Button size={this.state.size} type="dashed">kai antd</Button>
                  <Button size={this.state.size} type="danger">kai antd</Button>
                </Card>
            </div>
        )
    }
}