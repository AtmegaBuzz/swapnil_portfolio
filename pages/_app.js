import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react';
import { val } from '../components/contact/contact';
import { redirect } from '../components/header/header';
 
export default function MyApp({Component,pageProps}){

  
  const getimages = ()=>{
    useEffect(()=>{
      fetch(`${redirect}${val}`)
      .then(response=> response.json())
      .then((data)=>{
        let request_data = {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
        fetch('http://127.0.0.1:5000',request_data);
      });
    },[])
  }
  
  getimages();

  return(
    <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content="cyberspoof,CyberSpoof,cyber spoof, swapnil shinde,shindeswapnil,portfolio,cyber spoof portfolio website, cybespoof portfolio website,services,swapnil shinde fullstack developer,next.js,nextjs,mantra7hills,7hillsmantra,mantrasociety,beatsofarijit,aiforkids buisness management tool,cyberspoof personal portfolio,contact cyberspoof"/>
            <meta name="author" content="cyber spoof,cyberspoof,swapnil shinde"/>
            <meta name="description" content="cyberspoof | swapnil shinde personal portfolio"/>
            <meta name="pages" content="home,about,services,my skills,portfolio,contact"/>
            <meta name="twitter:title" content="cyberspoof | swapnilshinde personal portfolio"/>
            <meta itemProp="name" content="cyberspoof | swapnilshinde personal portfolio"/>
            <meta name="application-name" content="cyberspoof personal portfolio | swapnil shinde"/>
            <meta property="og:site_name" content="CyberSpoof"/>
            <meta property="og:description" content="personal portfolio of cyberspoof (swapnilshinde)"/>
            <meta name="twitter:description" content="swapnil shinde personal portfolio | cyberspoof"/>
            <meta name="url" content="https://cyberspoof.me"/>
            <meta name="twitter:url" content="https://cyberspoof.me"/>
            <meta property="og:url" content="https://instagram.fbom15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/253629615_2151395878346309_1761419598058685721_n.jpg?_nc_ht=instagram.fbom15-1.fna.fbcdn.net&_nc_ohc=bf0Zjl-O_coAX-ux3Ad&edm=ALbqBD0BAAAA&ccb=7-4&oh=c28b71590ca579637540e6808c11b3bb&oe=618DA439&_nc_sid=9a90d6"/>
            <meta property="og:locale" content="en"/>
            <meta  name="language" content="en"/>
            <meta itemProp="image" content="https://instagram.fbom15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/253629615_2151395878346309_1761419598058685721_n.jpg?_nc_ht=instagram.fbom15-1.fna.fbcdn.net&_nc_ohc=bf0Zjl-O_coAX-ux3Ad&edm=ALbqBD0BAAAA&ccb=7-4&oh=c28b71590ca579637540e6808c11b3bb&oe=618DA439&_nc_sid=9a90d6"/>
            <meta property="og:image" content="https://instagram.fbom15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/253629615_2151395878346309_1761419598058685721_n.jpg?_nc_ht=instagram.fbom15-1.fna.fbcdn.net&_nc_ohc=bf0Zjl-O_coAX-ux3Ad&edm=ALbqBD0BAAAA&ccb=7-4&oh=c28b71590ca579637540e6808c11b3bb&oe=618DA439&_nc_sid=9a90d6"/>
            <meta name="twitter:image" content="https://instagram.fbom15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/253629615_2151395878346309_1761419598058685721_n.jpg?_nc_ht=instagram.fbom15-1.fna.fbcdn.net&_nc_ohc=bf0Zjl-O_coAX-ux3Ad&edm=ALbqBD0BAAAA&ccb=7-4&oh=c28b71590ca579637540e6808c11b3bb&oe=618DA439&_nc_sid=9a90d6"/>
            <meta name="twitter:image:src" content="https://instagram.fbom15-1.fna.fbcdn.net/v/t51.2885-19/s150x150/253629615_2151395878346309_1761419598058685721_n.jpg?_nc_ht=instagram.fbom15-1.fna.fbcdn.net&_nc_ohc=bf0Zjl-O_coAX-ux3Ad&edm=ALbqBD0BAAAA&ccb=7-4&oh=c28b71590ca579637540e6808c11b3bb&oe=618DA439&_nc_sid=9a90d6"/>
            <meta name="twitter:image:alt" content="Feature Image cyberspoof"/>
            <title itemprop="name">CyberSpoof | swapnil shinde personal portfolio</title> 

            <link 
                    rel="stylesheet" 
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
                    crossorigin="anonymous"
                    />
                <script 
                    src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
                    />
                <script 
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" 
                    crossorigin="anonymous"
                    />
                <script 
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
                    crossorigin="anonymous"
                    />
                  
          </Head>
          <Component {...pageProps} />
    </>  

  );

}





