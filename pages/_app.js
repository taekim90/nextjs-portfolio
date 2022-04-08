import '../styles/globals.css'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <>
      <Navbar />

      <main>
        <Component {...pageProps} />
      </main>

      <footer>
        Tae {new Date().getFullYear()}
      </footer>
    </>
  )
}

export default MyApp
