import Link from "next/link";
// import live score icon from react-icons
import { FaFutbol } from 'react-icons/fa';

export default function NewsUpdatesSection() {
    const events = [
        {
            title: 'Sports Week', description: 'Lets enjoy the sports week together.Join us for a week full of sports and fun.', url: '/events'
        },
        {
            title: 'Book Fair', description: 'Book Fair is here. Get your favorite books at discounted prices and enjoy the reading.', url: '/events'
        },
    ];

    const liveScore = {
        title: 'Live Score',
        team1: 'SE20',
        team2: 'SE21',
        team1Score: 180,
        team2Score: 110,
        overs: 12.5,
        totalOvers: 20,
        url: '/livescore'
    };

    return (
        <div className='py-4 bg-gray-800 text-white grid grid-cols-1 md:grid-cols-2 gap-8 px-2 md:px-20'>
            <h1
                className="text-4xl sm:text-5xl font-bold text-white text-center mb-10 col-span-full"
            >
                News & Updates
            </h1>
            <div>
                {events.map((event, index) => (
                    <div key={index} className='bg-teal-500 rounded-lg shadow-md p-6 mb-8'>
                        <h3 className='text-2xl font-bold mb-2'>{event.title}</h3>
                        <p className='mb-4'>{event.description}</p>
                        <Link href={event.url}>
                            <button className='text-white hover:text-gray-200
                            px-4 py-2 bg-teal-600 rounded-lg hover:bg-teal-200
                            '>
                                Read More
                                {/* add right arrow */}
                                <span
                                    className="inline-block ml-2 text-2xl"
                                >
                                    →
                                </span>
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
            <div className='bg-teal-500 rounded-lg shadow-md p-6 mt-8 md:mt-0 relative'>
                <FaFutbol
                    className="text-3xl text-white text-center mb-4 absolute right-12 animate-spin"
                />

                <h3 className='text-2xl font-bold mb-2'>{liveScore.title}</h3>
                <div className='flex justify-between items-center mb-4'>
                    <div>
                        <h4>{liveScore.team1}</h4>
                        <p>{liveScore.team1Score}/10</p>
                    </div>
                    <div>
                        <h4>{liveScore.team2}</h4>
                        <p>{liveScore.team2Score}/4 in {liveScore.totalOvers - 12} Overs </p>
                    </div>
                </div>
                <Link href={liveScore.url}>
                    <button className='text-white hover:text-gray-200
                    px-4 py-2 bg-teal-600 rounded-lg hover:bg-teal-200
                    '>
                        View Score
                        {/* add right arrow */}
                        <span
                            className="inline-block ml-2 text-2xl"
                        >
                            →
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
}
