import Link from 'next/link';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LiveScore = () => {
    const matches = [
        { title: 'Football Match', description: 'Live score updates for the football match.', url: '/score/football' },
        { title: 'Cricket Match', description: 'Live score updates for the cricket match.', url: '/score/cricket' },
    ];

    return (
        <div>
            <Navbar />
            <div className='py-20 bg-gray-800 text-white grid grid-cols-1 sm:grid-cols-2 gap-8 px-2 md:px-20'>
                <h1 className='text-4xl sm:text-5xl font-bold text-center mb-10 col-span-full'>Live Score</h1>
                {matches.map((match, index) => (
                    <div key={index} className='bg-teal-500 rounded-lg shadow-md p-6'>
                        <h2 className='text-2xl font-bold mb-2'>{match.title}</h2>
                        <p className='mb-4'>{match.description}</p>
                        <Link href={match.url}>
                            <button className='px-4 py-2 bg-white text-teal-500 rounded hover:bg-gray-200'>
                                View Details
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default LiveScore;
