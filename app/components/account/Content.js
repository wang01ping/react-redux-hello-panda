import React,{Component} from 'react';
import { Login, Signup } from '../../views/account';
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
        content = <Login />
        break;
      case '/login':
        content = <Login />
        break;
      case '/signup':
        content = <Signup />
        break;
    }
    return (
      <div>
        {content}
      </div>
    );
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