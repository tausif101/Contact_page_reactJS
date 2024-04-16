import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiMessageAltDetail } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";


function ContactForm() {

    const [name, setName] = useState("Ansary");
    const [email, setEmail] = useState("tausif123@gmail.com");
    const [text, setText] = useState("hello world");

    // let name = "";
    


    const onViaCallSubmit = () => {
        console.log("I am from call");
    }
    const onViaEmailSubmit = () => {
        console.log("I am from email");
    }

    const onSubmit = (event) => {
        event.preventDefault()
        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);
     
        
    }

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_button}>
                    <Button
                        onClick={onViaEmailSubmit}
                        text="VIA SUPPORT CHAT" 
                        icon={<BiMessageAltDetail fontSize="24px"/>}
                    />
                    <Button
                        onClick={onViaCallSubmit}
                        text="VIA CALL" 
                        icon={<FiPhoneCall fontSize="24px"/>}
                    />                    
                </div>
                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM"
                    icon={<AiOutlineMail fontSize="24px" />}
                />

                <form action="" onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows="8" />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "end",
                        }}
                    >
                        <Button text="SUBMIT BUTTON" />
                    </div>
                    <div>{"Name: " + name + ". Email: " + email + ". Text: " + text}</div>
                </form>
            </div>
            <div className={styles.contact_image}>
                <img src="/images/contactImage.svg" alt="" />
            </div>
        </section>
    );
}

export default ContactForm;