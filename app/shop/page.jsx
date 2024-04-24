"use client";

import { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cart from './cart/page';

const EShop = () => {
    const [selectedItem, setSelectedItem] = useState('All');
    const [cart, setCart] = useState([]);

    const items = [
        { name: 'Shirts', description: 'High quality sports shirt.', price: '$20', category: 'Shirts' },
        { name: 'Cricket Bat', description: 'Professional cricket bat.', price: '$50', category: 'Cricket Bats' },
        { name: 'Football', description: 'High quality football.', price: '$30', category: 'Footballs' },
        { name: 'Shoes', description: 'High quality sports shoes.', price: '$40', category: 'Shoes' },
        { name: 'Gloves', description: 'High quality sports gloves.', price: '$10', category: 'Gloves' },
        { name: 'Helmet', description: 'High quality sports helmet.', price: '$15', category: 'Helmets' },
        { name: 'Pads', description: 'High quality sports pads.', price: '$20', category: 'Pads' },
        { name: 'Balls', description: 'High quality sports balls.', price: '$10', category: 'Balls' },
        { name: 'Bats', description: 'High quality sports bats.', price: '$20', category: 'Bats' },
        { name: 'Shirts', description: 'High quality sports shirt.', price: '$20', category: 'Shirts' },
    ];

    const handleBuyNow = (item) => {
        setCart([...cart, item]);
        alert(`${item.name} has been added to the cart.`);
    };

    return (
        <div>
            <Navbar />
            <Cart cart={cart} />

            <div className='py-20 bg-gray-800 text-white px-2 md:px-20'>
                <h1 className='text-4xl sm:text-5xl font-bold text-center mb-10'>Inventory</h1>
                <div className='mb-10'>
                    <label htmlFor='items' className='mr-2'>Select Item:</label>
                    <select id='items' value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}
                    className='px-4 py-2 bg-white text-teal-500 rounded hover:bg-gray-200'
                    >
                        <option value='All'>All</option>
                        <option value='Shirts'>Shirts</option>
                        <option value='Cricket Bats'>Cricket Bats</option>
                        <option value='Footballs'>Footballs</option>
                        <option value='Shoes'>Shoes</option>
                        <option value='Gloves'>Gloves</option>
                        <option value='Helmets'>Helmets</option>
                        <option value='Pads'>Pads</option>
                        <option value='Balls'>Balls</option>
                        <option value='Bats'>Bats</option>
                    </select>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {items.filter(item => selectedItem === 'All' || item.category === selectedItem).map((item, index) => (
                        <div key={index} className='bg-teal-500 rounded-lg shadow-md p-6'>
                            <FaShoppingCart className='mb-2' />
                            <h2 className='text-2xl font-bold mb-2'>{item.name}</h2>
                            <p className='mb-4'>{item.description}</p>
                            <p className='mb-4'>{item.price}</p>
                            <button onClick={() => handleBuyNow(item)} className='px-4 py-2 bg-white text-teal-500 rounded hover:bg-gray-200'>
                                Buy Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default EShop;
