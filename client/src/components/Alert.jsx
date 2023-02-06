import React from 'react';
import './Alert.scss';

const Alert = ({ type, message }) => {
  let alertStyle;

  switch (type) {
  case 'success':
    alertStyle = { backgroundColor: 'green' };
    break;
  case 'error':
    alertStyle = { backgroundColor: 'red' };
    break;
  case 'warning':
    alertStyle = { backgroundColor: 'yellow' };
    break;
  default:
    break;
  }

  return (
    <div
      className='alert-container'
      style={alertStyle}
    >
      {message}
    </div>
  );
};

export default Alert;