import styles from './navbar.module.css'
import stylesAbout from '../about/about.module.css';
import stylesContact from '../contact/contact.module.css';
import stylesMyservices from '../myservices/services.module.css';
import stylesMyskills from '../myskills/skills.module.css';

import MenuIcon from '@mui/icons-material/Menu';
import {scroller} from 'react-scroller';

export default function Navbar(){

    let scrollInfo = {
        "home":"navbar-nav",
        "about":stylesAbout.about,
        "services":stylesMyservices.services,
        "portfolio":stylesMyservices.services,
        "myskills":stylesMyskills.skills,
        "contact":stylesContact.contacts
    }

    let scrollTo = (whereTogo)=>{
        let offset = document.getElementsByClassName(scrollInfo[whereTogo])[0].offsetTop
        window.scrollTo(0,offset-100)
    }

    return(
        <nav className="navbar p-3 navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand" href="#">Swapnil Shinde</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <MenuIcon style={{color:"white"}}/>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a onClick={()=>{scrollTo("home")}} className="nav-link" >Home</a>
                        </li>
                        <li className="nav-item">

                            <a onClick={()=>scrollTo("about")}  className="nav-link">about me</a>

                        </li>
                        <li className="nav-item">

                            <a onClick={()=>scrollTo("services")}  className="nav-link">services</a>

                        </li>
                        <li className="nav-item">
 
                            <a onClick={()=>scrollTo("myskills")}  className="nav-link">how work</a>

                        </li>
                        <li className="nav-item">

                            <a onClick={()=>scrollTo("portfolio")}  className="nav-link">portfolio</a>      

                        </li>
                        <li className="nav-item">

                                <a onClick={()=>scrollTo("contact")}  className="nav-link">contact</a>

                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}