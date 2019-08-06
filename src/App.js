import React from 'react';
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

export default App;
