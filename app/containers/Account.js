import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/account/Header';
import Content from '../components/account/Content';
import Footer from '../components/account/Footer';
import { bindActionCreators } from 'redux';
import { QueueAnim, BackTop } from 'antd';
import * as Actions from '../actions';
import styles from '../css/index.css';

class App extends Component{
  constructor(props) {
    super(props);
  }
  
  render(){
    const {actions, history} = this.props;
    return (
      <div className={styles.pageWrapper}>
        <Header actions={actions} />
        <div className={styles.mainWrapper}>
          <Content actions={actions}/>
        </div>
        <Footer actions={actions} />
        <BackTop />
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
