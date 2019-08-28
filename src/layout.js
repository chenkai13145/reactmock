import React from 'react'
import { Row, Col } from 'antd'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { menu } from '@/redux/action/menu/menu'
import Header from './components/header'
import Footer from './components/footer'
import Navleft from './components/navleft'
import './style/common.less'



class Layout extends React.Component {
    // state={
    //     valHeader:sessionStorage.getItem('valHeader') || '首页',
    //     item:'首页'
    // }
    changeMenuVal = (val) => {
        // this.setState({
        //     valHeader:sessionStorage.setItem('valHeader',val),
        //     item:val
        // })
        sessionStorage.setItem('valHeader',val)
        this.props.menu(val)
    }

    render() {
        return (
            <Row className='contair'>
                <Col span={3} className='navleft'>
                    <Navleft layout={this.changeMenuVal} />
                </Col>
                <Col span={21} className="main">
                    <Col className='header'>
                        <Header item={this.props.menus}/>
                    </Col>
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Col className="footer">
                        <Footer />
                    </Col>
                </Col>
            </Row>
        )
    }
}
// Layout.PropTypes={
//     menus: PropTypes.string.isRequired,
//     menu: PropTypes.func.isRequired
// }
const mapStateToProps = (state) => {
    return {
        menus: state.menuReducer.menu
    }
}
export default connect(mapStateToProps, { menu })(Layout)