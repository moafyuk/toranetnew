import React from 'react';
import ArticlesContainer from '../../components/ArticlesContainer';

const PredictiveMaintenancePage = () => {
  return (
    <ArticlesContainer>
      <div className="bg-gray-300 bg-opacity-60 shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-[#336699]">
          Establishing Baselines for Predictive Maintenance with Shock and Vibration Sensors
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 mb-4">
          To ensure your equipment operates at peak efficiency, we utilise advanced shock and vibration sensors to monitor performance in real time. One of the key steps in implementing these sensors is establishing accurate baselines, allowing us to detect and report conditions that deviate from normal operations. This document outlines the consultative process we use to determine these baselines, ensuring that your equipment is always monitored effectively, and issues are identified before they become costly problems.
        </p>

        {/* Section: Our Consultative Approach */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Our Consultative Approach to Baseline Establishment
        </h2>
        <p className="text-gray-700 mb-4">
          {`The success of predictive maintenance depends on identifying what "normal" looks like for your specific equipment. Each machine operates differently, which is why a tailored approach to setting vibration and shock baselines is crucial. Here is how we work with you to establish these important benchmarks:`}
        </p>

        {/* Steps */}
        <h3 className="text-xl font-semibold text-[#d97706] mb-4">Step 1: Initial Consultation and Data Gathering</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Understanding Your Equipment:</strong> Our process starts with an in-depth consultation where we work closely with your team to understand the specific machines and components you want to monitor.</li>
          <li><strong>Installing Sensors:</strong> We will install our shock and vibration sensors on key components of your equipment, strategically placed to capture real-time data on normal operations.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#d97706] mb-4">Step 2: Monitoring the Machine in Action</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Data Collection:</strong> Once the sensors are installed, we collect data over several weeks to capture a wide range of operational conditions.</li>
          <li><strong>Building a Comprehensive Data Set:</strong> Monitoring over time ensures robust baselines based on actual conditions.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#d97706] mb-4">Step 3: Data Analysis and Baseline Establishment</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Analysing Normal Behaviour:</strong> We use collected data to define “normal” operational parameters, identifying patterns in vibration and impact forces.</li>
          <li><strong>Customising the Baselines:</strong> Baselines are tailored to reflect the unique operational characteristics of your equipment, ensuring accurate monitoring.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#d97706] mb-4">Step 4: Setting Alerts and Alarms</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Defining Thresholds:</strong> We set thresholds for conditions deviating from the baseline. Alerts help your team respond quickly to potential issues.</li>
          <li><strong>Customisation Options:</strong> Alerts can be configured to match your preferences, such as early warnings for minor deviations or alerts for significant anomalies.</li>
        </ul>

        <h3 className="text-xl font-semibold text-[#d97706] mb-4">Step 5: Ongoing Monitoring and Adjustments</h3>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Continuous Monitoring:</strong> Sensors monitor your equipment in real time, flagging deviations for corrective action.</li>
          <li><strong>Refining Baselines Over Time:</strong> Baselines are periodically revisited to ensure they remain accurate, adapting to changes in operating conditions.</li>
        </ul>

        {/* Section: Key Benefits */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">Key Benefits of Our Consultative Process</h2>
        <ul className="list-disc pl-6 space-y-2 mb-6 text-gray-700">
          <li><strong>Tailored to Your Operations:</strong> Baselines are customised to your equipment for the most accurate monitoring possible.</li>
          <li><strong>Early Issue Detection:</strong> Prevent minor issues from escalating into major breakdowns, reducing downtime and repair costs.</li>
          <li><strong>Improved Asset Lifespan:</strong> Regular monitoring extends the lifespan of machinery, protecting your investment.</li>
          <li><strong>Increased Efficiency:</strong> Real-time data and alerts optimise maintenance schedules, minimise unexpected failures, and improve overall operational efficiency.</li>
        </ul>

        {/* Closing Note */}
        <p className="text-gray-700 mb-4">
          This document is designed to guide customers through the process, showcasing the tailored, consultative approach to establishing baselines for predictive maintenance.
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

export default PredictiveMaintenancePage;
