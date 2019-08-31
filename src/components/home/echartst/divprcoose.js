import React from 'react'
import {Progress} from 'antd'

function DivProgressTe(props){
    return(
        <div style={{padding:'4px 0'}}>
            <div style={{whiteSpace:'nowrap',marginLeft:'30px'}}>{props.datas.carnum}({props.datas.code_name})</div>
            <div  style={{ display:'flex',justifyContent:'space-around'}}>
            <strong style={{width:'20px',height:'20px',backgroundColor:'#000',color: 'white',marginRight:'10px',textAlign:'center',lineHeight:'20px',borderRadius:'50%',display:'block'}}>{props.datas.id}</strong>
            <Progress strokeLinecap="square" percent={props.datas.prence} format={()=>props.datas.num+'次'} status="active"></Progress>
            </div>
        </div>
    )
}

export default DivProgressTe
