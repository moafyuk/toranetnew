import PropTypes from 'prop-types';
import { FaRegLightbulb, FaRegSmile, FaRegStar } from 'react-icons/fa';

export default function ThreeTextBlocks({ children, icons }) {
  return (
    <div className="flex flex-col flex-wrap items-stretch lg:flex-row justify-around items-center py-8 px-4">
      {children.map((child, index) => (
        <div
          key={index}
          className="flex flex-col min-w-56 items-center p-4 rounded-md text-center w-full lg:w-1/6 mb-4 lg:mb-0 max-w-md"
          style={{
            backgroundImage: index % 2 === 0 ? 'url("/bimage.png")' : 'url("/bimage-1.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay',
            backgroundColor: index % 2 === 0 ? 'rgba(51, 102, 153, 0.7)' : 'rgba(217, 119, 6, 0.7)',
            filter: 'brightness(0.7)',
          }}
        >
          <div className="mb-4">
            {icons && icons[index] ? icons[index] : <FaRegStar />} {/* Fallback icon */}
          </div>
          <div
            className="text-lg font-medium text-white"
            style={{
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Adds a shadow to the text
              fontSize: '1rem', // Increase font size slightly for better readability
            }}
          >
            {child}
          </div>
        </div>
      ))}
    </div>
  );
}

ThreeTextBlocks.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  icons: PropTypes.arrayOf(PropTypes.element),
};