import React from 'react'
import { Row, Col } from 'antd'
import Header from './components/header'
import Footer from './components/footer'
import Navleft from './components/navleft'
import './style/common.less'



export default class Layout extends React.Component{
    state={
        valHeader:sessionStorage.getItem('valHeader') || '首页',
        item:'首页'
    }
    changeMenuVal=(val)=>{
        this.setState({
            valHeader:sessionStorage.setItem('valHeader',val),
            item:val
        })
    }
    
   render(){
       return(
                <Row className='contair'>
                    <Col span={3} className='navleft'>
                      <Navleft layout={this.changeMenuVal}/>
                    </Col>
                    <Col span={21} className="main">
                         <Col className='header'>
                            <Header item={this.state.item} valHeader={this.state.valHeader}/>
                         </Col>
                         <Row className="content">
                             {this.props.children}
                         </Row>
                         <Col className="footer">
                             <Footer/>
                         </Col>
                    </Col>
                </Row>
       )
   }
}