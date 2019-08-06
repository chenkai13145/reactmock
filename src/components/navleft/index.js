import React from 'react'
import menuList from '../../data/menu/menuConfig'
import { Menu, Icon } from 'antd';
import {NavLink} from 'react-router-dom'
import './index.less'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


export default class Navleft extends React.Component {
    state = {
        menuLists: [],
        key:'/home'
    }
    componentWillMount() {
        this.setState({
            menuLists: this.menuListfn(menuList)
        }) 
    }
    Headertitle=(item)=>{
        this.props.layout(item.title)
    }
    // 菜单循环
    menuListfn=(data)=>{
      return data.map(item => {
            if(item.children) {
                return (<SubMenu key={item.key} title={item.title}>{this.menuListfn(item.children)}</SubMenu>)
            }
            return <Menu.Item key={item.key}>
                      <NavLink to={item.key} onClick={()=>this.Headertitle(item)}>{item.title}</NavLink>
                   </Menu.Item>
        })
       
    }
    render() {
        let url=window.location.hash.replace('#','').split('?')[0]
        return (
            <div className="navleft">
            <div className='logo'>
                 <span><img src="/assets/logo-ant.svg"/></span>
                 <span>antd</span>
            </div>
            <Menu selectedKeys={[url]} theme="dark" mode="vertical">
                {this.state.menuLists}
            </Menu>
            </div>
        )
    }
}