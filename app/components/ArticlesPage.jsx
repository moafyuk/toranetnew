import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const ArticlesPage = () => {
  const articles = [
    {
      id: 1,
      title: 'IoT in Warehousing and Logistics',
      imageSrc: '/bimage-1.png',
      link: '/articles/wlogistics',
      description: 'Understanding how IoT can benefit operations in Warehousing and Logistics.',
    },
    {
      id: 2,
      title: 'IoT in Education',
      imageSrc: '/bimage.png',
      link: '/articles/education',
      description: 'Understanding how IoT can help improve efficiencies in Education.',
    },
    {
      id: 3,
      title: 'IoT Security',
      imageSrc: '/bimage.png',
      link: '/articles/iotsecurity',
      description: 'Understanding the Security Implications of IoT (Internet of Things) and How to Counter These Concerns',
    },
    {
      id: 4,
      title: 'LoraWAN and Wi-Fi HaLow',
      imageSrc: '/bimage-1.png',
      link: '/articles/lora-halow',
      description: 'Understanding the Differences Between LoRaWAN and Wi-Fi HaLow.',
    },
    {
      id: 5,
      title: 'Predictive Maintenance',
      imageSrc: '/bimage.png',
      link: '/articles/pmaintenance',
      description: 'Establishing Baselines for Predictive Maintenance with Shock and Vibration Sensors.',
    },
    {
      id: 6,
      title: 'All Articles',
      imageSrc: '/bimage-1.png',
      link: '/articles/allarticles',
      description: 'Click here to view all previous articles',
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <Link key={article.id} href={article.link}>
            <div className="flex flex-col h-full bg-white shadow-md rounded-lg overflow-hidden cursor-pointer transition transform hover:scale-105">
              <div
                className="relative w-full h-48"
                style={{
                  backgroundImage: `url(${article.imageSrc})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'overlay',
                  backgroundColor: index % 2 === 0 ? 'rgba(51, 102, 153, 0.7)' : 'rgba(217, 119, 6, 0.7)',
                  filter: 'brightness(0.7)',
                }}
              >
                <Image
                  src={article.imageSrc}
                  alt={article.title}
                  fill
                  className="object-cover opacity-0" // Hide actual image to let background style take over
                />
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold mb-2 text-[#336699]">{article.title}</h2>
                  <p className="text-gray-600">{article.description}</p>
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

export default ArticlesPage;
