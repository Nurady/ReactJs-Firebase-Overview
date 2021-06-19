import React from 'react';

const Button = ({ onClick, title, loading }) => {
  if (loading) {
    // eslint-disable-next-line react/button-has-type
    return <button className="btn disable">Loading...</button>;
  }
  return (
    // eslint-disable-next-line react/button-has-type
    <button className="btn" onClick={onClick}>{title}</button>
  );
};

export default Button;
