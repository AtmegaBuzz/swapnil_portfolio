import Typed from "react-typed"
import Particles from 'react-particles-js';
import { useEffect } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Linkedin from '@mui/icons-material/LinkedIn'

export default function Header(){
  
  

    

    return(

        <div className="header-wrapper" style={{backgroundSize:"cover"}}>
            

            
          
            <div className="shadow">
            <div className="main-info">
                <h1>Cyber Spoof's Personal Portfolio</h1>
                <h2 style={{display:"none"}}>cyber spoof personal portfolio website</h2>
                <Typed
                    className="typed-text"
                    strings={["My Portfolio","React Js","Django Framework","Django Rest Framework","Web Scrapping","Automation"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <a href="https://www.instagram.com/swapnil.shinde.s/" target="_blank" className="contact-me-btn">Contact Me</a>
                <div className="links">
                    <a target="_blank" href="https://github.com/AtmegaBuzz"><GitHubIcon className="sublinks"/></a>
                    <a target="_blank" href="https://www.instagram.com/cyber.spoof/"><InstagramIcon className="sublinks"/></a>
                    <a target="_blank" href="https://www.linkedin.com/in/swapnil-shinde-5ba45118b/"><Linkedin className="sublinks"/></a>
                </div>
            </div>
            </div>
        </div>

    );
}