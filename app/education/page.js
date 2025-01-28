import TopContainer from '../components/TopContainer';
import BottomContainer from '../components/BottomContainer';
import ContainerThree from '../components/ContainerThree';
import { Lightbulb, Analytics, EyeIcon, Temp, } from "../components/Icons.jsx";
import ThreeTextBlocks from '../components/ThreeTextBlocks';

const icons = [
  <Analytics key="1" className="text-white" size={40} />,
  <Lightbulb key="2" className="text-white" size={40} />,
  <EyeIcon key="3" className="text-white" size={40} />,
  <Temp key="4" className="text-white" size={40} />,
];

export default function App() {
  return (
    <>
      <TopContainer imageSrc="/education.webp" imageAlt="Education Image" imageFill={true} imageStyle={{ objectFit: 'cover' }} imageClassName="opacity-100">
        <div className="text-white p-4 flex flex-col rounded-md lg:w-[35rem] px-10 md:mx-6 mb-4 sm:mb-0 bg-gray-800 bg-opacity-75">
          <h1 className="text-3xl text-orange-500 font-bold">Education</h1>
          <p className="mt-2 text-lg">ToraSense revolutionises education with smart IoT solutions that create safer, more efficient learning environments, personalise student experiences, and optimise resource management for schools and universities.</p>
        </div>
      </TopContainer>
      <BottomContainer>
          <ThreeTextBlocks icons={icons}> 
            <p>IoT sensors can monitor and optimise energy usage in classrooms, laboratories, and dormitories, leading to cost savings and sustainability.</p>
            <p>Connected devices can track the usage of resources like computers, and lab equipment, ensuring efficient utilisation and inventory management.</p>
            <p>Connected cameras and sensors can provide real-time monitoring of the campus, alerting authorities to any suspicious activity.</p>
            <p>IoT sensors can track air quality, temperature, and humidity levels in classrooms, ensuring a healthy learning environment.</p>
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
      </ContainerThree>
      </div>
    </>
  );
}