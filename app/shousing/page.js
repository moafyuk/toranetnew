import TopContainer from '../components/TopContainer';
import BottomContainer from '../components/BottomContainer';
import ContainerThree from '../components/ContainerThree';
import { Lightbulb, Analytics, Temp, Pound, } from "../components/Icons.jsx";
import ThreeTextBlocks from '../components/ThreeTextBlocks';

const icons = [
  <Pound key="1" className="text-white" size={40} />,
  <Temp key="2" className="text-white" size={40} />,
  <Analytics key="3" className="text-white" size={40} />,
  <Lightbulb key="4" className="text-white" size={40} />,
];

export default function App() {
  return (
    <>
      <TopContainer imageSrc="/social-housing.webp" imageAlt="Social Housing" imageFill={true} imageStyle={{ objectFit: 'cover' }} imageClassName="opacity-100">
        <div className="text-white p-4 flex flex-col rounded-md lg:w-[35rem] px-10 md:mx-6 mb-4 sm:mb-0 bg-gray-800 bg-opacity-75">
          <h1 className="text-3xl text-orange-500 font-bold">Social Housing</h1>
          <p className="mt-2 text-lg">ToraSense enhances social housing with smart IoT solutions that ensure safer, more comfortable living environments while optimising energy efficiency and reducing maintenance costs for housing providers.</p>
        </div>
      </TopContainer>
      <BottomContainer>
          <ThreeTextBlocks icons={icons}> 
            <p>Implementing IoT energy management systems reduces energy consumption, lowering operational costs for housing authorities and tenants, resulting in significant financial savings and more affordable housing options.</p>
            <p>IoT sensors monitor air quality, temperature, and humidity, enhancing tenant comfort by ensuring healthy living conditions and improving satisfaction within social housing units and communities.</p>
            <p>Real-time monitoring predicts maintenance needs, reducing unexpected failures and repair costs, enhancing operational efficiency, and significantly extending the lifespan of assets in social housing properties.</p>
            <p>Continuous monitoring helps meet environmental standards, supports sustainability initiatives, and enhances public image by ensuring social housing complies with regulations and reduces its carbon footprint.</p>
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
           Want to learn more about IoT in Social Housing? Please get in touch with us!
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