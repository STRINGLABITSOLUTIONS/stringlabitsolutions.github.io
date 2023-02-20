import Hero from "../component/Hero";
import Service from "../component/Service";
import Team from "../component/Team";
import Pricing from "../component/Pricing";
import LogoCloud from "../component/LogoCloud";
import Contact from "../component/Contact";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <Hero/>
      <Service/>
      <Team/>
      <Pricing/>
      <LogoCloud/>
      <Contact/>
    </div>
  )
}
