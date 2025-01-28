import React from 'react';
import Image from 'next/image';
import ArticlesContainer from '../../components/ArticlesContainer';
import ClickableImage from '../../components/ClickableImage';

const IoTWarehousePage = () => {
  return (
    <ArticlesContainer>
      <div className="bg-gray-300 bg-opacity-60 shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-[#336699]">
          IoT in Warehousing and Logistics
        </h1>

        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-4">
          <p className="text-gray-700 flex-1">
            The Internet of Things (IoT) is reshaping industries, and warehousing and logistics are no exception. 
            By integrating smart sensors and connected devices, IoT solutions provide unparalleled visibility, 
            efficiency, and safety in these critical sectors. From real-time monitoring to predictive maintenance, 
            IoT technologies empower businesses to streamline operations and make informed decisions.
          </p>
          <div className="hidden md:flex">
          <Image 
            src="/whouse-gs.webp" 
            alt="Warehouse IoT Solutions" 
            width={250} 
            height={150} 
            className="rounded-lg shadow-lg"
          />
          </div>
        </div>


        {/* Section: Enhanced Operational Efficiency */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Enhanced Operational Efficiency
        </h2>
        <p className="text-gray-700 mb-4">
          IoT sensors can monitor various aspects of warehouse operations, such as occupancy levels, equipment usage, and environmental conditions. Occupation sensors track the number of people in specific areas, ensuring optimal space utilisation and adherence to safety protocols. Weight sensors help maintain proper load distribution, reducing risks and improving resource allocation. Meanwhile, door and shutter sensors provide insights into operational flow and enhance security by tracking access points.
        </p>

        {/* Section: Proactive Maintenance and Safety */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Proactive Maintenance and Safety
        </h2>
        <p className="text-gray-700 mb-4">
          IoT-enabled predictive maintenance is a game-changer for logistics. Vibration and shock sensors monitor the health of machinery, such as conveyor belts or forklifts, detecting early signs of wear and tear. This proactive approach prevents costly downtime and ensures the longevity of equipment. Additionally, access sensors can identify unsafe practices, reducing workplace accidents. Fire safety is also bolstered with smoke particulate and temperature sensors, providing early warnings of potential hazards.
        </p>

        {/* Section: Real-Time Visibility and Security */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Real-Time Visibility and Security
        </h2>
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            IoT solutions deliver real-time data through user-friendly dashboards, enabling managers to respond swiftly to issues. 
            For example, liquid detection sensors can identify leaks near pipes or storage tanks, preventing damage and contamination. 
            In areas requiring heightened security, smart locks and NFC-enabled padlocks control access to sensitive equipment, 
            while integrated human detection sensors ensure no unauthorised personnel enter restricted zones.
          </p>
          <div className="hidden md:flex justify-center">
           <ClickableImage src="/tempandhum.png" alt="Temperature and Humidity Monitoring" width={400} height={400} className="rounded-lg cursor-pointer " />
          </div>
        </div>

        {/* Section: Data-Driven Decision Making */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Data-Driven Decision Making
        </h2>
        <div className="mb-6">
          <p className="text-gray-700 mb-4">
            The ability to collect and analyse large volumes of data in real-time allows businesses to optimise processes 
            and enhance decision-making. Predictive analytics tools leverage historical data to forecast potential equipment 
            failures and operational bottlenecks. These insights help logistics managers allocate resources efficiently and 
            prioritise interventions, leading to smoother workflows and cost savings.
          </p>
          <div className="hidden md:flex justify-center">
            <ClickableImage src="/predic.png" alt="Data-Driven Decision Making" width={400} height={400} className="rounded-lg cursor-pointer " />
          </div>
        </div>

        {/* Section: Scalable and Customisable Solutions */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Scalable and Customisable Solutions
        </h2>
        <p className="text-gray-700 mb-4">
          IoT systems are highly adaptable, growing alongside business needs. Whether expanding sensor coverage or incorporating new features, IoT platforms like ToraSense are designed to evolve. This scalability ensures that logistics operations remain future-proof in an ever-changing market landscape.
        </p>

        {/* Section: Applications in Logistics */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Applications in Logistics
        </h2>
        <p className="text-gray-700 mb-4">
          Practical applications of IoT in logistics are vast. Smart fuel tank sensors detect unauthorised fuel usage or leaks, while integrated systems track both fuel levels and pump nozzle activity. In void spaces, combined radar sensors and access security systems ensure personnel safety and prevent unauthorised entry. Crash detection sensors on vehicles and static equipment log impact events, providing data for maintenance and incident analysis.
        </p>

        {/* Section: The Competitive Edge */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          The Competitive Edge
        </h2>
        <p className="text-gray-700 mb-4">
          Implementing IoT in warehousing and logistics not only improves operational efficiency and safety but also offers a competitive advantage. By embracing a data-driven approach, businesses can stay ahead in a dynamic and demanding industry, reducing costs while maintaining high service standards.
        </p>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">Conclusion</h2>
        <p className="text-gray-700 mb-4">
          The integration of IoT technologies in warehousing and logistics has transformed the way operations are managed. Solutions like ToraSense showcase the potential of IoT to enhance safety, efficiency, and decision-making. As the logistics sector continues to evolve, IoT will remain a cornerstone of innovation, driving growth and sustainability.
        </p>

        {/* Contact Us Section */}
        <div className="bg-gray-100 bg-opacity-60 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-xl font-semibold text-[#336699] mb-4">
            Need More Information?
          </h3>
          <p className="text-gray-700 mb-4">
           Want to learn more about IoT for your business? Please get in touch with us!
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#336699] text-white font-medium px-6 py-3 rounded-lg 
                      hover:bg-[#d97706] transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </div>
    </ArticlesContainer>
  );
};

export default IoTWarehousePage;
