// import Footer from '@/components/Footer'
// import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Dashboard from './dashboard'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <div className='flex font-serif bg-slate-200'>
      <Head>
        <link rel="icon" type="image/jfif" sizes="16x16" href="https://i.ibb.co/JKc0dtY/1619225409081.jpg" />
        <title>
          Mobilics India Private Limited
        </title>
      </Head>
      <Dashboard className="w-2/5" />
      <Component {...pageProps} className="w-3/5" />

    </div>
  )
}
