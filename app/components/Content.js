import React,{Component} from 'react';
import { Home, Panda, Science } from '../views';
import { connect } from 'react-redux';

class Content extends Component{
  constructor(props) {
    super(props);
    this.state = {
      pathname: '/',
    }
  }
  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.pathname !== this.props.pathname) {
      this.setState({
        pathname: nextProps.pathname,
      });
    }
  }
  render(){
    var content;
    switch(this.state.pathname) {
      case '/':
        content = <Home />
        break;
      case '/panda':
        content = <Panda />
        break;
      case '/science':
        content = <Science />
        break;
    }
    return content;
  }
};
function select(store){
  return {
    pathname: store.routing.locationBeforeTransitions.pathname,
  };
}
function actions(dispatch){
  return{
     
  };
}

module.exports = connect(select, actions)(Content);