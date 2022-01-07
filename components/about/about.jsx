import styles from './about.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Linkedin from '@mui/icons-material/LinkedIn'
import Image from "next/image"


export default function About(){

    return(
        <div className={styles.about}>
                
                <div className={styles.about_cont}>
                    <div data-aos="fade-up" className={styles.heading}>About Me</div>
                    <div data-aos="fade-up" className={styles.about_content}>
                        <p className={styles.sub_about}>Hi,My name is Swapnil Shinde, Im a Fullstack Developer and a Cyber Security enthusiast from Maharashtra, India</p>
                        <p className={styles.sub_sub_about}>Interest in Cyber Security and Understood OWASP top 10 which helped me in developing secure backends.</p>
                        <p className={styles.sub_sub_about}>I write about Cyber Security on my <a target="_blank" href="https://www.instagram.com/cyber.spoof/">instagram</a> blogpost to share my knowledge and to contribute in spreading awerness.</p>
                        <p className={styles.sub_sub_about}>I'm a fullstack developer specialised in frontend (<a target="_blank" href="https://reactjs.org/">react</a>) and backend (<a target="_blank" href="https://www.djangoproject.com/">django</a>), also worked in web scrapping and have experience in creating bots,crawlers for Major platforms</p>
                        <div className={styles.links}>
                                <a target="_blank" href="https://github.com/AtmegaBuzz"><GitHubIcon className={styles.sublinks}/></a>
                                <a target="_blank" href="https://www.instagram.com/cyber.spoof/"><InstagramIcon className={styles.sublinks}/></a>
                                <a target="_blank" href="https://www.linkedin.com/in/swapnil-shinde-5ba45118b/"><Linkedin className={styles.sublinks}/></a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down" className={styles.image_cont}>
                    <div className={styles.img_sizer}>
                        <Image className={styles.image} src="/profilepic1.jpeg" width="410px" height="540px" alt=""/>
                    </div>
                </div>
                
        </div>
    );
}