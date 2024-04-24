"use client";

import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Cart = ({ cart }) => {
    const [showCart, setShowCart] = useState(false);

    return (
        <div>
            <div className='fixed top-32 right-2 p-4 bg-teal-500 text-white rounded-tl-lg shadow-md'>
                <button onClick={() => setShowCart(!showCart)} className='flex items-center'>
                    <FaShoppingCart className='mr-2' />
                    <span>Cart ({cart?.length})</span>
                </button>
            </div>
            {showCart && (
                <div className='fixed top-32 right-2 md:right-32 w-64 md:w-auto p-4 bg-white text-teal-500 rounded-tl-lg shadow-md overflow-y-auto border border-teal-500'>
                    <FaTimes className='absolute top-2 right-2 cursor-pointer
                    sm:d-none
                    ' onClick={() => setShowCart(false)} />
                    <ul>
                        {cart.map((item, index) => (
                            <li key={index} className='mb-2 flex justify-center items-center gap-4 flex-wrap'>
                                <span className='w-full md:w-auto'>{item.name}</span>
                                <p className='text-sm'>{item.price}</p>
                                <p className='text-sm'>Quantity: 1</p>
                                <button className='px-2 py-1 bg-teal-500 text-white rounded-lg'
                                    onClick={() => {
                                        alert(`${item.name} removed from the cart.`);
                                }}
                                >Remove</button>
                                <hr className='w-full my-2' />
                            </li>
                        ))}
                    </ul>

                <div>
                        <button className='bg-teal-500 text-white px-4 py-2 rounded-lg flex items-end w-fit h-fit '
                        onClick={() => alert('Your order placed successfully. You will received an email with the order details soon.')}
                        >
                                Order Now
                    </button>
                    </div>
                </div>


            )}
        </div>
    );
};

export default Cart;
