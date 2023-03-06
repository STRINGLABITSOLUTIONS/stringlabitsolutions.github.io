import Hero from './Hero';
import Service from './Service';
import Team from './Team';
import Pricing from './Pricing';
import LogoCloud from './LogoCloud';
import Contact from './Contact';
import Product from './Product';
import Footer from '../../component/Footer';
import NavBar from '../../component/NavBar';

export default function Home() {
  return (
    <div className='bg-white dark:bg-gray-900'>
      <NavBar />
      <Hero />
      <Service />
      <Product />
      <Pricing />
      <Team />
      <LogoCloud />
      <Contact />
      <Footer />
    </div>
  );
}
