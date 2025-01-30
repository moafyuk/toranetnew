import React from 'react';
import ArticlesContainer from '../../components/ArticlesContainer';
import Link from 'next/link';

const AllArticlesPage = () => {
  const articles = [
    {
      id: 1,
      title: 'IoT in Warehousing and Logistics',
      description: 'Discover how IoT enhances efficiency, safety, and decision-making in logistics.',
      link: '/articles/wlogistics',
    },
    {
      id: 2,
      title: 'LoRaWAN vs Wi-Fi HaLow',
      description: 'A comparison of two prominent IoT communication technologies.',
      link: '/articles/lora-halow',
    },
    {
      id: 3,
      title: 'Predictive Maintenance with Shock and Vibration Sensors',
      description: 'Learn how baselines are established to monitor equipment performance effectively.',
      link: '/articles/pmaintenance',
    },
    {
      id: 4,
      title: 'WiNG EoS and XIQ',
      imageSrc: '/bimage-1.png',
      link: '/articles/xiqeol',
      description: 'Maximising the Lifespan of WiNG Wireless Network with Toranet and Extreme Networks ',
    },
    {
      id: 5,
      title: 'IoT in Education',
      description: 'Explore how IoT is transforming education through smarter and safer learning environments.',
      link: '/articles/education',
    },
  ];

  return (
    <ArticlesContainer>
      <div className="bg-gray-300 bg-opacity-60 shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-[#336699]">
          All Articles
        </h1>

        {/* Articles List */}
        <div className="space-y-6 mb-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="border border-gray-200 rounded-lg p-4 bg-white hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-semibold text-[#d97706] mb-2">
                {article.title}
              </h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <Link
                href={article.link}
                className="text-blue-600 hover:underline font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
        {/* Contact Us Section */}
        <div className="bg-white bg-opacity-80 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-xl font-semibold text-[#336699] mb-4">
            Need More Information?
          </h3>
          <p className="text-gray-700 mb-4">
           Want to learn more about IoT for your business? Please get in touch with us!
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#336699] text-white font-medium px-6 py-3 rounded-lg hover:bg-[#d97706] transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
    </ArticlesContainer>
  );
};

export default AllArticlesPage;
