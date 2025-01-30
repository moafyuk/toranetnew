import React from 'react';
import Image from 'next/image';
import ArticlesContainer from '../../components/ArticlesContainer';
import ClickableImage from '../../components/ClickableImage';

const FutureProofingWiNGPage = () => {
  return (
    <ArticlesContainer>
      <div className="bg-gray-300 bg-opacity-60 shadow-md rounded-lg p-8 max-w-4xl mx-auto">
        
        {/* Title */}
        <h1 className="text-3xl font-bold mb-6 text-[#336699]">
          Future-Proofing Your WiNG Network with Toranet
        </h1>

        {/* Introduction */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Staying with WiNG: A Viable Option
        </h2>
        <p className="text-gray-700 mb-4">
          If you are wondering whether you should continue using WiNG, the answer is simple: <strong>yes, you can.</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Nothing will stop working on a specific date. WiNG will continue to function for as long as necessary, 
          giving you time to plan, budget, and assess your options.
        </p>
        <p className="text-gray-700 mb-4">
          The recent <strong>End-of-Sale announcement</strong> is just the first stage, not an immediate deadline. 
          Toranet is here to help you navigate this transition smoothly, just as we have done for many other customers.
        </p>

        {/* Section: Why Migrate to XIQ */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Why Migrate to XIQ Instead of Another Brand?
        </h2>
        <p className="text-gray-700 mb-4">
          Some businesses may consider switching to a completely different wireless infrastructure provider, 
          but this approach comes with significant risks:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Complete hardware replacement in a single event</li>
          <li>Major downtime leading to productivity loss</li>
          <li>Higher risks related to coverage, connectivity, client behavior, and roaming</li>
        </ul>

        {/* Section: A Smarter Approach */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          A Smarter Approach: Migrating to XIQ
        </h2>
        <p className="text-gray-700 mb-4">
          Instead of a big-bang replacement, moving to <strong>ExtremeCloud IQ (XIQ)</strong> can be done in stages.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Test coverage, connectivity, and reliability before full migration</li>
          <li>Reduce financial impact by spreading costs over time</li>
          <li>Minimise operational risks with a step-by-step approach</li>
        </ul>
        <p className="text-gray-700 mb-4">
          With XIQ, you can modernise your wireless infrastructure <strong>without the disruptions</strong> and financial strain of an all-at-once migration.
        </p>

        {/* Section: Wi-Fi 6/6E */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          What About Wi-Fi 6 / 6E (or Later)?
        </h2>
        <p className="text-gray-700 mb-4">
          If you're concerned about Wi-Fi 6 or Wi-Fi 6E compatibility, rest assured:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Wi-Fi 6/6E access points are fully supported under WiNG</li>
          <li>They will remain operational for as long as needed</li>
          <li>These APs are also fully compatible with XIQ, ensuring a seamless transition</li>
        </ul>
        <p className="text-gray-700 mb-4">
          This means <strong>no need to replace your hardware</strong> after migrating to XIQ.
        </p>

        {/* Section: Migration Process */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          How to Migrate to XIQ
        </h2>
        <p className="text-gray-700 mb-4">
          Migrating to <strong>ExtremeCloud IQ</strong> is a customised process, tailored to each business.
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Risk Assessment & Planning</strong> - Identify potential challenges and create a roadmap</li>
          <li><strong>Phased Implementation</strong> - Deploy in stages to minimise downtime</li>
          <li><strong>Integration with Existing Infrastructure</strong> - Maintain connectivity with WiNG systems</li>
          <li><strong>Rollback Capabilities</strong> - Ensure a fail-safe mechanism for diagnostics</li>
          <li><strong>Ongoing Support</strong> - Toranet provides expert engineering and troubleshooting</li>
        </ul>

        {/* Section: Why Choose Toranet */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Why Choose Toranet?
        </h2>
        <p className="text-gray-700 mb-4">
          At Toranet, we have proven strategies for ensuring a smooth, risk-free migration:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li>Step-by-step migration that aligns with shift schedules</li>
          <li>Seamless integration with your existing infrastructure</li>
          <li>Full support for both legacy and new wireless clients</li>
          <li>Rollback options for diagnostics in case of issues</li>
          <li>Expert engineering support with extensive industry experience</li>
        </ul>

        {/* Section: Toranet Services */}
        <h2 className="text-2xl font-semibold text-[#d97706] mb-4">
          Toranet Services
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-4">
          <li><strong>Expert Support</strong> - Keep your WiNG controllers running smoothly</li>
          <li><strong>Extended Maintenance</strong> - Hardware and software support</li>
          <li><strong>Migration Planning</strong> - Structured transition plans for XIQ</li>
          <li><strong>Upgrade Services</strong> - Minimise disruption with full integration support</li>
          <li><strong>Consultation & Optimisation</strong> - Maximise your network performance</li>
        </ul>

        {/* Contact Section */}
        <div className="bg-gray-100 bg-opacity-60 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-xl font-semibold text-[#336699] mb-4">
            Get in Touch
          </h3>
          <p className="text-gray-700 mb-4">
            Want to discuss how to future proof your WiNG network? Contact Toranet today!
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

export default FutureProofingWiNGPage;