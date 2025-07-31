import About from "@/components/homepage/About";
import Appointment from "@/components/homepage/Appointment";
import Banner from "@/components/homepage/Banner";
import Explore from "@/components/homepage/Explore";
import OncologyServices from "@/components/homepage/OncologyServices";
import Faq from "./about/Faq";

export const metadata = {
  meta_title: "Dr. Devavrat Arya | Medical Oncologist in New Delhi | Arya Oncology",
  meta_desc: "Consult Dr. Devavrat Arya, a leading medical oncologist in New Delhi at Arya Oncology, offering personalized cancer treatment and compassionate care.",
  keyword: [
    "medical oncologist new delhi",
    "medical oncologist lajpat nagar",
    "medical oncologist south delhi",
    "cancer specialist new delhi",
    "oncology doctor lajpat nagar",
    "chemotherapy expert south delhi",
    "cancer treatment new delhi",
    "oncology consultation lajpat nagar",
    "tumor specialist south delhi",
    "Arya Oncology delhi"
  ]

};

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
