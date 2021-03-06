import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import './index.css';
import store from './redux/store/index'
import Router from './router'
import * as serviceWorker from './serviceWorker';
console.log(store.getState())
ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
