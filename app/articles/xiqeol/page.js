import React from 'react';
import Image from 'next/image';
import ArticlesContainer from '../../components/ArticlesContainer';
import ClickableImage from '../../components/ClickableImage';

const WiNGWirelessNetworksPage = () => {
  return (
    <ArticlesContainer>
      <div className="bg-gray-300 bg-opacity-60 shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-[#336699]">
          Maximising the Lifespan of WiNG Wireless Networks with Toranet and Extreme Networks
        </h1>

        {/* Introduction */}
        <p className="text-gray-700 mb-6">
          At Toranet, we are working closely with <strong>Extreme Networks</strong> to maximise the 
          <strong> lifespan, reliability, security, and performance</strong> of WiNG wireless networks. Our goal is to help you 
          get the most out of your current deployment, putting you in a strong position to transition to the latest 
          <strong> Wi-Fi 6E access points (APs)</strong> when the time is right.
        </p>

        {/* Section: Understanding the Risks */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Understanding the Risks of Wireless Upgrades
        </h2>
        <p className="text-gray-700 mb-4">
          Wireless networks are the backbone of warehouse efficiency. However, replacing an entire wireless 
          infrastructure is not something that can be done during a single shift break. New deployments often come 
          with <strong>client issues</strong>, ranging from minor inconveniences to significant disruptions.
        </p>

        {/* Section: Minimising Risks */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Minimising Risks with Proven Strategies
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Incremental hardware replacement during shift breaks to minimise downtime</li>
          <li>Seamless integration with existing hardware</li>
          <li>Rollback capabilities for troubleshooting and diagnostics</li>
          <li>Full support for both legacy and new client devices</li>
          <li>Expert engineering support with deep technical knowledge</li>
        </ul>

        {/* Section: Optimising Your Current Network */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Optimising Your Current Network
        </h2>
        <p className="text-gray-700 mb-4">
          Before migrating to a <strong>new wireless solution</strong>, it is essential to optimise your existing WiNG network. 
          This ensures you get <strong>the best performance and reliability</strong> from your current investment, reducing unnecessary costs and disruptions.
        </p>

        {/* Section: How Toranet Supports Migration */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          How Toranet Supports Your Migration
        </h2>
        <p className="text-gray-700 mb-4">
          Toranet understands the <strong>risks and pressures</strong> involved in wireless infrastructure upgrades. That is why we have developed a 
          <strong> structured process</strong> for migrating from Extreme Networks <strong>WiNG controller-based model</strong> to the 
          <strong> cloud-based ExtremeCloud IQ (XIQ) platform</strong>.
        </p>

        {/* Section: What is ExtremeCloud IQ */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          What is ExtremeCloud IQ (XIQ)?
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>ExtremeCloud IQ</strong> (XIQ) is an advanced, <strong>intuitive network management platform</strong> that simplifies 
          deployment, monitoring, and analytics. Unlike traditional <strong>network management servers</strong> which require costly 
          hardware, IT expertise, and ongoing maintenance XIQ offers:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Rapid and secure WLAN deployment</li>
          <li>Advanced analytics for real-time visibility</li>
          <li>Broad support for third-party switches (Cisco, HP Aruba, etc.)</li>
        </ul>

        {/* Section: Top 10 Reasons to Choose XIQ */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Top 10 Reasons to Choose ExtremeCloud IQ
        </h2>
        <ul className="list-decimal list-inside text-gray-700 mb-4">
          <li><strong>Simple Licensing Model</strong> - One license per device with three levels of capability.</li>
          <li><strong>Robust Security</strong> - Layered security, GDPR compliance, and NAC support.</li>
          <li><strong>Flexible Deployment Options</strong> - Public Cloud, Private Cloud, and ExtremeCloud Edge.</li>
          <li><strong>Effortless Wireless Management</strong> - Pre-configured profiles and auto-configuration.</li>
          <li><strong>User & Client Management</strong> - Supports 802.1x and extensive Guest Portal options.</li>
          <li><strong>Deep Analytics & Visibility</strong> - Application Layer Visibility from edge to data center.</li>
          <li><strong>Multi-Vendor Switch Support</strong> - Drop-ship switches and third-party firmware management.</li>
          <li><strong>Superior Support & Troubleshooting</strong> - AI-driven diagnostics and streamlined support.</li>
          <li><strong>AI-Powered Network Automation</strong> - Machine Learning and "Digital Twin" technology.</li>
        </ul>

        {/* Section: Future-Proofing */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Future-Proof Your Wireless Network with Toranet
        </h2>
        <p className="text-gray-700 mb-4">
          At Toranet, we <strong>eliminate the risks and complexities</strong> of wireless upgrades. Whether you want to 
          <strong> extend the life of your WiNG network</strong> or <strong>migrate to ExtremeCloud IQ</strong>, our expert team ensures a smooth, cost-effective transition.
        </p>

        {/* Contact Section */}
        <div className="bg-gray-100 bg-opacity-60 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-xl font-semibold text-[#336699] mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-4">
            Want to optimise or future proof your wireless infrastructure? Contact us today!
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

export default WiNGWirelessNetworksPage;
