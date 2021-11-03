import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar/navbar";
import Header from '../components/header/header';
import About from '../components/about/about';
import Services from '../components/myservices/services';
import Skills from '../components/myskills/skills';
import Contact from '../components/contact/contact';
import Portfolio from '../components/portfolio/portfolio';
export default function HomePage(){



  return(
    <>
      
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Skills/>
      <Portfolio/>
      <Contact/>
    </>
  );
}