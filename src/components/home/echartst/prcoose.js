import React from 'react'
import {Progress} from 'antd'

function ProgressTe(props){
    return(
        <div style={{display:'flex',justifyContent:'space-around',padding:'4px 0'}}>
            <div style={{whiteSpace:'nowrap',marginRight:'10px'}}>商铁物流</div>
            <Progress Progress percent={50} status="active"></Progress>
        </div>
    )
}

export default ProgressTe
