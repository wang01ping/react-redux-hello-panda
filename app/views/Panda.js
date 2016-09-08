import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
class Panda extends Component{
    render(){
        return (
            <div>
                And I am Panda!
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
module.exports = connect(select, actions)(Panda);
