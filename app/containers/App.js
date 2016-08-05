import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Home from '../views/Home';
import Footer from '../components/Footer';
import { bindActionCreators } from 'redux';
import { Router, Route, IndexRoute } from 'react-router';

import * as Actions from '../actions';

import {DevTools} from '../store/configureStore';

class App extends Component{
    render(){
        const {actions, history} = this.props;
        return (
            <div>
                <Header actions={actions} />
                <Router history={history}>
                    <Route path="/" component={Home}>
                        <IndexRoute component={Home} />
                        <Route path="foo" component={Home}/>
                        <Route path="bar" component={Home}/>
                    </Route>
                </Router>
                <Footer actions={actions} />
                <DevTools />
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
