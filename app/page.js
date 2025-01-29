import Link from "next/link";
import HomePageTop from "./components/HomePageTop";
import BottomContainer from "./components/BottomContainer";
import ContainerThree from "./components/ContainerThree";
import { Lightbulb, WiFi, Mobile, OnboardIcon } from "./components/Icons.jsx";
import ThreeTextBlocks from './components/ThreeTextBlocks';
import Image from "next/image";

const icons = [
  <WiFi key="1" className="text-white" strokeWidth={1} size={40} />,
  <Mobile key="2" className="text-white" stroke="#ffffff" strokeWidth={2} size={43} />,
  <OnboardIcon key="3" fill="#ffffff" stroke="#ffffff" size={45} />,
  <Lightbulb key="4" className="text-white" size={40} />,
];

export default function Home() {
  return (
    <div>
      <HomePageTop imageSrc="/toranetwh-gs.png" imageAlt="Smart Retail" imageFill={true} imageStyle={{ objectFit: 'cover' }} imageClassName="opacity-100">
        <div className="flex flex-col lg:flex-row items-center gap-6 p-6 rounded-md lg:w-[50rem] px-10 md:mx-6 mb-4 sm:mb-0 bg-gray-800 bg-opacity-75">
          {/* Text Section */}
          <div className="text-white">
            <h1 className="text-3xl text-orange-500 font-bold">Welcome to Toranet</h1>
            <p className="mt-2 text-lg">
            Toranet provides enterprise grade secure wireless and wired networks, seamless mobile device onboarding, and cutting edge ToraSense IoT solutions, empowering businesses to optimise performance, improve connectivity, and streamline operations with advanced mobile device integration.
            </p>
          </div>

          {/* Image Section (Hidden on Mobile) */}
          <div className="hidden lg:block flex-shrink-0">
            <Image 
              src="/safety_alt.png" 
              alt="IoT Data Flow" 
              width={250} 
              height={250} 
              className="rounded-lg cursor-pointer"
            />
          </div>
        </div>
      </HomePageTop>

      <BottomContainer>
        <ThreeTextBlocks icons={icons}>
          <p>We deliver secure, enterprise-grade wired and wireless networks designed to ensure reliable connectivity and support for critical operations.</p>
          <p>Our solutions include mobile devices tailored for efficiency in industries like warehousing, logistics, and retail.</p>
          <p>We streamline mobile device onboarding with secure, user-friendly software and workflows that ensure rapid deployment and minimal downtime.</p>
          <p>Our innovative ToraSense platform leverages real-time data from IoT sensors to optimise performance and enable predictive maintenance.</p>
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
    </div>
  );
}
