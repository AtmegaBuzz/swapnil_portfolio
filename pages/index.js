import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/navbar/navbar";
import Header from '../components/header/header';
import About from '../components/about/about';
import Services from '../components/myservices/services';
import Skills from '../components/myskills/skills';
import Contact from '../components/contact/contact';
import Portfolio from '../components/portfolio/portfolio';
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react';

export default function HomePage(){

  useEffect(()=>{

    Aos.init({
        duration:500,
        offset: 250,
    });

   },[])

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
