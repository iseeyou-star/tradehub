import Link from 'next/link'
import { motion } from 'framer-motion'
export default function Home(){
  const products = [ {id:'smart-scalper',title:'Smart Scalper',price:49,desc:'Scalping signals.'}, {id:'ai-bot',title:'AI Bot',price:199,desc:'Auto trading.'} ]
  return (<div className='min-h-screen text-white'>
    <header className='border-b border-gray-800'><div className='container px-6 py-5 flex items-center justify-between'><div><h1 className='text-2xl font-bold text-accent'>TradeHub Store</h1><div className='text-xs text-gray-400'>Your gateway to smart trading tools</div></div><nav className='hidden md:block text-gray-300'><Link href="/products">Products</Link></nav></div></header>
    <main className='container px-6 py-12'>
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
        <motion.div initial={{x:-20,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.6}}>
          <h2 className='text-4xl font-extrabold mb-4'>Elevate your trading with pro tools</h2>
          <p className='text-gray-300 mb-6 max-w-xl'>Premium indicators, bots, and dashboards designed for performance.</p>
          <div className='flex gap-3'><Link href='/products' className='px-6 py-3 bg-accent text-black rounded-lg font-semibold'>Shop Now</Link></div>
        </motion.div>
        <motion.div initial={{scale:0.98,opacity:0}} animate={{scale:1,opacity:1}} transition={{duration:0.6}}>
          <div className='card'><h3 className='font-bold text-lg mb-2'>Featured Product</h3><img src='/logo-hero.png' alt='featured' className='w-full h-44 object-cover rounded-md mb-4'/><div className='flex items-center justify-between'><div className='font-bold text-accent text-xl'>$49</div><a href='/products/smart-scalper' className='px-4 py-2 bg-accent text-black rounded-lg font-semibold'>View</a></div></div>
        </motion.div>
      </section>
    </main>
    <footer className='border-t border-gray-800 py-8 text-center text-gray-400'>© 2025 TradeHub Store — Built by Ludwing</footer>
  </div>)
}
