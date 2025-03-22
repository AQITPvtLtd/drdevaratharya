import About from "@/components/homepage/About";
import Banner from "@/components/homepage/Banner";
import Explore from "@/components/homepage/Explore";
import OncologyServices from "@/components/homepage/OncologyServices";

export default function Home() {
  return (
    <div>

      <Banner />
      <About />
      <OncologyServices />
      {/* <BackgroundPaths /> */}
      <Explore />
    </div>
  );
}
