import { Menu, Icon, Select, Button } from 'antd';
import React from 'react';
import TweenOne from 'rc-tween-one';
import { Link, browserHistory } from 'react-router'
import 'antd/dist/antd.css';
import  '../less/header.less';
import { connect } from 'react-redux';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Option = Select.Option;

let timeout;
let currentValue;

function fetch(value, callback) {
  if (timeout) {
    clearTimeout(timeout);
    timeout = null;
  }
  currentValue = value;

  function fake() {
    const data = [];
    data.push({
      value: "1",
      text: "0",
    });
    callback(data);
  }

  timeout = setTimeout(fake, 300);
}
const Header = React.createClass({
  getInitialState() {
    return {
      current: this.props.pathname,
      data: [],
      value: '',
      focus: false,
    };
  },
  handleClick(e) {
    this.setState({
      current: e.key,
    });
  },
  handleChange(value) {
    this.setState({ value });
    fetch(value, (data) => this.setState({ data }));
  },
  handleFocusBlur(e) {
    this.setState({
      focus: e.target === document.activeElement,
    });
  },
  render() {
    const options = this.state.data.map(d => <Option key={d.value}>{d.text}</Option>);
    return (
      <TweenOne component="header"
        id="header"
        animation={{ opacity: 0, type: 'from' }}
        className='clearfix'
      >
        <div className='rowFlex'>
          <TweenOne className='logoView'
            animation={{ x: -30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
          >
            <Link id="logo" to="/">
              <img alt="logo" src={require('../img/logo.png')} />
              <span>Hello Panda</span>
            </Link>
          </TweenOne>
          <TweenOne className='searchInput'
            animation={{ x: -30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
          >
            <div id="search-box">
              <Select combobox
                value={this.state.value}
                notFoundContent=""
                defaultActiveFirstOption={false}
                showArrow={false}
                filterOption={false}
                style={{ width: '100%', border: 0, }}
                onFocus={this.handleFocusBlur}
                onBlur={this.handleFocusBlur}
                placeholder={<span>&nbsp;&nbsp;<Icon type="search" />&nbsp;&nbsp;搜索</span>}
                onChange={this.handleChange}>
                {options}
              </Select>
            </div>
          </TweenOne>
          <TweenOne className='menu'
            animation={{ x: 30, delay: 100, type: 'from', ease: 'easeOutQuad' }}
          >
            <Menu onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              id="nav"
            >
              <Menu.Item key="/">
                <Link to="/"><Icon type="home" />首页</Link>
              </Menu.Item>
              <Menu.Item key="/panda">
                <Link to="/panda"><Icon type="question-circle-o" />认猫</Link>
              </Menu.Item>
              <Menu.Item key="/science">
                <Link to="/science"><Icon type="appstore" />科普</Link>
              </Menu.Item>
              <SubMenu title={<span><Icon type="user" />个人中心</span>}>
                <MenuItemGroup>
                  <Menu.Item key="user:1">个人资料</Menu.Item>
                  <Menu.Item key="user:2">前往专栏</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup>
                  <Menu.Item key="user:3">设置</Menu.Item>
                  <Menu.Item key="user:4">退出登录</Menu.Item>
                </MenuItemGroup>
              </SubMenu>
              <Menu.Item key="setting">
                <Icon type="setting" />后台管理
              </Menu.Item>
            </Menu>
          </TweenOne>
          <TweenOne
            className='buttons'
            animation={{ x: 30, delay: 100, opacity: 0, type: 'from', ease: 'easeOutQuad' }}
          >
            <Button type="primary" onClick={() => browserHistory.push('/account/login')}>登录</Button>
            <Button onClick={() => browserHistory.push('/account/login')}>注册</Button>
          </TweenOne>
        </div>
      </TweenOne>
      
    );
  },
});
function select(store){
  return {
    pathname: store.routing.locationBeforeTransitions.pathname,
  };
}
function actions(dispatch){
  return{
     
  };
}


module.exports = connect(select, actions)(Header);