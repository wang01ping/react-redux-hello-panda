import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
class Signup extends Component{
    render(){
        return (
            <div>
                And I am Signup!
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
module.exports = connect(select, actions)(Signup);
