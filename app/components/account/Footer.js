import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
class Footer extends Component{
    render(){
        return (
            <div>
                And I am Header!
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
module.exports = connect(select, actions)(Footer);
