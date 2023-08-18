import React from 'react'
import styles from "@/styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.copyright}>
                    <span >Copyright</span>
                    &nbsp;&nbsp;<FontAwesomeIcon icon={faCopyright} />&nbsp;&nbsp;
                    <span >
                        2023 Blog Tweets. All Rights
                        Reserved.
                    </span>
                </div>
                <div className={styles.sociallinks}>
                    <a
                        href="https://github.com/aurojyoti23"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                        href="https://instagram.com/auroj._"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a
                        href="https://twitter.com/tusarkanti_das"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faTwitter} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aurojyoti-tusarkanti-das-887b91224/"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                        href="http://www.facebook.com/aurojyoti.das.7/"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a
                        href="https://www.youtube.com/@PratapDevlpor"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
