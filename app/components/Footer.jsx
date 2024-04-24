import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
    const navLinks = [
        { title: 'Home', url: '/' },
        { title: 'Upcoming Events', url: '/events' },
        { title: 'Live Score', url: '/score' },
        { title: 'Predicted Analysis', url: '/analysis' },
        { title: 'Inventory', url: '/inventory' },
        { title: 'Report', url: '/report' },
        { title: 'E-Shop', url: '/shop' },
    ];

    return (
        <footer className='bg-gray-800 text-white px-6 md:px-20 shadow-xl py-20'>
            <hr
            className='border-b-2 border-teal-500 mb-8'
            />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Navigation</h2>
                    <ul>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.url} className='text-teal-500 hover:text-teal-600'>
                                    
                                        {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Follow Us</h2>
                    <div className='flex space-x-4'>
                        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'><FaFacebook /></a>
                        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'><FaTwitter /></a>
                        <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer'><FaInstagram /></a>
                        <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer'><FaYoutube /></a>
                    </div>
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-4'>Newsletter</h2>
                    <form>
                        <input type='email' placeholder='Your email' className='w-full px-4 py-2 mb-4 rounded bg-white text-gray-800' />
                        <button type='submit' className='px-4 py-2 rounded bg-teal-500 text-white hover:bg-teal-600'>Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>
    );
}
