import styles from './services.module.css'
import DetailService from './detailService/detailService';


export default function Services(){

    let mywork = [
        {
            id:1,
            title:"Frontend Development",
            description:"Awesome single pager application with Next.Js, SEO Optimized and responsive Designes",
            more:"",
            url:"/react.png",
            width:"140px",
            height:"130px"
        },
        {
            id:2,
            title:"Backend Development",
            description:"Develop Secure Backends with Django Framework, both api based and html based dynamic websites using Django Rest Framework.",
            more:"",
           url:"/django.png",
            width:"140px",
            height:"140px"
        },
        {
            id:3,
            title:"Web Scrapping",
            description:"Scrapping data using Beautiful Soup and Selenium, develop Bots for any platform.",
            more:"",
            url:"/selenium.png",
            width:"140px",
            height:"140px"
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