import React from 'react'
import styles from '@/styles/Blogs.module.css'
// import styles1 from '@/styles/Home.module.css'
import Image from 'next/image'
import BlogCategories from '@/Components/BlogCategories'
// import { useEffect, useState, useRef } from 'react'
import Blogs from '@/Components/Blogs'

function blogs() {

    return (
        <>
            <BlogCategories />
            <div className={`${styles.blogs} `}  >

                <div id="Programming" className={styles.cardsection} >
                    <h1>Programming</h1>
                    <Blogs />
                </div>

                <div id="Technology" className={styles.cardsection} >
                    <h1>Technology</h1>
                    <Blogs />
                </div>

                <div id="Science" className={styles.cardsection} >
                    <h1>Science</h1>
                    <Blogs />
                </div>

                <div id="Space" className={styles.cardsection} >
                    <h1>Space</h1>
                    <Blogs />
                </div>

                <div id="Investing" className={styles.cardsection} >
                    <h1>Investing</h1>
                    <Blogs />
                </div>

                <div id="Money" className={styles.cardsection} >
                    <h1>Money</h1>
                    <Blogs />
                </div>

                <div id="Psychology" className={styles.cardsection} >
                    <h1>Psychology</h1>
                    <Blogs />
                </div>

                <div id="Books" className={styles.cardsection} >
                    <h1>Books</h1>
                    <Blogs />
                </div>

                <div id="GeoPolitics" className={styles.cardsection} >
                    <h1>Geo Politics</h1>
                    <Blogs />
                </div>

                <div id="StockMarket" className={styles.cardsection} >
                    <h1>Stock Market</h1>
                    <Blogs />
                </div>

                <div id="Trading" className={styles.cardsection} >
                    <h1>Trading</h1>
                    <Blogs />
                </div>

                <div id="History" className={styles.cardsection} >
                    <h1>History</h1>
                    <Blogs />
                </div>

            </div>
        </>
    )
}

export default blogs
