import React from 'react'
import styles from '@/styles/Contact.module.css'

function Contact() {
    return (
        <div id='Contact' className={styles.contact}>
            <div className={styles.container}>
                <h1>Get in touch :</h1>
                <form action="" className={`${styles.grid} ${styles.form}`}>
                    <div className={`${styles.usercontact}`}>
                        <div className={`${styles.content} ${styles.name}`}>
                            <label htmlFor='' className={styles.contactlabel}>Name</label>
                            <input type="text" className={styles.contactinput} />
                        </div>

                        <div className={`${styles.content} ${styles.email}`}>
                            <label htmlFor='' className={styles.contactlabel}>Email</label>
                            <input type="email" className={styles.contactinput} />
                        </div>
                    </div>

                    <div className={`${styles.content} ${styles.name}`}>
                        <label htmlFor='' className={styles.contactlabel}>Subject</label>
                        <input type="text" className={styles.contactinput} />
                    </div>

                    <div className={`${styles.content} ${styles.name}`}>
                        <label htmlFor='' className={styles.contactlabel}>Description</label>
                        <textarea name="" id="" cols="0" rows="7" className={styles.contactinput}></textarea>
                    </div>

                    <div>
                        <a href="#" className={styles.sendbtn}>
                            Send message
                            <i className="uil uil-message button__icon"></i>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contact
