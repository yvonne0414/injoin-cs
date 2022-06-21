import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

function Heart() {
  const [fav, setFav] = useState(false);

  return (
    <>
      {fav ? (
        <FaHeart
          className="prd-card-icon-Heart"
          fill="#ac2c32"
          onClick={() => {
            setFav(false);
          }}
        />
      ) : (
        <FaRegHeart
          className="prd-card-icon-Heart"
          onClick={() => {
            setFav(true);
          }}
        />
      )}
    </>
  );
}

export default Heart;
