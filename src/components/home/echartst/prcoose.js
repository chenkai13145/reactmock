import React from 'react'
import {Progress} from 'antd'

function ProgressTe(props){
    return(
        <div style={{ display:'flex',justifyContent:'space-around',padding:'4px 0'}}>
            <div style={{whiteSpace:'nowrap',marginRight:'10px'}}>{props.name}</div>
            <Progress strokeLinecap="square" percent={50} format={(percent, successPercent)=>percent+'次'} status="active"></Progress>
        </div>
    )
}

export default ProgressTe
