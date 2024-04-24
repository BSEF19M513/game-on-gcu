import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import React from 'react';
// import football icon from react-icons
import { IoMdFootball } from "react-icons/io";

const FootballScore = () => {
    const team1 = {
        name: 'SE20',
        goalScorers: ['Ali Khan', 'Faizan Nasir', 'Rohaan Amin'],
        players : ['Ali Khan', 'Hamza Ahmed', 'Muhammad Bilal', 'Aryan Malik', 'Faizan Nasir',
            'Huzaifa Omar', 'Rayan Samir', 'Rohaan Amin', 'Atfat Aza', 'Awamil Osman', 'Awamiri Rahim']
    };

    const team2 = {
        name: 'SE21',
        goalScorers: ['Zayan Shah', 'Usman Riaz'],
        players :['Zayan Shah', 'Ibrahim Ali', 'Usman Riaz', 'Saad Farooq', 'Talha Siddiqui',
            'Faisal Iqbal', 'Arham Aziz', 'Bilal Hussain', 'Danish Akhtar', 'Ehsan Ullah', 'Fahad Mustafa']

    };

    return (
        <div>
            <Navbar />
            <div className='py-20 bg-gray-800 text-white px-2 md:px-20'>
                <h1 className='text-xl sm:text-2xl font-bold text-center mb-10'>Football Match Live Score
                    <IoMdFootball className='rotate inline-block text-4xl text-teal-500' />
                </h1>

                <h1
                className='text-xl sm:text-2xl font-bold text-center mb-10 col-span-full'
                >
                    {team1.name} vs {team2.name}
                </h1>

                <h1
                className='text-xl sm:text-2xl font-bold text-center mb-10 col-span-full'
                >
                    <span className='text-2xl font-bold'>{team1.goalScorers.length}</span> - <span className='text-2xl font-bold'>{team2.goalScorers.length}</span>
                </h1>

                <h2 className='text-2xl font-bold text-center my-10'>57 mins : 23 sec</h2>

                {/* Grid 1 */}

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='bg-teal-500 rounded-lg shadow-md p-6'>
                        <h2 className='text-2xl font-bold mb-2'>{team1.name}</h2>
                        <h3 className='text-xl mb-2'>Goal Scorers:</h3>
                        <ul>
                            {team1.goalScorers.map((player, index) => (
                                <li key={index} className='mb-1'>{player}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='bg-teal-500 rounded-lg shadow-md p-6'>
                        <h2 className='text-2xl font-bold mb-2'>{team2.name}</h2>
                        <h3 className='text-xl mb-2'>Goal Scorers:</h3>
                        <ul>
                            {team2.goalScorers.map((player, index) => (
                                <li key={index} className='mb-1'>{player}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                {/* Grid 2 */}
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12'>
                    <div className='bg-teal-500 rounded-lg shadow-md p-6'>
                        <h2 className='text-2xl font-bold mb-2'>{team1.name} Players</h2>
                        <ul>
                            {team1.players.map((player, index) => (
                                <li key={index} className='mb-1'>{player}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='bg-teal-500 rounded-lg shadow-md p-6'>
                        <h2 className='text-2xl font-bold mb-2'>{team2.name} Players</h2>
                        <ul>
                            {team2.players.map((player, index) => (
                                <li key={index} className='mb-1'>{player}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FootballScore;
