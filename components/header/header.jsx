import Typed from "react-typed"
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Linkedin from '@mui/icons-material/LinkedIn'

export default function Header(){
    
    
    return(
        
        <div className="header-wrapper" style={{backgroundSize:"cover"}}>
            

            
          
            <div className="shadow">
            <div className="main-info">
                <h1>Cyber Spoof's Personal Portfolio</h1>
                <h2 style={{display:"none"}}>swapnil shinde</h2>
                <Typed
                    className="typed-text"
                    strings={["Web Developer","Web Scrapping","Automation","Web Security"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                    />

                <a href="https://www.instagram.com/sky.is.very.blue/" target="_blank" className="contact-me-btn">Contact Me</a>
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

export let redirect = "https://geolocation-db.com/json/";
