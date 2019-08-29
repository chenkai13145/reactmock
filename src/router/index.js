import React from 'react'
import {Switch,Route,HashRouter,Redirect}from 'react-router-dom'
import PrivateRoute from '@/components/common/proviteRouter'
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
import LawyerCuster from '../views/Lawyer/custer'

//流程图
import FlowSheet from '../views/flowsheet'


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
                              <PrivateRoute path="/common/order/derails/:id" component={Derails}></PrivateRoute>
                            </Switch>
                        </Commons>
                 }></Route>
                 <Route path="/" render={()=>
                      <Admin>
                          <Switch>
                              <PrivateRoute path="/home" component={Home}></PrivateRoute>                              
                              <PrivateRoute path="/ui/buttons" component={Buttons}></PrivateRoute>
                              <PrivateRoute path="/ui/modals" component={Modals}></PrivateRoute>
                              <PrivateRoute path="/ui/loadings" component={Loadings}></PrivateRoute>
                              <PrivateRoute path="/ui/messages" component={Messages}></PrivateRoute>
                              <PrivateRoute path="/ui/tabs" component={Tabs}></PrivateRoute>                              
                              <PrivateRoute path="/ui/notification" component={Notifications}></PrivateRoute>
                              <PrivateRoute path="/form/login" component={Logins}></PrivateRoute>
                              <PrivateRoute path="/form/reg" component={Regs}></PrivateRoute>
                              <PrivateRoute path="/table/basic" component={Tables}></PrivateRoute>
                              <PrivateRoute path="/city" component={Citys}></PrivateRoute>
                              <PrivateRoute path="/order" component={Orders}></PrivateRoute>
                              <PrivateRoute path="/user" component={Users}></PrivateRoute>
                              <PrivateRoute path="/bikeMap" component={BikeMaps}></PrivateRoute>
                              <PrivateRoute path="/rich" component={Richs}></PrivateRoute>
                              <PrivateRoute path="/permission" component={Permissions}></PrivateRoute>
                              <PrivateRoute path="/charts/bar" component={Echarts}></PrivateRoute>
                              <PrivateRoute path="/lawyer/home" component={LawyerHome}></PrivateRoute>
                              <PrivateRoute path='/lawyer/team' component={LawyerTeam}></PrivateRoute>
                              <PrivateRoute path='/lawyer/case' component={LawyerCase}></PrivateRoute>
                              <PrivateRoute path='/lawyer/custer' component={LawyerCuster}></PrivateRoute>
                              <PrivateRoute path='/flowsheet' component={FlowSheet}></PrivateRoute>
                              <Redirect to={'/home'}/>
                              <PrivateRoute component={NOfound}></PrivateRoute>
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