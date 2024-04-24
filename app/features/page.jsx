import Link from 'next/link';
import { FaFutbol, FaCalendarAlt, FaChartLine, FaWarehouse, FaFileAlt, FaShoppingCart } from 'react-icons/fa';

export default function FeaturesSection() {
    const features = [
        { title: 'Live Score', description: 'Get real-time updates on ongoing matches.', url: '/score', icon: <FaFutbol /> },
        { title: 'Upcoming Events', description: 'Stay informed about upcoming sports events.', url: '/events', icon: <FaCalendarAlt /> },
        { title: 'Predicted Analysis', description: 'Get insights and predictions for future matches.', url: '/analysis', icon: <FaChartLine /> },
        { title: 'Inventory', description: 'Manage your sports equipment and inventory.', url: '/inventory', icon: <FaWarehouse /> },
        { title: 'Report', description: 'Generate detailed reports on matches and players.', url: '/report', icon: <FaFileAlt /> },
        { title: 'E-Shop', description: 'Buy official merchandise and support your favorite teams.', url: '/shop', icon: <FaShoppingCart /> },
    ];

    return (
        <div className='py-12 bg-gray-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-2 md:px-20'>
            <h1
                className='text-4xl sm:text-5xl font-bold text-white text-center mb-10 col-span-full'
            >
                Features
            </h1>
            {features.map((feature, index) => (
                <div key={index} className='bg-teal-500 rounded-lg shadow-md p-6 text-white
                hover:bg-teal-600 transition duration-300 ease-in-out transform hover:-translate-y-2
                '>
                    <div className='flex items-center justify-center text-6xl mb-4'>
                        {feature.icon}
                    </div>
                    <h2 className='text-2xl sm:text-3xl font-bold mb-2'>{feature.title}</h2>
                    <p className='mb-4'>{feature.description}</p>
                    <Link href={feature.url}>
                        <button className='px-4 py-2 bg-white text-teal-500 rounded hover:bg-gray-200'>
                            Learn More
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
}
