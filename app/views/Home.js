import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { scrollScreen } from 'rc-scroll-anim';
import Point from '../components/Point';
import Banner from '../components/Banner';
import Content1 from '../components/home/Content1';
import '../css/home.css';
import Footer from '../components/Footer';
const props = [
  {
    style: {
      height: '100%',
    },
    dataSource: {
      block1: {
        top:'25%',
        logo:'/app/img/logo1.png',
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
  },
  {
    style: {
      height: '100%',
    },
    dataSource: {
      title: {
        title:'蚂蚁金融云提供专业的服务',
        content:'基于阿里云计算强大的基础资源',
      },
      img: {
        img:'https://zos.alipayobjects.com/rmsportal/VHGOVdYyBwuyqCx.png',
      },
      block1: {
        img:'https://zos.alipayobjects.com/rmsportal/NKBELAOuuKbofDD.png',
        title:'技术',
        content:'丰富的技术组件，简单组装即可快速搭建金融级应用，丰富的技术组件，简单组装即可快速搭建金融级应用。',
      },
      block2: {
        img:'https://zos.alipayobjects.com/rmsportal/xMSBjgxBhKfyMWX.png',
        title:'融合',
        content:'解放业务及技术生产力，推动金融服务底层创新，推动金融服务底层创新。\n解放业务及技术生产力，推动金融服务底层创新。',
      },
      block3: {
        img:'https://zos.alipayobjects.com/rmsportal/MNdlBNhmDBLuzqp.png',
        title:'开发',
        content:'符合金融及要求的安全可靠、高可用、高性能的服务能力，符合金融及要求的安全可靠、高可用、高性能的服务能力。',
      },
    },
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
      <Content1 key="content1" name="content1" {...props[1]}  />,
      <Footer key="footer" name="footer"  />,
      <Point key="list" ref="list" data={['banner', 'content1', 'footer']} />,
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
