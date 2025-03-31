import About from "@/components/homepage/About";
import Appointment from "@/components/homepage/Appointment";
import Banner from "@/components/homepage/Banner";
import Explore from "@/components/homepage/Explore";
import OncologyServices from "@/components/homepage/OncologyServices";
import Faq from "./about/Faq";

export default function Home() {
  return (
    <div className="dark:bg-white">

      <Banner />
      <About />
      <OncologyServices />
      {/* <BackgroundPaths /> */}
      <Explore />
      <Appointment />
      <Faq />
    </div>
  );
}
