import styles from './detailService.module.css'
import Image from 'next/image'

export default function DetailService(props){

    let redirectService = ()=>{
        window.location.href = props.redirectUrl
    }

    return(

        <div data-aos="flip-up" className={styles.workCont}>
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
                    <button className={styles.btn} onClick={redirectService}>More Info</button>
                    <div className={styles.after}></div>
                </div>
            </div>
        </div>

    )
}