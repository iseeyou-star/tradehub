import { useRouter } from 'next/router'
export default function Product(){ const router = useRouter(); const {id} = router.query; return <div className='min-h-screen text-white container px-6 py-12'> <h1 className='text-2xl font-bold'>{id}</h1> <p className='text-gray-300'>Product detail placeholder.</p></div> }
