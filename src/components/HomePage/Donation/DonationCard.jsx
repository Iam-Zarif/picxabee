"use client"
import { checkout } from '@/hooks/checkout';
// import Image from 'next/image';
import React from 'react';

const DonationCard = ({ title, imageUrl, price }) => {
    return (

    <div className='mb-2'>
            <div className="card w-80 glass">
            <figure><img src={imageUrl} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">Total donated {price}$</h2>
                <p>{title}</p>
                <div className="card-actions justify-end">
                    <button onClick={() => {
                        checkout({
                            lineItems: [{ price: "price_1Nn2TMIfrNNr5g42vzeaIzwf", quantity: 1 }]
                        })
                    }} className="btn btn-primary">Donate now</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DonationCard;