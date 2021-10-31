import styles from './navbar.module.css'
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar(){


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
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">about me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">how work</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}