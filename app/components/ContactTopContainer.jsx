import React from 'react';
import Image from 'next/image';

const ContactTopContainer = ({ children, imageSrc }) => {
  return (
    <div className="relative w-full min-h-screen sm:min-h-[70vh] bg-white bg-opacity-100 overflow-hidden">
      <Image
        src={imageSrc || "/whouse-gs.webp"}
        alt="Warehouse"
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-100"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-85 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};


export default ContactTopContainer;
