import '../styles/globals.css'
import Head from 'next/head'


export default function MyApp({Component,pageProps}){

  return(
    <>
          <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />

          
            <link 
                    rel="stylesheet" 
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" 
                    crossorigin="anonymous"
                    />
                <script 
                    src="https://code.jquery.com/jquery-3.5.1.slim.min.js" 
                    crossorigin="anonymous"
                    />
                <script 
                    src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" 
                    crossorigin="anonymous"
                    />
                <script 
                    src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" 
                    crossorigin="anonymous"
                    />
                  <script 
                    src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js" 
                    crossorigin="anonymous"
                    />
                
          </Head>
          <Component {...pageProps} />
    </>  

  );

}





