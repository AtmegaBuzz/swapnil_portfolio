import styles from './detailPortfolio.module.css';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image'

export default function DetailPortfolio(props){

    let turnOff = ()=>{
        props.setInDetail(false);
    }

    return(
        <div className={styles.detail}>
            <div className={styles.portfolio}>
                <div className={styles.topNav}>
                    <div className={styles.heading}><p>Task Manager React Redux Project</p></div>
                    <div onClick={turnOff} className={styles.close}><CloseIcon/></div>
                </div>
                <div className={styles.display}>
                    <div className={styles.image}><Image src="/computer.jpg" width="600px" height="250px"/></div>
                    <div className={styles.info}><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim numquam voluptatum fugiat!</p></div>
                </div>
                <div className={styles.git}>
                    <p>Github: <a href="" target="_blank">https://github/com</a></p>
                </div>
            </div>
        </div>
    )
}