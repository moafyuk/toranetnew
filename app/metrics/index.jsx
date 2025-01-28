import Clarity from "./Clarity";
import Google from "./Google";
import Matomo from "./Matomo";
import Mautic from "./Mautic";

export default function Metrics() {
  return (
    <>
      <Clarity />
      <Google />
      <Mautic />
      <Matomo />
    </>
  );
}