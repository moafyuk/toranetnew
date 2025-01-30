"use client";

import React, { useEffect, useRef } from 'react';

const ArticlesContainer = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    const maxDistance = window.innerWidth < 768 ? 70 : 120;
    const particleSize = window.innerWidth < 768 ? 1 : 2;

    const resizeCanvas = () => {
      const ratio = window.devicePixelRatio || 1;
      const container = canvas.parentElement;

      if (container) {
        canvas.width = container.clientWidth * ratio;
        canvas.height = container.clientHeight * ratio;
        canvas.style.width = `${container.clientWidth}px`;
        canvas.style.height = `${container.clientHeight}px`;
        ctx.scale(ratio, ratio);
        createParticles();
      }
    };

    const createParticles = () => {
      const maxParticles = window.innerWidth < 768 ? 50 : 250;
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width / (window.devicePixelRatio || 1),
          y: Math.random() * canvas.height / (window.devicePixelRatio || 1),
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x > canvas.width / (window.devicePixelRatio || 1) || p.x < 0) p.vx *= -1;
        if (p.y > canvas.height / (window.devicePixelRatio || 1) || p.y < 0) p.vy *= -1;

        ctx.fillStyle = '#d97706';
        ctx.beginPath();
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
        ctx.fill();

        // Draw lines between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const distance = Math.sqrt(
            (p.x - p2.x) ** 2 + (p.y - p2.y) ** 2
          );
          if (distance < maxDistance) {
            ctx.strokeStyle = `rgba(51, 102, 153, ${1 - distance / maxDistance})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      drawParticles();
      requestAnimationFrame(animate);
    };

    const debounce = (func, delay) => {
      let timer;
      return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
          func();
        }, delay);
      };
    };

    const init = () => {
      resizeCanvas();
      createParticles();
      animate();
      window.addEventListener('resize', debounce(resizeCanvas, 150));
    };

    init();

    return () => {
      window.removeEventListener('resize', debounce(resizeCanvas, 150));
    };
  }, []);

  return (
    <div className="relative w-full min-h-[55vh] bg-white overflow-hidden">
      {/* Canvas for animation */}
      <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
      {/* Content Area */}
      <div className="relative z-10 flex items-center justify-center text-white p-8">
        {children}
      </div>
    </div>
  );
};

export default ArticlesContainer;
