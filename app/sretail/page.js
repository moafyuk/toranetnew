import TopContainer from '../components/TopContainer';
import BottomContainer from '../components/BottomContainer';
import ContainerThree from '../components/ContainerThree';
import { Lightbulb, Analytics, EyeIcon, Pound, } from "../components/Icons.jsx";
import ThreeTextBlocks from '../components/ThreeTextBlocks';

const icons = [
  <Analytics key="1" className="text-white" size={40} />,
  <EyeIcon key="2" className="text-white" size={40} />,
  <Pound key="3" className="text-white" size={40} />,
  <Lightbulb key="4" className="text-white" size={40} />,
];

export default function App() {
  return (
    <>
      <TopContainer imageSrc="/smart-retail.webp" imageAlt="Smart Retail" imageFill={true} imageStyle={{ objectFit: 'cover' }} imageClassName="opacity-100">
        <div className="text-white p-4 flex flex-col rounded-md lg:w-[35rem] px-10 md:mx-6 mb-4 sm:mb-0 bg-gray-800 bg-opacity-75">
          <h1 className="text-3xl text-orange-500 font-bold">Smart Retail</h1>
          <p className="mt-2 text-lg">ToraSense empowers smart retail with IoT solutions that personalise the shopping experience, optimise inventory management, and streamline store operations, driving increased customer satisfaction and operational efficiency.</p>
        </div>
      </TopContainer>
      <BottomContainer>
          <ThreeTextBlocks icons={icons}> 
            <p>Use real-time data analytics to anticipate maintenance needs and proactively address potential issues before they disrupt operations.</p>
            <p>Protect your workforce and assets with our collision sensors, designed to prevent accidents and ensure compliance with safety regulations.</p>
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