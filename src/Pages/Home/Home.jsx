import Carousel from "../../components/Carousel/Carousel";
import Navbar from "../../components/Navbar/Navbar";
import OurClients from "../../components/OurClients/OurClients";
import OurServices from "../../components/OurServices/OurServices";
import HowToStartTimeline from "../../components/Timeline/Timeline"
export default function Home() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <OurClients />
      <OurServices />
      <HowToStartTimeline />
    </div>
  );
}