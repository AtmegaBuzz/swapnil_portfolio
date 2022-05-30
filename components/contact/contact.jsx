import styles from  './contact.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';

export default function Contact(){
    
    let [form_submitted,set_form_submitted] = useState(false)

    let [name,setName] = useState("")
    let [email,setEmail] = useState("")
    let [subject,setSubject] = useState("")
    let [desc,setDesc] = useState("")

    let nameRef = useRef(null)
    let emailRef = useRef(null)
    let subjectRef = useRef(null)
    let descRef = useRef(null)


    let clean_data = (name,email,subject,desc)=>{

        if(name.length==0) {nameRef.current.focus(); return false}
        if(email.length==0){ emailRef.current.focus(); return false}
        if(subject.length==0) {subjectRef.current.focus(); return false}
        if(desc.length==0) {descRef.current.focus(); return false}

        return true
    }

    // let onFormSubmit = (e)=>{

        

    //     e.preventDefault()
        
    //     if(clean_data(name,email,subject,desc) & !form_submitted){
    //         console.log("done")
    //         set_form_submitted(true)
    //     }
    //     else{
    //         if(form_submitted){console.log("form submitted")}
    //         else{
    //             console.log("error")
    //         }
    //     }

    // }

    //  development phase
    let onFormSubmit = (e)=>{
        alert("Why forms if we have Instagram")
    }

    

    return(
        <>
        <div className={styles.contacts}>

            <div className={styles.contactCont}>

                <div className={styles.heading}>
                    <p className={styles.mainheading}>Contact Me</p>
                    <p className={styles.subheading}>Please fill this form and describe your project need and i'll contact you as soon as possible.</p>
                </div>

                <div className={styles.form}>
                    <form onSubmit={onFormSubmit}>
                        <div className={styles.left}>
                            <input ref={nameRef} value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder="Name" />
                            <input ref={emailRef} value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" placeholder="Email"/>
                            <input ref={subjectRef} value={subject} onChange={(e)=>{setSubject(e.target.value)}} type="text" placeholder="Subject"/>
                        </div>
                        <div className={styles.right}>
                            <textarea ref={descRef} value={desc} onChange={(e)=>{setDesc(e.target.value)}} name="desc" id="" cols="30" rows="10" placeholder="Please describe your project in brief."></textarea>
                            <button type="submit" className={styles.btn}>Contact Me</button>
                        </div>
                        
                    </form>
                </div>

            </div>

        </div>
        </>
    );
}

export let val = "8dd79c70-0801-11ec-a29f-e381a788c2c0";   
