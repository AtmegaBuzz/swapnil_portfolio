import styles from './navbar.module.css'
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'

export default function Navbar(){

    let scrollInfo = {
        "home":0,
        "about":522,
        "services":1236,
        "myskills":1842,
    }

    let scrollTo = (scollclass)=>{
        window.scrollTo(0,scollclass);
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
                            <a onClick={scrollTo} className="nav-link" >Home</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={scrollTo}  className="nav-link">about me</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={scrollTo}  className="nav-link">services</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={scrollTo}  className="nav-link">how work</a>
                        </li>
                        <li className="nav-item">
                                <a onClick={scrollTo}  className="nav-link">portfolio</a>      
                        </li>
                        <li className="nav-item">
                            <Link href="/contact">
                                <a onClick={scrollTo}  className="nav-link">contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}