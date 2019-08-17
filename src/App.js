import React from 'react';
import {connect} from 'react-redux'
import './App.less';
// import Layouts from './layout';

class App extends React.Component{
  render(){
  return (
    <div>
       {/* <Layouts></Layouts> */}
       {this.props.children}
    </div>
  )
}
}
const mapStateToProps=(state)=>{
  return{
    date:state.loginReducer.date
  }
}
export default connect()(App);
