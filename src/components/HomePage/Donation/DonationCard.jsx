"use client"
import { checkout } from '@/hooks/checkout';
// import Image from 'next/image';
import React from 'react';
// import Image from 'next/image';
const DonationCard = ({ title, imageUrl, price }) => {
    return (

        <div className='mb-2'>
            <div className="card w-full glass rounded-md">
                <img src={imageUrl}  alt="donate" />
                <div className="card-body">
                    <h2 className="card-title">Total donated {price}$</h2>
                    <p>{title}</p>
                    <div className="card-actions justify-end">
                        <button onClick={() => {
                            checkout({
                                lineItems: [{ price: "price_1Nn2TMIfrNNr5g42vzeaIzwf", quantity: 1 }]
                            })
                        }} className="btn
                    rounded-md hover:bg-primary-color hover:text-white border-gray font-semibold lg:ml-5 capitalize dark:border-white dark:hover:bg-black">Donate now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationCard;