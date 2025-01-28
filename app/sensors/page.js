import TopContainer from '../components/TopContainer';
import SensorPage from '../components/SensorPage';

const backgroundImageStyle = {
    backgroundImage: "url('/bimage-1-gs.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

export default function Page() {

    return (
        <>
        <div style={backgroundImageStyle} className="w-full py-8">
            <SensorPage />
        </div>
        </>
    )
}