import React from 'react'
import {connect} from 'react-redux'
import {outLogin} from '@/redux/action/login/login'
import './index.less'
import axios from '../../until/jsonp.js'
export default class Header extends React.Component {
    state={
        name:"到访",
        dtime:'',
        wether:"天气晴朗"
    }
    componentWillMount(){
      setInterval(()=>{
        var dt=''
        let time=new Date()
         dt=`${time.getFullYear()}-${(time.getMonth()+1).toString().padStart(2,'0')}-${time.getDay().toString().padStart(2,'0')} ${time.getHours().toString().padStart(2,'0')}:${time.getMinutes().toString().padStart(2,'0')}:${time.getSeconds().toString().padStart(2,'0')}`
        this.setState({
            dtime:dt
        })
        },1000)
      this.weatherfn(); 
   }
    weatherfn(){
        let city='北京';
        axios.jsonp({ 
            url:'http://api.map.baidu.com/telematics/v3/weather?location='+encodeURIComponent(city)+'&output=json&ak=hlyVsmlBI879lfO0tkYCt5F8IlUaTk7i'
        }).then(res=>this.setState({wether:res}))
    }
    componentWillReceiveProps(props){
          console.log(props)
    }
    render() {
        const menuType=this.props.menuType
        return (
            <div className='header'>
                <div className="top">
                    <div style={{cursor: 'pointer'}} onClick={()=>{
                        localStorage.removeItem('token')
                        window.location.reload()
                    }}>退出</div>
                    <div>
                        <span>欢迎，</span>
                        <span>{this.state.name}</span>
                    </div>
                </div>
                {
                    menuType?'':<div className="bottom">
                    <div>
                        {this.props.item}
                    </div>
                    <div>
                        <span>{this.state.dtime}</span>
                        <span style={{color:'red'}}>电话:13981722057</span>
                        <span style={{color:'red'}}>邮箱:1263455889@qq.com</span>
                        {/* <span>{this.state.wether}</span> */}
                    </div>
               </div>
                }
            </div>
        )
    }
}