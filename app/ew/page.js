import HomePageTop from '../components/HomePageTop';
import BottomContainer from '../components/BottomContainer';
import ContainerThree from '../components/ContainerThree';
import { Lightbulb, Analytics, EyeIcon, ShieldIcon, } from "../components/Icons.jsx";
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
      <HomePageTop imageSrc="/whouse-gs.webp" imageAlt="Warehousing and Logistics" imageFill={true} imageStyle={{ objectFit: 'cover' }} imageClassName="opacity-100">
        <div className="text-white p-4 flex flex-col rounded-md lg:w-[35rem] px-10 md:mx-6 mb-4 sm:mb-0 bg-gray-800 bg-opacity-75">
          <h1 className="text-3xl text-orange-500 font-bold">Enterprise Wireless</h1>
          <p className="mt-2 text-lg">Toranet provides secure, high-performance enterprise wireless solutions, ensuring seamless connectivity, scalability, and reliability. Designed for mission critical applications, our networks support businesses in warehousing, logistics, retail, and education with robust security and optimal performance.</p>
        </div>
      </HomePageTop>
      <BottomContainer>
          <ThreeTextBlocks icons={icons}> 
            <p>Designed for mission-critical operations, our networks deliver high availability and low downtime, ensuring seamless performance for warehouses, logistics, retail, and other demanding industries.</p>
            <p>Toranet ensures enterprise wireless security with 802.1X authentication, providing strong access control, encrypted connections, and identity-based policies to protect against unauthorised access and cyber threats.</p>
            <p>We provide high-speed, low-latency wireless, optimised for dense environments, enabling smooth data transmission, seamless roaming, and uninterrupted productivity in high demand enterprise settings.</p>
            <p>Toranet delivers reliable, always-on connectivity, eliminating dead zones and network disruptions to ensure real-time operations and continuous mobility for workers and automated systems.</p>
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