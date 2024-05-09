import React from 'react';

const Star = ({ filled, onClick }) => {
  const starStyle = {
    cursor: 'pointer',
    color: filled ? 'gold' : 'gray'
  };

  return (
    <span className="star" style={starStyle} onClick={onClick}>
      ★
    </span>
  );
};

export default Star;
