import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Content from '../components/Content';
import { bindActionCreators } from 'redux';
import { QueueAnim, BackTop } from 'antd';
import * as Actions from '../actions';
import '../css/index.css';

class App extends Component{
  constructor(props) {
    super(props);
  }
  
  render(){
    const {actions, history} = this.props;
    return (
      <div className="pageWrapper">
        <Header actions={actions} />
        <Content actions={actions}/>
      </div>
    );
  }
}

function select(store){
    return {
        
    };
}
function actions(dispatch){
    return{
       actions : bindActionCreators(Actions, dispatch) 
    };
}
module.exports = connect(select, actions)(App);
