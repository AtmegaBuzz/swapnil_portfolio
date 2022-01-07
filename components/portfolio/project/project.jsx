import styles from './project.module.css'
import Image from 'next/image';
export default function Project(props){

    const github = ()=>{
        window.location.href = props.github
    }
    const view = ()=>{
        window.location.href = props.viewsite
    }

    return(
        <div data-aos="fadeout"  className={styles.project}>
                    <div className={styles.Image} style={{backgroundImage:`url(${props.url})`}}>
                        
                    </div>
                    <div className={styles.info}>
                        <div className={styles.infoText}>
                            <p className={styles.projectheading}>{props.heading}</p>
                            <p className={styles.text}>{props.text}</p>
                        </div>
                        <div className={styles.btn}>
                            <button onClick={view}>View Site</button>
                            <button onClick={github}>View Github</button>
                        </div>
                    </div>
        </div> 
    )
}