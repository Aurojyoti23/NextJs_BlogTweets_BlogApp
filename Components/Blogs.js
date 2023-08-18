import React, { useRef } from 'react';
import styles from '@/styles/Blogs.module.css';
import Image from 'next/image'
import images from "../public/blogimgs/images";


function Blogs() {

    const boxRef = useRef(null);

    const btnpressprev = () => {
        const box = boxRef.current;
        if (box) {
            const width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
        }
    }
    const btnpressnext = () => {
        const box = boxRef.current;
        if (box) {
            const width = box.clientWidth;
            box.scrollLeft = box.scrollLeft + width;
        }
    }

    return (
        <div className={styles.slider} ref={boxRef}>

            <button className={styles.prevbtn} onClick={btnpressprev}><p>&lt;</p></button>

            <div className={styles.cards}>

                {images.map((image) => {
                    return (
                        <div className={`${styles.card}`}>
                            <Image alt='bimg' src={image} width={300} height={200} />
                            <p>Lorem ipsum dolor sit amet consect etur adipisicing elit. </p>
                        </div>
                    )
                })}

                {/* <div className={`${styles.card}`}>
                    <Image alt='bimg' src='/blogimgs/6.jpg' width={300} height={200} />
                    <p>Lorem ipsum dolor sit amet consect etur adipisicing elit. </p>
                </div>
                <div className={`${styles.card}`}>
                    <Image alt='bimg' src='/blogimgs/5.jpg' width={300} height={200} />
                    <p>Lorem ipsum dolor sit amet consect etur adipisicing elit. </p>
                </div>
                <div className={`${styles.card}`}>
                    <Image alt='bimg' src='/blogimgs/4.jpg' width={300} height={200} />
                    <p>Lorem ipsum dolor sit amet consect etur adipisicing elit. </p>
                </div>
                <div className={`${styles.card}`}>
                    <Image alt='bimg' src='/blogimgs/6.jpg' width={300} height={200} />
                    <p>Lorem ipsum dolor sit amet consect etur adipisicing elit. </p>
                </div>
                <div className={`${styles.card}`}>
                    <Image alt='bimg' src='/blogimgs/2.jpg' width={300} height={200} />
                    <p>Lorem ipsum dolor sit amet consect etur adipisicing elit. </p>
                </div>
                <div className={`${styles.card}`}>
                    <Image alt='bimg' src='/blogimgs/2.jpg' width={300} height={200} />
                    <p>Lorem ipsum dolor sit amet consect etur adipisicing elit. </p>
                </div>
                <div className={`${styles.card}`}>
                    <Image alt='bimg' src='/blogimgs/1.jpg' width={300} height={200} />
                    <p>Lorem ipsum dolor sit amet consect etur adipisicing elit. </p>
                </div>
                <div className={`${styles.card}`}>
                    <Image alt='bimg' src='/blogimgs/9.jpg' width={300} height={200} />
                    <p>Lorem ipsum dolor sit amet consect etur adipisicing elit. </p>
                </div>
                <div className={`${styles.card}`}>
                    <Image alt='bimg' src='/blogimgs/9.jpg' width={300} height={200} />
                    <p>Lorem ipsum dolor sit amet consect etur adipisicing elit. </p>
                </div> */}

            </div>

            <button className={styles.nextbtn} onClick={btnpressnext}><p>&gt;</p></button>

        </div>
    )
}

export default Blogs
