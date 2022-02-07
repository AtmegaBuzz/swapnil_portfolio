import styles from './project.module.css'
import Image from 'next/image';
import { WindowSharp } from '@mui/icons-material';
export default function Project(props){

    const github = ()=>{
        window.location.href = props.github
    }
    const view = ()=>{
        window.location.href = props.viewsite
    }
    const noView = ()=>{
        window.alert("Site Not Deployed")
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
                            {
                                props.viewsite==null 
                                ? <button onClick={noView}>View Site</button>
                                : <button onClick={view}>View Site</button>
                            }
                            <button onClick={github}>View Github</button>
                        </div>
                    </div>
        </div> 
    )
}