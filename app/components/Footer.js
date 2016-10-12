import React, { PropTypes } from 'react';
import TweenOne from 'rc-tween-one';
import OverPack from 'rc-scroll-anim/lib/ScrollOverPack';
import '../less/footer.less';

class Footer extends React.Component {
  render() {
    const content = 'Copyright © 2016 The Project by <a href=\'#\'>Hello Panda</a>. All Rights Reserved';
    return (
    <OverPack
      scrollName='footer'
      className='footer'
      playScale={0.05}
      hideProps={{ footer: { reverse: true } }}
    >
      <TweenOne
        animation={{ y: '+=30', opacity: 0, type: 'from' }}
        key="footer"
      >
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </TweenOne>
    </OverPack>);
  }
}
module.exports = Footer;

