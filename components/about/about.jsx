import styles from './about.module.css'
import Image from "next/image"


export default function About(){

    return(
        <div className={styles.about}>
                
                <div className={styles.about_cont}>
                    <div data-aos="fade-right" data-aos-once="true" className={styles.heading}>About Me</div>
                    <div data-aos="fade-right" data-aos-once="true" className={styles.about_content}>
                        <p className={styles.sub_about}>Hi,My name is Swapnil Shinde, Im a Fullstack Developer and a Cyber Security enthusiast from Maharashtra, India</p>
                        <p className={styles.sub_sub_about}>Interest in Cyber Security and Understood OWASP top 10 which helped me in developing secure backends.</p>
                        <p className={styles.sub_sub_about}>I write about Cyber Security on my <a target="_blank" href="https://www.instagram.com/cyber.spoof/">instagram</a> blogpost to share my knowledge and to contribute in spreading awerness.</p>
                        <p className={styles.sub_sub_about}>Some other niches are working as a <a href="https://www.fiverr.com/shindeswapnil">freelancer</a> and part time python dev intern at Vscale</p>
                        <p className={styles.sub_sub_about}>I'm a fullstack developer specialised in frontend (<a target="_blank" href="https://reactjs.org/">react</a>) and backend (<a target="_blank" href="https://www.djangoproject.com/">django</a>), also worked in web scrapping and have experience in creating bots,crawlers for Major platforms</p>
                        
                        <a className={styles.resume} href="/resume.pdf" target="_blank">RESUME</a>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-once="true" className={styles.image_cont}>
                    <div className={styles.img_sizer}>
                        <Image className={styles.image} src="/profilepic1.jpeg" width="410px" height="540px" alt=""/>
                    </div>
                </div>
                
        </div>
    );
}