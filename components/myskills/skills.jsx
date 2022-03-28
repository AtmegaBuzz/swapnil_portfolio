import styles from './skills.module.css'
import DetailSkill from './detailskill/detailskill';


export default function Skills(){

    const skills = [
    
        {
            id:1,
            title:"Frontend Development",
            percentage:58
        },
        {
            id:1,
            title:"Backend Development",
            percentage:87
        },
        {
            id:2,
            title:"Automation and Testing",
            percentage:91
        },
        {
            id:2,
            title:"Embedded systems",
            percentage:72
        },
    ]


    
    return(
        <div className={styles.skills}>
            <div className={styles.heading}>
                <p className={styles.bigheading}>My Skills</p>
                <div data-aos="fade-up" data-aos-once="true" className={styles.subheading}>
                    <div className={styles.line}></div>
                        <p>what i know</p>
                    <div className={styles.line}></div>
                </div>
            </div>

            <div  className={styles.info}>
                <div data-aos="fade-right" data-aos-once="true" className={styles.textskills}>
                    <div className={styles.infoheading}>My Skills and Experience</div>
                    <p className={styles.infotext}>Worked in Django and have a deep understanding of backend and web technologies such as Apis, token authentication, database caching, decentralized database, and security mechanisms, I also have a grip on the Next Js Framework for Seo Optimized web apps in the frontend. <br /><br /> Have a understanding of deploying the application in Microsoft Azure and Digital Ocean.<br/><br/> On the other hand scrapping websites , making bots and software for platforms is what i do as a freelancer.</p>
                    <a className={styles.btn} href="https://github.com/AtmegaBuzz">Read More</a>
                </div> 
                <div data-aos="fade-left" data-aos-once="true" className={styles.dynamicskills}>
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