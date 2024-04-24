"use client";

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const eventsData = [
    {
        title: 'Sports Week',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in libero vulputate, eu vestibulum nisi tempus. Morbi euismod hendrerit risus, id tempus purus volutpat vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in libero vulputate, eu vestibulum nisi tempus. Morbi euismod hendrerit risus, id tempus purus volutpat vel',
    },
    {
        title: 'Book Fair',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in libero vulputate, eu vestibulum nisi tempus. Morbi euismod hendrerit risus, id tempus purus volutpat vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in libero vulputate, eu vestibulum nisi tempus. Morbi euismod hendrerit risus, id tempus purus volutpat vel.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in libero vulputate, eu vestibulum nisi tempus. Morbi euismod hendrerit risus, id tempus purus volutpat velLorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in libero vulputate, eu vestibulum nisi tempus. Morbi euismod hendrerit risus, id tempus purus volutpat vel',
    },
];

const UpcomingEventsPage = () => {
    const [expandedEvent, setExpandedEvent] = useState(null);

    const handleExpand = (index) => {
        setExpandedEvent(index === expandedEvent ? null : index);
    };

    return (
        <div>
            <Navbar />
            <div className="py-4 bg-gray-800 text-white grid grid-cols-1 gap-2 px-2 md:px-20">
                <h1 className="text-3xl sm:text-4xl font-bold text-center py-4">Upcoming Events</h1>
                <p className="text-lg sm:text-xl text-center text-gray-200 mb-3">Stay tuned for exciting events. We have something for everyone!
                
                </p>

                <div className="grid grid-cols-1 gap-4">
                    {eventsData.map((event, index) => (
                        <div key={index} className='bg-teal-500 rounded-lg shadow-md p-6 mb-8'>
                            <h2 className="text-xl sm:text-2xl font-semibold mb-4">{event.title}</h2>
                            <p className={`mb-4 ${expandedEvent === index ? 'block' : 'truncate'}`}>{event.description}</p>
                            <button onClick={() => handleExpand(index)} className='text-white
                            px-4 py-2 bg-teal-600 rounded-lg hover:bg-teal-200
                            hover:text-gray-800 transition duration-300 ease-in-out
                            '>
                                {expandedEvent === index ? 'Show Less' : 'Read More'}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UpcomingEventsPage;
