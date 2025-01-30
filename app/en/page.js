"use client";

import HomePageTop from '../components/HomePageTop';
import BottomContainer from '../components/BottomContainer';
import ContainerThree from '../components/ContainerThree';
import { NetWorking, Lightbulb, Analytics, EyeIcon, ShieldIcon, } from "../components/Icons.jsx";
import ThreeTextBlocks from '../components/ThreeTextBlocks';

const icons = [
  <Analytics key="1" className="text-white" size={40} />,
  <ShieldIcon key="2" className="text-white" size={40} />,
  <EyeIcon key="3" className="text-white" size={40} />,
  <Lightbulb key="4" className="text-white" size={40} />,
];

export default function App() {
  return (
    <>
      <HomePageTop imageSrc="/lan.png" iconComponent={NetWorking} imageAlt="Warehousing and Logistics" imageFill={true} imageStyle={{ objectFit: 'cover' }} imageClassName="opacity-100">
        <div className="text-white p-4 flex flex-col rounded-md lg:w-[35rem] px-10 md:mx-6 mb-4 sm:mb-0 bg-gray-800 bg-opacity-75">
          <h1 className="text-3xl text-orange-500 font-bold">Enterprise Networks</h1>
          <p className="mt-2 text-lg">Enterprise Networks provide a secure, scalable infrastructure that connects users, devices, and applications across an organisation. It ensures high performance, resilience, and security through intelligent routing, firewalls, SDNs, VPNs, and access controls, enabling seamless communication and data protection.</p>
        </div>
      </HomePageTop>
      <BottomContainer>
          <ThreeTextBlocks icons={icons}> 
            <p>SDNs centralise control, improving security, automation, and scalability. Dynamic traffic routing, segmentation, and policy enforcement enhance efficiency, resilience, and security, allowing businesses to adapt quickly to new threats and operational needs.</p>
            <p>A well-designed LAN ensures fast, reliable communication with Wi-Fi 6, VLAN segmentation, and intelligent switching. Redundant links, automated failover, and traffic prioritisation enhance network security, stability, and efficiency for critical business operations.</p>
            <p>Enterprise network security protects data with firewalls, encryption, intrusion detection, and zero-trust access. Threat monitoring, endpoint security, and segmentation minimise risks, ensuring compliance, secure access, and business continuity against evolving cyber threats.</p>
            <p>VPNs provide encrypted connections for remote users and sites. Multi-factor authentication, strong encryption, and failover protect data, ensuring secure, reliable access while maintaining network performance and business productivity across distributed environments.</p>
          </ThreeTextBlocks>
      </BottomContainer>
      <div className="block lg:hidden">
      <ContainerThree>
        {/* Contact Us Section */}
        <div className="bg-gray-100 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-xl font-semibold text-[#336699] mb-4">
            Need More Information?
          </h3>
          <p className="text-gray-700 mb-4">
           Want to learn more about IoT in Warehousing and Logistics? Please get in touch with us!
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-[#336699] text-white font-medium px-6 py-3 rounded-lg 
                      hover:bg-[#d97706] transition duration-300 ease-in-out"
          >
            Contact Us
          </a>
        </div>
      </ContainerThree>
      </div>
    </>
  );
}