import Typed from "react-typed"
import Particles from "react-particles-js";

export default function Header(){



    return(

        <div className="header-wrapper" style={{backgroundSize:"cover"}}>
            <Particles
            className="particles"
              params={{
                particles:{
                  number:{
                    value:29,
                    density:{
                      enable:true,
                      value_area:800
                    }
                  },
                  shape:{
                    type:"circle",
                    stroke:{
                      width:6,
                      color:"#f9ab00"
                    }
                  },
                  
                }
          
              }}
            />
            <div className="shadow">
            <div className="main-info">
                <h1>Web Devalopment and Wbsite Promotions</h1>
                <Typed
                    className="typed-text"
                    strings={["React Js","Django Framework","Django Rest Framework","Web Scrapping"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />

                <a href="" className="contact-me-btn">Contact Me</a>
            </div>
            </div>
        </div>

    );
}