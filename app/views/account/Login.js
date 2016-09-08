import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
class Login extends Component{
    render(){
        return (
            <div>
                And I am Login!
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
       
    };
}
module.exports = connect(select, actions)(Login);
