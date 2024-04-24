import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
    return (
        <div className='bg-gray-800 text-white text-center py-20 h-screen flex flex-col md:flex-row gap-6 px-20'>
            <div className='flex-1 flex flex-wrap flex-col justify-center items-center'>
                <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-5'>Welcome to <br />
                    <span className="text-teal-500 inline-block">
                        <span className="animate-pulse">Game on GCU</span>
                        <span className="inline-block overflow-hidden w-0 h-5 border-b-2 border-teal-500"></span>
                    </span>
                </h1>
                <p className='text-xl md:text-2xl mb-10'>Experience the thrill of university sports. Stay updated with live scores, upcoming events, and many more.</p>
                <Link href='/signup'>
                    <button className='px-8 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600'>
                        Join Now
                    </button>
                </Link>
            </div>
            <div className='flex-1 mt-10 md:mt-0'>
                <Image src='/bg2.jpg' width={600} height={600} alt='Hero Image'
                className='rounded-lg shadow-xl'
                />
            </div>
        </div>
    );
}
