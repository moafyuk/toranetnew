import Link from "next/link";
import TopContainer from './components/TopContainer';
import BottomContainer from "./components/BottomContainer";
import ContainerThree from "./components/ContainerThree";
import { Lightbulb, Analytics, ShieldIcon, Pound } from "./components/Icons.jsx";
import ThreeTextBlocks from './components/ThreeTextBlocks';
import ClickableImage from "./components/ClickableImage";

const icons = [
  <Analytics key="1" className="text-white" size={40} />,
  <ShieldIcon key="2" className="text-white" size={40} />,
  <Pound key="3" className="text-white" size={45} />,
  <Lightbulb key="4" className="text-white" size={40} />,
];

export default function Home() {
  return (
    <div>
      <TopContainer>
        <div className="flex flex-col lg:flex-row items-center gap-6 p-6 rounded-md lg:w-[50rem] px-10 md:mx-6 mb-4 sm:mb-0 bg-gray-800 bg-opacity-75">
          {/* Text Section */}
          <div className="text-white">
            <h1 className="text-3xl text-orange-500 font-bold">Welcome to ToraSense</h1>
            <p className="mt-2 text-lg">
              ToraSense delivers cutting-edge IoT solutions that provide real-time insights, optimise operational efficiency, and enhance safety across industries, empowering businesses to make smarter decisions and drive growth.
            </p>
          </div>

          {/* Image Section (Hidden on Mobile) */}
          <div className="hidden lg:block flex-shrink-0 opacity-100 bg-opacity-100 bg-gray-800 ">
            <ClickableImage src="/IOT_Image_2D.png" alt="IoT Data Flow" width={250} height={250} className="rounded-lg cursor-pointer " />
          </div>
        </div>
      </TopContainer>

      <BottomContainer>
        <ThreeTextBlocks icons={icons}>
          <p>Use real-time data analytics to anticipate maintenance needs and proactively address potential issues before they disrupt operations.</p>
          <p>Integrating IoT raises security concerns. We prioritise protecting your IT environment, enhancing efficiency while safeguarding your data and infrastructure.</p>
          <p>Reduce labour costs and increase accuracy by automating routine inspections and environmental monitoring, freeing up your team to focus on strategic tasks.</p>
          <p>Track and optimise the usage of energy and materials, driving down operational costs and enhancing sustainability.</p>
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
