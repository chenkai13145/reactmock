import React from 'react'
import {Switch,Route,HashRouter,Redirect}from 'react-router-dom'
import Admin from '../layout.js'
import Login from '../views/login'
import NOfound from '../views/404'
import App from '../App.js'
//admin路由
//home
import Home from '../views/home'
//ui
import Buttons from '../views/ui/buttons'
import Modals from '../views/ui/alert'
import Loadings from '../views/ui/loadings'
import Messages from '../views/ui/messages'
import Notifications from '../views/ui/notification'
import Tabs from '../views/ui/tabs'
//form
import Logins from '../views/form/login'
import Regs from '../views/form/reg'
//table
import Tables from '../views/table/tables'
//city
import Citys from '../views/city'
//order
import Orders from '../views/order'
import Commons from '../common.js'
import Derails from '../views/order/derail'
//user
import Users from '../views/user'
//bikemap
import BikeMaps from '../views/bikemap'
//rich
import Richs from '../views/rich'
//permission
import Permissions from '../views/permission'
//echarts
import Echarts from '../views/echarts'
//律师管理组件
import LawyerHome from '../views/Lawyer/home'
import LawyerTeam from '../views/Lawyer/team'
import LawyerCase from '../views/Lawyer/case'

export default class extends React.Component{
    render(){
        return(
             <HashRouter>
                 <App>
                 <Switch>
                 <Route path="/login" component={Login} ></Route>
                 <Route path="/common" render={()=>
                        <Commons>
                            <Switch>
                              <Route path="/common/order/derails/:id" component={Derails}></Route>
                            </Switch>
                        </Commons>
                 }></Route>
                 <Route path="/" render={()=>
                      <Admin>
                          <Switch>
                              <Route path="/home" component={Home}></Route>                              
                              <Route path="/ui/buttons" component={Buttons}></Route>
                              <Route path="/ui/modals" component={Modals}></Route>
                              <Route path="/ui/loadings" component={Loadings}></Route>
                              <Route path="/ui/messages" component={Messages}></Route>
                              <Route path="/ui/tabs" component={Tabs}></Route>                              
                              <Route path="/ui/notification" component={Notifications}></Route>
                              <Route path="/form/login" component={Logins}></Route>
                              <Route path="/form/reg" component={Regs}></Route>
                              <Route path="/table/basic" component={Tables}></Route>
                              <Route path="/city" component={Citys}></Route>
                              <Route path="/order" component={Orders}></Route>
                              <Route path="/user" component={Users}></Route>
                              <Route path="/bikeMap" component={BikeMaps}></Route>
                              <Route path="/rich" component={Richs}></Route>
                              <Route path="/permission" component={Permissions}></Route>
                              <Route path="/charts/bar" component={Echarts}></Route>
                              <Route path="/lawyer/home" component={LawyerHome}></Route>
                              <Route path='/lawyer/team' component={LawyerTeam}></Route>
                              <Route path='/lawyer/case' component={LawyerCase}></Route>
                              <Redirect to={'/home'}/>
                              <Route component={NOfound}></Route>
                          </Switch>
                      </Admin>
                }></Route>
                 
                 <Route component={NOfound}></Route>
                 </Switch>
                 </App>
             </HashRouter>
        )
    }
}