import React from 'react'
import { Progress } from 'antd'

function ProgressTe(props) {
    return (
        props.type === '线路承运量(辆)' ? <div style={{ display: 'flex', justifyContent: 'space-around', padding: '4px 0' }}>
            <div style={{ width: '150px', marginRight: '10px', overflow: 'hidden',whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>{props.datas.code_name}</div>
            <Progress strokeLinecap="square" percent={props.datas.prn} format={(percent, successPercent) => props.datas.distance + '辆'} status="active"></Progress>
        </div> :
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '4px 0' }}>
                <div style={{ whiteSpace: 'nowrap', width: '150px', marginRight: '10px' }}>{props.datas.code_name}</div>
                <Progress strokeLinecap="square" percent={props.datas.promptness} format={(percent, successPercent) => percent + '%'} status="active"></Progress>
            </div>
    )
}

export default ProgressTe
