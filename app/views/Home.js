import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
class Home extends Component{
    render(){
        return (
            <div>
                "jjjj"
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
module.exports = connect(select, actions)(Home);
