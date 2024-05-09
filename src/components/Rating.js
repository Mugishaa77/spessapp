import React, { useState } from 'react';
import Star from './Star';

const Rating = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => handleStarClick(index)}
        />
      ))}
    </div>
  );
};

export default Rating;
