import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ReportsPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-gray-800 text-white">
            <Navbar />

            <main className="flex-grow container mx-auto p-4 md:p-8">
                <h1 className="text-2xl font-bold mb-4">Reports Page</h1>

                <div className="bg-teal-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-bold mb-2">Participant Performance</h2>
                    <div className="mb-4">
                        <h3 className="font-bold">Participant Name</h3>
                        <p>Score: 100</p>
                    </div>
                </div>

                <div className="bg-teal-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-bold mb-2">Event Attendance</h2>
                    <div className="mb-4">
                        <h3 className="font-bold">Event Name</h3>
                        <p>Attendance: 50</p>
                    </div>
                </div>

                <div className="bg-teal-500 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h2 className="text-xl font-bold mb-2">Overall Success</h2>
                    <div className="mb-4">
                        <p>Overall Score: 90</p>
                        <p>Feedback: Positive</p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default ReportsPage;
