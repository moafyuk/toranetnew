import Image from "next/image";
import TopContainer from '../components/TopContainer';
import BottomContainer from '../components/BottomContainer';
import ContainerThree from '../components/ContainerThree';
import { Lightbulb, Analytics, EyeIcon, ShieldIcon, } from "../components/Icons.jsx";
import ThreeTextBlocks from '../components/ThreeTextBlocks';

const icons = [
  <EyeIcon key="1" className="text-white" size={40} />,
  <Analytics key="2" className="text-white" size={40} />,
  <ShieldIcon key="3" className="text-white" size={40} />,
  <Lightbulb key="4" className="text-white" size={40} />,
];

export default function Page() {

return (
    <>
    <TopContainer imageSrc="/bimage-gs.png">
        <div className="text-white p-4 flex flex-col rounded-md lg:w-[35rem] px-10 md:mx-6 mb-4 sm:mb-0 bg-gray-800 bg-opacity-75">
          <h1 className="text-3xl text-orange-500 font-bold">Building Smarter Solutions</h1>
          <p className="mt-2 text-lg">ToraSense, built by Toranet, is designed to support your business at every stage. We are not just another tech company we are here to help you grow. Together, we can simplify your operations and find smarter ways to improve efficiency. We want your business to thrive and stay ahead in a competitive world.</p>
        </div>
    </TopContainer>
    <BottomContainer>
      <ThreeTextBlocks icons={icons}>
          <p>ToraSense offers advanced IoT solutions that streamline your operations by automating processes and providing real-time insights. This reduces manual labour, minimises errors, and significantly boosts productivity across your business.</p>
          <p>Our predictive analytics anticipate maintenance needs before issues arise. ToraSense helps prevent equipment failures, reduces downtime, and lowers maintenance costs, ensuring continuous and efficient operations.</p>
          <p>We prioritise safeguarding your IT environment. ToraSense integrates IoT solutions that enhance efficiency while maintaining the highest security standards to protect your data, networks, and overall IT infrastructure from cyber threats.</p>
          <p>ToraSense helps you track and optimise energy and material usage. By reducing operational costs and enhancing sustainability, we contribute to your environmental goals and improve your bottom line.</p>
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
        )
    }