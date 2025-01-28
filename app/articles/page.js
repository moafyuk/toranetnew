"use client";

import React from 'react';
import ArticlesPage from '../components/ArticlesPage';

const backgroundImageStyle = {
  backgroundImage: "url('/bimage-gs.png')",
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

export default function App() {
  return (
    <div style={backgroundImageStyle} className="w-full py-8">
      <ArticlesPage />
    </div>
  );
};