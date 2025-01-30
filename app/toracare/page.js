"use client";

import BottomContainer from '../components/BottomContainer';
import ContainerThree from '../components/ContainerThree';
import { TagUser,Lightbulb, Analytics, EyeIcon, Pound, } from "../components/Icons.jsx";
import ThreeTextBlocks from '../components/ThreeTextBlocks';
import HomePageTop from '../components/HomePageTop';

const icons = [
  <Analytics key="1" className="text-white" size={40} />,
  <EyeIcon key="2" className="text-white" size={40} />,
  <Pound key="3" className="text-white" size={40} />,
  <Lightbulb key="4" className="text-white" size={40} />,
];

export default function App() {
  return (
    <>
      <HomePageTop iconComponent={TagUser} imageAlt="Smart Retail" imageFill={true} imageStyle={{ objectFit: 'cover' }} imageClassName="opacity-100">
        <div className="text-white p-4 flex flex-col rounded-md lg:w-[35rem] px-10 md:mx-6 mb-4 sm:mb-0 bg-gray-800 bg-opacity-75">
          <h1 className="text-3xl text-orange-500 font-bold">Toracare</h1>
          <p className="mt-2 text-lg">ToraCare provides expert, Toranet-resourced support beyond manufacturer assistance, ensuring fast issue resolution, minimising TAC delays, and offering ongoing technical guidance tailored to each client's environment for seamless, long-term reliability and efficiency.</p>
        </div>
      </HomePageTop>
      <BottomContainer>
          <ThreeTextBlocks icons={icons}> 
            <p>ToraCare provides a dedicated, Toranet-resourced support service, ensuring customers receive the right level of assistance based on their unique needs. Our proactive approach builds long-term relationships, offering guidance beyond standard manufacturer support.</p>
            <p>With extensive technical expertise, we resolve most support cases without relying on manufacturer TAC, reducing delays and ensuring faster problem resolution. This minimises downtime and streamlines operations for businesses that depend on reliable connectivity.</p>
            <p>Engaging with manufacturer TAC can be time-consuming and frustrating. ToraCare eliminates this hassle by handling most issues in-house, only escalating when necessary for software bugs or RMAs, saving customers time and effort.</p>
            <p>ToraCare goes beyond troubleshooting by offering strategic technical advice tailored to each customer's environment. Clients can discuss broader IT challenges with experts who understand their specific infrastructure and operational requirements.</p>
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
           Want to learn more about IoT in Retail? Please get in touch with us!
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