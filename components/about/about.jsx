import styles from './about.module.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from "next/image"

export default function About(){

   
    

    return(
        <div className={styles.about}>
                
                <div className={styles.about_cont}>
                    <div className={styles.heading}>About Me</div>
                    <div className={styles.about_content}>
                        <p className={styles.sub_about}>Im a Backend Developer and a Cyber Security Anthusiast from Maharashtra, India</p>
                        <p classNames={styles.sub_sub_about}> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, error. Laudantium adipisci enim delectus veniam voluptatum.</p>
                        <p classNames={styles.sub_sub_about}>  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ullam similique harum ea veniam impedit quisquam temporibus possimus at. Dignissimos nemo consectetur repellat modi veniam magnam voluptates nam aspernatur? Itaque, corrupti cupiditate?</p>
                        <p classNames={styles.sub_sub_about}>  Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident corporis itaque, sapiente consequuntur ipsum sit sunt!</p>
                        <div className={styles.links}>
                                <a href=""><GitHubIcon className={styles.sublinks}/></a>
                                <a href=""><InstagramIcon className={styles.sublinks}/></a>
                        </div>
                    </div>
                </div>
                <div className={styles.image_cont}>
                    <Image className={styles.image} src="/myimg1round.jpg" width="500px" height="520px" alt=""/>
                </div>
                
        </div>
    );
}