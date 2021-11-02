import styles from './skills.module.css'
import DetailSkill from './detailskill/detailskill';


export default function Skills(){

    const skills = [
        {
            id:1,
            title:"html",
            percentage:80
        },
        {
            id:2,
            title:"css",
            percentage:65
        },
        {
            id:3,
            title:"javascript",
            percentage:84
        },
        {
            id:4,
            title:"python",
            percentage:95
        },
        {
            id:5,
            title:"MySql",
            percentage:60
        }
    ]

    return(
        <div className={styles.skills}>
            <div className={styles.heading}>
                <p className={styles.bigheading}>My Skills</p>
                <div className={styles.subheading}>
                    <div className={styles.line}></div>
                        <p>what i know</p>
                    <div className={styles.line}></div>
                </div>
            </div>

            <div className={styles.info}>
                <div className={styles.textskills}>
                    <div className={styles.infoheading}>My Skills and Experience</div>
                    <p className={styles.infotext}>Worked in Django and have a deep understanding of backend and web technologies such as Apis, token authentication, decentralized database, and security mechanisms, I also have a grip on the Next Js Framework for Seo Optimized web apps in the frontend. <br /><br /> Have a understanding of deploying the application in Microsoft Azure and Digital Ocean.</p>
                    <button className={styles.btn}>Read More</button>
                </div> 
                <div className={styles.dynamicskills}>
                    {
                        skills.map((data)=>{
                            return <DetailSkill  title={data.title} percentage={data.percentage} key={data.id}/>
                        })
                    }
                        
                </div>
            </div>

        </div>
    );
}