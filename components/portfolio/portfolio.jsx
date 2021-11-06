import styles from './portfolio.module.css';
import DetailPortfolio from './detailView/detailPortfolio';
import Project from './project/project';
import { useState } from 'react';

export default function Portfolio(){

    let projects = [
        {
            id:1,
            heading:"Mantra 7hills Society site",
            text:"Society website for society with all notices, events management and charts.",
            url:'/mantra.png',
            github:'https://github.com/AtmegaBuzz/mantra_7hills',
            viewsite:"https://www.instagram.com/tv/CTZfeZfII3c/?utm_source=ig_web_copy_link"
        },
        {
            id:2,
            heading:"Beats of arijit",
            text:"A SPA webapp for listning and uploading songs, django + react with Django Rest Framework.",
            url:'/boa.png',
            github:'https://github.com/AtmegaBuzz/beatsofaribackend-master-deployed',
            viewsite:"https://www.instagram.com/tv/CTZdDCYIQmK/?utm_source=ig_web_copy_link"
        },
        {
            id:3,
            heading:"Aiforkids Buisness Management tool",
            text:"A buisness management tool for managing and assingning tasks to employee's.",
            url:'/afktm.png',
            github:'https://github.com/aiforkidsofficial/app.git',
            viewsite:"https://"
        },
        {
            id:4,
            heading:"My Personal Porfolio",
            text:"Personal Portfolio created using Next.js and Particle.js",
            url:'/personal.png',
            github:'https://github.com/AtmegaBuzz/swapnil_portfolio',
            viewsite:"https://"
        },
    ]

    const [inDetail,setInDetail] = useState(false)

    let showcase = ()=>{
        setInDetail(true)
    }


    return(
        <div className={styles.portfolio}>
            {inDetail && <DetailPortfolio setInDetail={setInDetail}/>}
            <div className={styles.heading}><p>My Projects</p></div>
            <div className={styles.projectsCont}>
                {
                    projects.map((data)=>{
                        return <Project key={data.id} showcase={showcase} {...data}/>
                    })
                }
            </div>
        </div>
    )
}