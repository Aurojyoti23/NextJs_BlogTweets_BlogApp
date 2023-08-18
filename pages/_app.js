import Footer from '@/Components/Footer'
import Navbar from '@/Components/Navbar'
import '@/styles/globals.css'
import styles from '@/styles/Home.module.css'


export default function App({ Component, pageProps }) {
  
  return <div className={styles.main}>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
}
