"use client";

import Footer from '@/app/components/Footer';
import Navbar from '@/app/components/Navbar';
import React from 'react';
// import cricket icon from react-icons
import { IoMdBaseball } from "react-icons/io";

const CricketScore = () => {

    const [totalOvers, setTotalOvers] = [20];
    const [whosBatting, setWhosBatting] = ['SE20'];
    const [whosBowling, setWhosBowling] = ['SE21'];
    const [team1Runs, setTeam1Runs] = [210];
    const [team2Runs, setTeam2Runs] = [180];
    const [team1Wickets, setTeam1Wickets] = [5];
    const [team2Wickets, setTeam2Wickets] = [7];
    
    const team1 = {
        name: 'SE20',
        runScorers: ['Ali Khan', 'Faizan Nasir', 'Rohaan Amin'],
        players: ['Ali Khan', 'Hamza Ahmed', 'Muhammad Bilal', 'Aryan Malik', 'Faizan Nasir',
            'Huzaifa Omar', 'Rayan Samir', 'Rohaan Amin', 'Atfat Aza', 'Awamil Osman', 'Awamiri Rahim']
    };

    const team2 = {
        name: 'SE21',
        runScorers: ['Zayan Shah', 'Usman Riaz'],
        players: ['Zayan Shah', 'Ibrahim Ali', 'Usman Riaz', 'Saad Farooq', 'Talha Siddiqui',
            'Faisal Iqbal', 'Arham Aziz', 'Bilal Hussain', 'Danish Akhtar', 'Ehsan Ullah', 'Fahad Mustafa']

    };

    return (
        <div>
            <Navbar />
            <div className='py-20 bg-gray-800 text-white px-2 md:px-20'>
                <h1 className='text-xl sm:text-2xl font-bold text-center mb-4'>Cricket Match Live Score
                    <IoMdBaseball className='rotate inline-block text-4xl text-teal-500' />
                </h1>

                <h1
                    className='text-xl sm:text-2xl text-center mb-4col-span-full'
                >
                    {team1.name} vs {team2.name}
                </h1>
                <p
                    className='text-sm sm:text-lg text-center mb-2 col-span-full'
                >
                    {whosBatting} is won the toss and elected to bat first
                </p>

                <h1
                    className='text-xl sm:text-2xl text-center mb-4 col-span-full'
                >
                    Target :
                    {" " + team1Runs + "    " +  (whosBowling)}
                </h1>
                <h2
                className='text-xl sm:text-2xl text-center mb-4 col-span-full'
                >
                    {whosBatting} : {team2Runs} - {team2Wickets}
                </h2>
                <h2 className='text-2xl text-center my-4'>
                    {whosBatting} needs {team1Runs - team2Runs + 1} runs in {totalOvers-16} overs
                </h2>

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

export default CricketScore;
