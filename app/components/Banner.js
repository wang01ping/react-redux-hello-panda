import React, { PropTypes } from 'react';
import Button from 'antd/lib/button';
import QueueAnim from 'rc-queue-anim';
import TweenOne from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import Icon from 'antd/lib/icon';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import  '../less/banner.less';
import 'rc-banner-anim/assets/index.css';

const BgElement = Element.BgElement;
class Banner extends React.Component {
  render() {
    const children = Object.keys(this.props.dataSource).map((key, i) => {
      const item = this.props.dataSource[key];
      return (
      <Element
        key={i}
        prefixCls="banner-user-elem"
      >
        <BgElement
          className="bg"
          key="bg"
          style={{
            backgroundImage: `url(${item.bgImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <QueueAnim type={['bottom','top']} delay={200} className='banner-title'
          key="text"
        >
          {item.logo ? <span className="logo" key="logo"><img width="100%" src={item.logo} /></span> : <span className="logo" key="logo">HelloPanda猫粉分享平台</span>}
          {item.title ? <h1 key="h1">{item.title}</h1> : null}
          <p key="content">{item.content}</p>
          <Button type="ghost" key="button">{item.button}</Button>
        </QueueAnim>
      </Element>)
    });
    const props = { ...this.props };
    delete props.name;
    delete props.dataSource;
    return (
      <OverPack
        scrollName={this.props.name}
        className='banner'
        {...props}
        hideProps={{ icon: { reverse: true }, banner: { reverse: true }} }
      >
        <TweenOne
          key="banner"
          animation={{ opacity: 0, type: 'from' }}
          component={BannerAnim}
        >
          {children}
        </TweenOne>
        <TweenOne animation={{ y: '-=20', yoyo: true, repeat: -1, duration: 1000 }}
          className='banner-icon'
          style={{ bottom: 40 }}
          key="icon"
        >
          <Icon type="down" />
        </TweenOne>
      </OverPack>
    );
  }
}



module.exports = Banner;
