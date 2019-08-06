import React from 'react'
import {Col,Row} from 'antd'
import Headers from './components/header'

export default class Commons extends React.Component{
    render(){
        return(
            <div>
                <Row className="simple_page">
                    <Headers menuType="second"/>
                </Row>
                <Row>
                    {this.props.children}
                </Row>
            </div>
        )
    }
}