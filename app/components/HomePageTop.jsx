"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { WiFi } from './Icons';

// Function to generate evenly distributed positions
const generateGridPositions = (iconCount, columns) => {
  const rows = Math.ceil(iconCount / columns); // Scale rows dynamically
  const positions = [];
  const rowSpacing = 100 / rows;
  const colSpacing = 100 / columns;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (positions.length >= iconCount) break; // Stop when we reach the icon limit

      const offsetX = (Math.random() * colSpacing) / 3; // Add slight randomness
      const offsetY = (Math.random() * rowSpacing) / 3;

      positions.push({
        top: row * rowSpacing + offsetY,
        left: col * colSpacing + offsetX
      });
    }
  }

  return positions;
};

const HomePageTop = ({
  children,
  imageSrc,
  imageAlt = 'Toranet Solutions',
  imageFill = true,
  imageStyle = { objectFit: 'cover' },
  imageClassName = 'opacity-100',
  iconComponent: IconComponent = WiFi, // Default to WiFi if not provided
}) => {
  const [iconCount, setIconCount] = useState(30);
  const [columns, setColumns] = useState(6);

  useEffect(() => {
    const updateLayout = () => {
      if (window.innerWidth < 640) {
        setIconCount(6);
        setColumns(3);
      } else if (window.innerWidth < 1024) {
        setIconCount(12);
        setColumns(4);
      } else {
        setIconCount(30);
        setColumns(6);
      }
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  const scatteredIcons = generateGridPositions(iconCount, columns).map((position, i) => ({
    id: i,
    Component: IconComponent, // Use the provided icon component
    size: Math.random() * 40 + 30,
    opacity: 0.4,
    color: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`,
    position,
  }));

  return (
    <div className="relative w-full h-[55vh] bg-white bg-opacity-100 overflow-hidden">
      <Image
        src={imageSrc || '/whouse-gs.webp'}
        alt={imageAlt}
        fill={imageFill}
        style={imageStyle}
        className={imageClassName}
      />

      {scatteredIcons.map(({ id, Component, size, opacity, color, position }) => (
        <Component
          key={id}
          className="absolute"
          style={{
            position: 'absolute',
            top: `${position.top}%`,
            left: `${position.left}%`,
            opacity,
            stroke: color,
            strokeWidth: 2,
          }}
          size={size}
        />
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-85 flex items-center justify-center px-4">
        {children}
      </div>
    </div>
  );
};

export default HomePageTop;
