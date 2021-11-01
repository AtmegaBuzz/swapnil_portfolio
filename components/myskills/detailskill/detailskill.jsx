import styles from './detailskill.module.css'


export default function DetailSkill(props){


    return(
        <div className={styles.container}>
            <div className={styles.info}>
                <p className={styles.heading}>{props.title}</p>
                <p className={styles.percentvalue}>{props.percentage}%</p>
            </div>
            <div className={styles.line}>
                <div className={styles.lineColor} style={{width:`${props.percentage}%`}}></div>
            </div>
        </div>
    )
}