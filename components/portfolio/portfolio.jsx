import styles from './portfolio.module.css';
import DetailPortfolio from './detailView/detailPortfolio';
import { useState } from 'react';

export default function Portfolio(){

    const [inDetail,setInDetail] = useState(false)

    let showcase = ()=>{
        setInDetail(true)
    }


    return(
        <div className={styles.portfolio}>
            {inDetail && <DetailPortfolio setInDetail={setInDetail}/>}
            <div className={styles.heading}><p>Projects</p></div>
            <div className={styles.imgContainer}>
                <div onClick={()=>{showcase()}} className={`${styles.img} ${styles.img1}`}>
                    <p>About me</p>
                </div>
                
                <div onClick={()=>{showcase()}} className={`${styles.img} ${styles.img2}`}>
                    <p>About me</p>
                </div>
                
                <div onClick={()=>{showcase()}} className={`${styles.img} ${styles.img3}`}>
                    <p>About me</p>
                </div>
                
                <div onClick={()=>{showcase()}} className={`${styles.img} ${styles.img4}`}>
                    <p>About me</p>
                </div>
                
                <div onClick={()=>{showcase()}} className={`${styles.img} ${styles.img5}`}>
                    <p>About me</p>
                </div>
            </div>
        </div>
    )
}