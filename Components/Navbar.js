import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from "@/styles/Navbar.module.css";

function Navbar() {
    return (
        <nav className={`${styles.nav} ${styles.stroke}`}>
            <div className={styles.brand}>
                <h2>Blog Tweets</h2>
            </div>
            <ul>
                <Link href='/'><li>Home</li></Link>
                <Link href='/blogs'><li>Blogs</li></Link>
                <Link href='/team#Contact'><li>Contact</li></Link>
                <Link href='/team' className={styles.team}>
                    <li><Image alt='bimg' className={styles.tmimg} src="/team.png" width={237} height={158} /></li>
                </Link>
            </ul>

        </nav>
    )
}

export default Navbar
