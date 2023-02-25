import Hero from "../component/Hero";
import Service from "../component/Service";
import Team from "../component/Team";
import Pricing from "../component/Pricing";
import LogoCloud from "../component/LogoCloud";
import Contact from "../component/Contact";
import Product from "../component/Product";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";

export default function Home() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <NavBar/>
      <Hero/>
      <Service/>
      <Product/>
      <Pricing/>
      <Team/>
      <LogoCloud/>
      <Contact/>
      <Footer/>
    </div>
  )
}
