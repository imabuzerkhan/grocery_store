import React from 'react';
import Image from 'next/image';

const CategoryList = ({ CategoryList }) => {
  return (
    <div className='mx-4 md:mx-20 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ' >
      {CategoryList.map((category, index) => (
        <div key={category.id} className='flex flex-col items-center justify-center gap-4 bg-purple-100 p-5 rounded-md cursor-pointer hover:scale-110 transition-all ease-in-out ' >
          <Image
            src={category.categoryimage.url}
            alt='icon'
            width={80}
            height={35}
          />
          <h2>{category.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
