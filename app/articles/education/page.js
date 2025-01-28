import React from 'react';
import Image from 'next/image';
import ArticlesContainer from '../../components/ArticlesContainer';
import ClickableImage from '../../components/ClickableImage';

const IoTEducationPage = () => {
  return (
    <ArticlesContainer>
      <div className="bg-gray-300 bg-opacity-60 shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-[#336699]">
          Transforming Education with the Internet of Things (IoT)
        </h1>

        {/* Introduction */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-4">
          <p className="text-gray-700 flex-1">
            In recent years, the Internet of Things (IoT) has steadily reshaped our interactions with technology. Nowhere is this 
            more evident than in the education sector, where connected devices and data-driven insights are opening up new 
            possibilities for students, teachers, and administrators. By integrating sensors, smart devices, and real-time analytics 
            into classrooms and university campuses, IoT is making education safer, more engaging, and more efficient. 
            Here is a closer look at how IoT is transforming learning environments.
          </p>
          <div className="hidden md:flex">
          <Image 
            src="/education.webp" 
            alt="IoT in Education" 
            width={250} 
            height={150} 
            className="rounded-lg shadow-lg"
          />
          </div>
        </div>

        {/* Section: Creating Safer and Healthier Learning Spaces */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Creating Safer and Healthier Learning Spaces
        </h2>
        <p className="text-gray-700 mb-4">
          IoT sensors can track temperature, humidity, air quality, and CO₂ levels in classrooms and halls of residence. If 
          readings exceed safe thresholds, automated systems can adjust heating or ventilation to maintain a comfortable and 
          healthy environment. This prevents distractions and health issues that can arise from poor indoor air quality.
        </p>
        <p className="text-gray-700 mb-4">
          By continuously measuring humidity and temperature levels, IoT systems can identify conditions that encourage mold 
          growth—particularly black mold, which thrives in damp, warm environments. When sensors detect prolonged high humidity 
          and elevated temperatures, the system can alert facility managers to investigate potential mold growth and take 
          corrective actions (e.g., improved ventilation, dehumidifiers) before the problem escalates.
        </p>

        {/* Image Section */}
        <div className="flex justify-center mt-6 mb-4">
          <ClickableImage src="/tempandhum.png" alt="Temperature and Humidity Monitoring in Education" width={400} height={400} className="rounded-lg cursor-pointer " />
        </div>

        {/* Section: Interactive and Engaging Learning Experiences */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Interactive and Engaging Learning Experiences
        </h2>
        <p className="text-gray-700 mb-4">
          IoT devices enable collaborative learning activities and personalised education. Interactive whiteboards, tablets, and other IoT-enabled devices allow students to work together on real-time problem-solving tasks while teachers track their progress. These tools also facilitate personalised learning paths by capturing how students interact with digital materials, allowing teachers to identify areas needing more attention.
        </p>
        <p className="text-gray-700 mb-4">
          Additionally, IoT fosters gamification and hands-on learning. Students can use IoT devices to build robotics projects, collect real-world data (e.g., temperature, motion, or light levels), and analyse it—blending theory with practical problem-solving skills.
        </p>

        {/* Section: Operational Efficiency and Cost Savings */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Operational Efficiency and Cost Savings
        </h2>
        <p className="text-gray-700 mb-4">
          IoT automates resource management and predictive maintenance in schools and universities. Smart systems detect when rooms are unoccupied, automatically turning off lights and adjusting HVAC settings, reducing utility bills and environmental footprints. IoT also streamlines asset tracking by pinpointing the locations of resources like library books or lab equipment.
        </p>
        <p className="text-gray-700 mb-4">
          Predictive maintenance powered by IoT prevents disruptions by identifying unusual patterns in equipment performance, such as motors running hotter or louder than usual. This proactive approach reduces downtime, saving time and money while maintaining a smooth learning environment.
        </p>

        {/* Section: Data-Driven Decision Making */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Data-Driven Decision Making
        </h2>
        <p className="text-gray-700 mb-4">
          IoT enables schools to gather real-time data on attendance, resource usage, and classroom conditions. These insights help administrators make informed policy and curriculum changes. For instance, underused classrooms or consistently uncomfortable conditions can prompt better allocation of resources or scheduling adjustments.
        </p>
        <p className="text-gray-700 mb-4">
          Teachers and school leaders can refine lesson plans and assess the impact of new programs by tracking key metrics like student engagement and grades. Continuous improvement efforts are supported by these data-driven insights.
        </p>

        {/* Section: Addressing Challenges and Ensuring Success */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Addressing Challenges and Ensuring Success
        </h2>
        <p className="text-gray-700 mb-4">
          As schools adopt IoT, privacy and security are critical concerns. Encrypting sensitive data, implementing secure authentication protocols, and adhering to robust data governance policies ensure student privacy. Reliable Wi-Fi, power sources, and IT support are also essential for maintaining IoT infrastructure. Staff training helps teachers and administrators confidently use new tools.
        </p>
        <p className="text-gray-700 mb-4">
          Although initial investments in IoT devices can be significant, grants, partnerships with tech companies, and phased implementation plans help institutions balance costs with long-term benefits.
        </p>

        {/* Conclusion */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">Conclusion</h2>
        <p className="text-gray-700 mb-4">
          IoT is reshaping education by creating smarter, safer, and more personalised learning environments. Connected sensors keep buildings comfortable and secure, while data insights help teachers refine their methods and administrators optimise operations. As technology continues to evolve, IoT will play an even bigger role in advancing educational outcomes and preparing students with the real-world skills they need.
        </p>
        <p className="text-gray-700 mb-4">
          Embracing IoT responsibly, balancing innovation with robust data protections will be key to unlocking its full potential in education.
        </p>
        {/* Contact Us Section */}
        <div className="bg-gray-100 bg-opacity-60 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-xl font-semibold text-[#336699] mb-4">
            Need More Information?
          </h3>
          <p className="text-gray-700 mb-4">
           Want to learn more about IoT in Education? Please get in touch with us!
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

export default IoTEducationPage;
