import React, { useState, useRef } from 'react'

function BlogCategories() {
    const removeWhitespace = (str) => str.replace(/\s+/g, '');
    const boxRef = useRef(null);

    const btnpressprev = () => {
        const box = boxRef.current;
        if (box) {
            const width = box.clientWidth - 300;
            box.scrollLeft = box.scrollLeft - width;
        }
    }

    const btnpressnext = () => {
        const box = boxRef.current;
        if (box) {
            const width = box.clientWidth - 300;
            box.scrollLeft = box.scrollLeft + width;
        }
    }

    const buttons = [
        { button: 'Programming' },
        { button: 'Technology' },
        { button: 'Science' },
        { button: 'Space' },
        { button: 'Investing' },
        { button: 'Money' },
        { button: 'Psychology' },
        { button: 'Books' },
        { button: 'Geo Politics' },
        { button: 'Stock Market' },
        { button: 'Trading' },
        { button: 'History' }
    ];

    return (
        <>
            <style jsx>
                {`
                    .categories{
                        display: flex;
                        justify-content: flex-start;
                        align-items:center ;
                        width: 90%;
                        height: 50px;
                        position: fixed;
                        top: 49px;
                        {/* border: 1px solid white; */}
                        border-bottom-left-radius: 50px;
                        border-bottom-right-radius: 50px;
                        font-size: 50px;
                        padding: 20px;
                        {/* background-color: rgba(240, 248, 255, 0.066); */}
                        background-color: #00ffb500;
                        background-image:
                            linear-gradient(
                                to bottom left, #ffffff30, #06f0ed1a
                            );
                        backdrop-filter: blur(25px);
                        z-index: 1;
                        overflow-y: hidden;
                        {/* overflow-x: auto; */}
                        scroll-behavior: smooth;
                    }
                    .container::-webkit-scrollbar,
                    .categories::-webkit-scrollbar {
                        display: none;
                    }

                    .categories .prev-btn,
                    .categories .next-btn{
                        position: sticky;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        font-size: 30px;
                        background: none;
                        {/* backdrop-filter: blur(25px); */}
                        color: white;
                        padding: 21px;
                        outline: none;
                        cursor: pointer;
                        border-radius: 999px;
                        {/* border: 2px solid azure; */}
                        border: none;
                        height: 30px;
                        width: 30px;
                    }
                    .categories .prev-btn:hover,
                    .categories .next-btn:hover{
                        background: #ffffff4a;
                        color: white;
                    }
                    .categories .prev-btn:focus,
                    .categories .next-btn:focus{
                        background: #ffffff4a;
                        color: white;
                    }
                    .categories .prev-btn p,
                    .categories .next-btn p{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        text-align: center;
                        font-weight: 900;
                    }

                    .categories .prev-btn{
                        left: -1%;
                    }
                    .categories .next-btn{
                        right: -1%;;
                    }

                    .categories div.container{
                        overflow-x: auto;
                        {/* width: 80%; */}
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        margin: 0 25px;
                        scroll-behavior: smooth;
                    }

                    .categories a{
                        width: auto;
                        white-space: nowrap;
                        cursor: pointer;
                        background: black;
                        border: 2px solid azure;
                        outline: none;
                        border-radius: 8px;
                        padding: 10px 20px;
                        margin: 10px;
                        font-size: 15px;
                        transition: 800ms;
                        {/* font-weight: 600; */}
                    }
                    .categories a:hover{
                        background: #364646;
                        {/* color: black; */}
                    }
                    .categories a:focus{
                       background: #2c4949;
                    }
                    @media screen and(max-width : 768px){}
                `}
            </style>

            <div className='categories' >

                <button className="prev-btn" onClick={btnpressprev}><p>&lt;</p></button>

                <div className='container' ref={boxRef}>
                    {buttons.map((button, index) =>
                        <a href={`#${removeWhitespace(button.button)}`} key={index}>
                            {button.button}
                        </a>
                    )}
                </div>

                <button className="next-btn" onClick={btnpressnext}><p>&gt;</p></button>

            </div>
        </>
    )
}

export default BlogCategories
