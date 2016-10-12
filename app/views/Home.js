import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { scrollScreen } from 'rc-scroll-anim';
import Point from '../components/Point';
import Banner from '../components/Banner';
// import Content1 from '../components/home/Content1';
import '../less/home.less';
import Footer from '../components/Footer';
const props = [
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        top:'25%',
        logo:'',
        title:'',
        content:'iPanda爱熊猫集结号',
        button:'iOS版本下载',
        bgImg:'/app/img/1.jpg',
      },
      block2: {
        top:'25%',
        logo:'',
        title:'',
        content:'',
        bgImg:'/app/img/2.jpg',
      },
      block3: {
        top:'25%',
        logo:'',
        title:'',
        content:'',
        button:'',
        bgImg:'/app/img/3.jpg',
      },
    }
  }];
import { connect } from 'react-redux';
class Home extends Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // 实现整屏滚动
    const docHeight = ReactDOM.findDOMNode(this).getBoundingClientRect().height;
    scrollScreen.init({ docHeight });
    // 点的位置居中
    const list = ReactDOM.findDOMNode(this.refs.list);
    const listHeight = list.getBoundingClientRect().height;
    list.style = `margin-top: -${listHeight / 2}px`;
    
  }
  render(){
    const children = [
      <Banner key="banner" name="banner" {...props[0]} />,
      // <Content1 key="content1" name="content1" {...props[1]}  />,
      <Footer key="footer" name="footer"  />,
      <Point key="list" ref="list" data={['banner', 'footer']} />,
    ];
    return (
      <div className="templates-wrapper">
        {children}
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
