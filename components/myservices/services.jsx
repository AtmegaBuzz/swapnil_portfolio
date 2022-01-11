import styles from './services.module.css'
import DetailService from './detailService/detailService';


export default function Services(){

    let mywork = [
        {
            id:1,
            title:"Frontend Development",
            description:"Awesome single pager application with Next.Js, SEO Optimized and responsive Designes or Websites using Html,CSS and JS",
            more:"",
            url:"/react.png",
            width:"140px",
            height:"130px",
            redirectUrl:"https://www.fiverr.com/share/47gAvb"
        },
        {
            id:2,
            title:"Backend Development",
            description:"Develop Secure Backends with Django Framework, both api based and html based dynamic websites using Django Rest Framework.",
            more:"",
            url:"/django.png",
            width:"140px",
            height:"140px",
            redirectUrl:"https://www.fiverr.com/share/47gAvb"
        },
        {
            id:3,
            title:"Automation",
            description:"Automation, web scrapping and developing bot for major platforms and websites.",
            more:"",
            url:"/selenium.png",
            width:"140px",
            height:"140px",
            redirectUrl:"https://www.fiverr.com/share/17gd5k"
        }
    ]
    return(
        <div className={styles.services}>
               <p className={styles.heading}>my services</p> 
               <div className={styles.servicesComp}>

                    {mywork.map((data)=>{
                        return <DetailService className={styles.items} {...data} key={data.id}/>
                    })}
                        
               </div>
        </div>
    );
}