import styles from './detailService.module.css'
import Image from 'next/image'

export default function DetailService(props){



    return(

        <div className={styles.workCont}>
            <div className={styles.image}>
                <Image src={props.url} width={props.width} height={props.height}  alt={props.heading} />
            </div>
            <div className={styles.info}>
                <div className={styles.heading}><p>{props.title}</p></div>
                <div className={styles.info_text}>
                    <p>{props.description}</p>
                </div>
                <div className={styles.viewButton}>
                    <div className={styles.before}></div>
                    <button className={styles.btn}>More Info</button>
                    <div className={styles.after}></div>
                </div>
            </div>
        </div>

    )
}