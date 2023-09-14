import DonationCard from "@/components/HomePage/Donation/DonationCard"


const allDonations = () => {
  return (
    <div className="my-2 mx-10">
        <p className="text-xl font-semibold mb-8 border-b-2 p-5 border-primary-color">All donations here</p>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
            <DonationCard />
        </div>
    </div>
  )
}

export default allDonations