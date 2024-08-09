
import './globals.css';
import Bodysection from './landingpage/Bodysection';
import Footer from './landingpage/footer';
import Hero from './landingpage/Hero';
import Navabar from './landingpage/Navbar';



export default function Home() {
  return (
    <main >
      <Navabar/>
      <Hero/>
      <Bodysection/>
      <Footer/>
    </main>
  );
}
