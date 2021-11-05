import styles from './navbar.module.css'
import stylesAbout from '../about/about.module.css';
import stylesContact from '../contact/contact.module.css';
import stylesMyservices from '../myservices/services.module.css';
import stylesMyskills from '../myskills/skills.module.css';
import stylesPortfolio from '../portfolio/portfolio.module.css'

import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';

export default function Navbar(){

    let scrollInfo = {
        "home":"navbar-nav",
        "about":stylesAbout.about,
        "services":stylesMyservices.services,
        "portfolio":stylesPortfolio.portfolio,
        "myskills":stylesMyskills.skills,
        "contact":stylesContact.contacts,
    }

    let scrollTo = (whereTogo,e)=>{

        let activeElement = document.getElementsByClassName("active")[0];
        activeElement.classList.remove("active");

        e.target.classList.toggle("active")
        let offset = document.getElementsByClassName(scrollInfo[whereTogo])[0].offsetTop
        window.scrollTo(0,offset-100)
    }

    return(
        <nav className="navbar p-3 navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="navbar-brand">
                    <Image src="/logo.png" width="45px" height="45px"/>
                    <div className="headingCont">
                        <span>Cyber Spoof</span>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <MenuIcon style={{color:"white"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a onClick={(e)=>{scrollTo("home",e)}} className="nav-link" >Home</a>
                        </li>
                        <li className="nav-item">

                            <a onClick={(e)=>scrollTo("about",e)}  className="nav-link">about me</a>

                        </li>
                        <li className="nav-item">

                            <a onClick={(e)=>scrollTo("services",e)}  className="nav-link">services</a>

                        </li>
                        <li className="nav-item">
                            <a onClick={(e)=>scrollTo("myskills",e)}  className="nav-link">how work</a>
                        </li>
                        <li className="nav-item">

                            <a onClick={(e)=>scrollTo("portfolio",e)}  className="nav-link">portfolio</a>      

                        </li>
                        <li className="nav-item">

                                <a onClick={(e)=>scrollTo("contact",e)}  className="nav-link">contact</a>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}