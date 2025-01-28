import React from 'react';
import Image from 'next/image';

const ContainerThree = ({
  children,
  imageSrc,
  imageAlt = 'ToraSense',
  imageFill = true,
  imageStyle = { objectFit: 'cover' },
  imageClassName = 'opacity-100',
}) => {
  return (
    <div className="relative w-full h-[35vh] sm:h-[35vh] md:h-[55vh] bg-gray-200 bg-white bg-opacity-100 overflow-hidden block lg:hidden">
      <Image
        src={imageSrc || '/bimage-1-gs.png'}
        alt={imageAlt}
        fill={imageFill}
        style={imageStyle}
        className={imageClassName}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-85 flex items-center justify-center px-4">
        {children}
      </div>
    </div>
  );
};

export default ContainerThree;
