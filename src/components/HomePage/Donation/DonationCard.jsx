"use client";
import { checkout } from "@/hooks/checkout";
// import Image from 'next/image';
// import Image from 'next/image';
const DonationCard = ({ title, imageUrl, price }) => {
  return (
    <div className="mb-2">
      <div className="card w-full glass rounded-md">
        <div className="ml-8 flex items-center space-x-4 py-4">
          <div className="avatar">
            <div className="rounded-full w-12 h-12">
              <img
                src="https://i.ibb.co/P5ghfdx/admin.jpg"
                alt="avatar"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">Brice Swyre</div>
          </div>
        </div>
        {/* ...................................... */}
        <img src={imageUrl} alt="donate" />
        <div className="card-body">
          <h2 className="card-title">Total donated {price}$</h2>
          <p>{title}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => {
                checkout({
                  lineItems: [
                    { price: "price_1Nn2TMIfrNNr5g42vzeaIzwf", quantity: 1 },
                  ],
                });
              }}
              className="btn
                    rounded-md hover:bg-primary-color hover:text-white border-gray font-semibold lg:ml-5 capitalize dark:border-white dark:hover:bg-black"
            >
              Donate now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
