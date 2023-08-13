// import Footer from '@/components/Footer'
// import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import Dashboard from './dashboard'

export default function App({ Component, pageProps }) {
  return (
    <div className='flex font-serif bg-slate-200'>
      <Dashboard className="w-2/5"/>
      <Component {...pageProps} className="w-3/5"/>

    </div>
  )
}
