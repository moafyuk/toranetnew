import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SensorPage = () => {
  const sensors = [
    {
      id: 1,
      title: 'Water Leak Detection',
      imageSrc: '/waterleak.png',
      link: '/sensors/nextjs-tailwind',
      description: 'Detect Water Leaks with IoT Sensors and Prevent Costly Damage.',
    },
    {
      id: 2,
      title: 'LoraWAN and Wi-Fi HaLow',
      imageSrc: '/bimage-1.png',
      link: '/sensors/nextui',
      description: 'Understanding the Differences Between LoRaWAN and Wi-Fi HaLow.',
    },
    {
      id: 3,
      title: 'Predictive Maintenance',
      imageSrc: '/bimage.png',
      link: '/sensors/nextui',
      description: 'Establishing Baselines for Predictive Maintenance with Shock and Vibration Sensors.',
    },
    {
      id: 4,
      title: 'Getting Started with NextUI',
      imageSrc: '/bimage-1.png',
      link: '/sensors/nextui',
      description: 'A guide to getting started with NextUI for building great-looking components easily.',
    },
    {
      id: 5,
      title: 'Getting Started with NextUI',
      imageSrc: '/bimage.png',
      link: '/sensors/nextui',
      description: 'A guide to getting started with NextUI for building great-looking components easily.',
    },
    {
      id: 6,
      title: 'All Articles',
      imageSrc: '/bimage-1.png',
      link: '/sensors/nextui',
      description: 'Click here to view all previous articles',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sensors.map((sensor, index) => (
          <Link key={sensor.id} href={sensor.link}>
            <div className="flex flex-col h-full bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition transform hover:scale-105">
              <div
                className="relative w-full h-48"
                style={{
                  backgroundImage: `url(${sensor.imageSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <Image
                  src={sensor.imageSrc}
                  alt={sensor.title}
                  fill
                  className="object-cover opacity-0" // Hide actual image to let background style take over
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-gray-900">{sensor.title}</h2>
                  <p className="text-gray-600">{sensor.description}</p>
                </div>
                <div className="mt-4">
                  <span className="text-[#336699] font-semibold">Read More</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SensorPage;
