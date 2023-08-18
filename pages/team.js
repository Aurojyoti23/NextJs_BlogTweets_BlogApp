import React from 'react'
import styles from '@/styles/Team.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Contact from '@/Components/Contact'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faGithub,
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import {
    faExternalLink
} from "@fortawesome/free-solid-svg-icons";

function team() {
    return (
        <div className={styles.team}>


            <div className={styles.leftbar}>
                <div className={styles.leftop}>
                    <div className={styles.profile}>
                        <Image alt='profile' src='/team.png' width={70} height={70} />
                        <span>
                            <h4>Aurojyoti Tusarkanti Das</h4>
                            <span>Software Developer | Freelancer</span>
                        </span>
                    </div>
                </div>
                <div className={styles.leftmiddle}>
                    <div className={styles.contact}>
                        <Image alt='' src='/email.svg' width={50} height={50} />
                        <Link href=''>
                            <h3>Contact</h3>
                            <span>xzee@email.com<FontAwesomeIcon icon={faExternalLink} /></span>
                        </Link>
                    </div>
                    <div className={styles.location}>
                        <Image alt='' src='/location.svg' width={50} height={50} />
                        <Link href='https://www.google.com/maps/place/Bhadrak,+Odisha/@21.0511617,86.482018,6716m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3a1bf587cd8ce1f1:0x820d86656eae5320!8m2!3d21.0573616!4d86.4962996!16s%2Fm%2F025t0m8?entry=ttu' target="_blank">
                            <h3>Location</h3>
                            <span>Bhadrak, Odisha, India<FontAwesomeIcon icon={faExternalLink} /></span>
                        </Link>
                    </div>
                    {/* <div></div> */}
                </div>
                <div className={styles.leftbottom}>
                    <div className={styles.tags}>
                        <span>Web Developer</span>
                        <span>App Developer</span>
                        <span>Artificial Intelligence</span>
                        <span>Machine Learning</span>
                        <span>Digital Creator</span>
                    </div>
                </div>
            </div>

            <div className={styles.profiles}>
                <nav id="Profiles" className={`${styles.profilesnav}`}>
                    <Link href='#' className={styles.plogo}>
                        <Image alt='logo' src="/team.png" width={50} height={50} />
                    </Link>
                    <Link href='#' className={styles.plogo}>
                        <Image alt='logo' src="/team.png" width={50} height={50} />
                    </Link>
                    <Link href='#' className={styles.plogo}>
                        <Image alt='logo' src="/team.png" width={50} height={50} />
                    </Link>
                    <Link href='#' className={styles.plogo}>
                        <Image alt='logo' src="/team.png" width={50} height={50} />
                    </Link>
                    <Link href='#' className={styles.plogo}>
                        <Image alt='logo' src="/team.png" width={50} height={50} />
                    </Link>
                </nav>

                <div className={styles.pdetails}>
                    <div className={styles.top}>
                        <div>
                            <Image alt='logo' src='/team.png' width={150} height={150} />
                            <h1>Aurojyoti Tusarkanti Das</h1>
                            <span style={{ letterSpacing: '5px' }}>Software Developer</span>
                        </div>
                        {/* <span>
                            <span>Self Made Software Developer | Freelancer</span>
                            <span>Interests in Technology, Artificial Intelligence, Stock Market etc.</span>
                            <span>Hobbies are playing Cricket, </span>
                        </span> */}
                    </div>
                    <div className={styles.detail}>

                    </div>
                    <Contact />

                </div>
            </div>

            <div className={styles.rightbar}>
                <h4 style={{
                    display: 'flex',
                    whiteSpace: 'nowrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin: '15px'
                }}>Social Links</h4>
                <div className={styles.sociallinks}>
                    <a
                        href="https://github.com/aurojyoti23"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faGithub} />

                        <span>Github<span style={{
                            fontSize: '9px',
                            margin: '0 4px',
                        }}><FontAwesomeIcon icon={faExternalLink} /></span></span>
                    </a>
                    <a
                        href="https://instagram.com/auroj._"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faInstagram} />

                        <span>Instagram<span style={{
                            fontSize: '9px',
                            margin: '0 4px',
                        }}><FontAwesomeIcon icon={faExternalLink} /></span></span>
                    </a>
                    <a
                        href="https://twitter.com/tusarkanti_das"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faTwitter} />

                        <span>Twitter<span style={{
                            fontSize: '9px',
                            margin: '0 4px',
                        }}><FontAwesomeIcon icon={faExternalLink} /></span></span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/aurojyoti-tusarkanti-das-887b91224/"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faLinkedin} />

                        <span>Linkedin<span style={{
                            fontSize: '9px',
                            margin: '0 4px',
                        }}><FontAwesomeIcon icon={faExternalLink} /></span></span>
                    </a>
                    <a
                        href="http://www.facebook.com/aurojyoti.das.7/"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faFacebook} />

                        <span>Facebook<span style={{
                            fontSize: '9px',
                            margin: '0 4px',
                        }}><FontAwesomeIcon icon={faExternalLink} /></span></span>
                    </a>
                    <a
                        href="https://www.youtube.com/@PratapDevlpor"
                        target="_blank"
                        className={styles.item3}
                    >
                        <FontAwesomeIcon icon={faYoutube} />

                        <span>Youtube<span style={{
                            fontSize: '9px',
                            margin: '0 4px',
                        }}><FontAwesomeIcon icon={faExternalLink} /></span></span>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default team
