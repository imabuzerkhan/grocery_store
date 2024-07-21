import Image from 'next/image';
import React from 'react';

const Business = ({ businesslists, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {businesslists.map((item, index) => (
        <div key={index}>
          <Image
            src={item?.image?.url}
            alt="business image"
            width={500}
            height={200}
          />
          <p>{item.name}</p> 
        </div>
      ))}
    </div>
  );
};

export default Business;
