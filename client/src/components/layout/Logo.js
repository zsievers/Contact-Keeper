import React, { Fragment } from 'react';
import logo from '';

const Logo = () => {
  return (
    <Fragment>
      <img src={logo} style={{ width: '200px', margin: 'auto' }} alt='Logo' />
    </Fragment>
  );
};
export default Logo;
