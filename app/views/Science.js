import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
class Sicence extends Component{
    render(){
        return (
            <div>
                And I am Sicence!
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
module.exports = connect(select, actions)(Sicence);
