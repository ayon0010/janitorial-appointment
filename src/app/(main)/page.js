import Pricing from "@/ui/Pricing";
import '../globals.css'
import Appointment from "@/ui/Appointment";
import ContactInfo from "@/ui/ContactInfo";
import Link from "next/link";
import Title from "@/Shared/Titles/Title";
import ButtonTertiary from "@/Shared/Buttons/ButtonTertiary";
import Banner from "@/ui/Home/Banner";
import Stepper from "@/ui/Home/Stepper";
import SectionTitles from "@/Shared/SectionTitles";
import ServiceImageWrapper from "@/Shared/ServiceImageWrapper";
import ServiceWrapper from "@/Shared/ServiceWrappper";
import UserReviewWrapper from "@/Shared/UserReviewWrapper";
import TeamWrapper from "@/ui/TeamWrapper";
import { poppins } from "@/fonts/Poppins";


export const metadata: Metadata = {
  title: 'Janitorial Appointments & Commercial Cleaning Leads | Get Qualified Clients',
  description: 'Get high-quality janitorial appointments and commercial cleaning leads. We generate qualified prospects and book appointments for cleaning businesses nationwide. Start free today!',
  keywords: ['janitorial appointments', 'commercial cleaning leads', 'janitorial leads', 'cleaning leads', 'appointment booking'],
  openGraph: {
    title: 'Janitorial Appointments & Commercial Cleaning Leads',
    description: 'Get qualified janitorial appointments and commercial cleaning leads.',
    url: 'https://www.janitorialappointment.com',
    type: 'website',
  },
}


export default async function Home() {
    return (
        <>
            <div className="relative">
                {/* Banner */}
                <Banner />

                {/* Book an appointment */}
                <div className="absolute 2xl:-bottom-[150px] xl:-bottom-[150px] -bottom-[450px] w-full right-0 left-0">
                    <div className="2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto">
                        {/* Appointment form */}
                        <Appointment />
                    </div>
                </div>
            </div>

            {/* Rest of the section */}
            <div className="mt-[470px] 2xl:mt-60 xl:mt-60">
                {/* About Us section for call center */}
                <div className="2xl:py-20 xl:py-20 py-10 2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 items-center 2xl:gap-0 xl:gap-0 gap-8">
                    {/* Text side */}
                    <div>
                        {/* Section Title*/}
                        <Title
                            head={<>About Us</>}
                            details={<>World Class <br />Janitorial Lead <br /> Generator</>}
                        />
                        <p className="text-base text-[#777] font-light mt-7">Our agents are fully bilingual, bi-cultural, well educated <br /> and have expertise in a wide array of business functions <br /> such as Debt Collection, Customer Service.</p>
                        <div className="mt-6 2xl:w-[75%] xl:w-[75%] w-full">
                            {/* Progress Type (Customer Service) */}
                            <div className="flex items-center justify-between mb-4">
                                <p className={`text-base font-light ${poppins.className}`}>Customer Service</p>
                                <p className={`text-base font-light ${poppins.className}`}>85%</p>
                            </div>
                            {/* Progress Bar Customer Service */}
                            <progress className="progress progress-secondary w-full" value="85" max="100"></progress>

                            {/* Progress Type (Lead Generation) */}
                            <div className="mt-6 flex items-center justify-between mb-4">
                                <p className={`text-base font-light ${poppins.className}`}>Sales / Lead Generation</p>
                                <p className={`text-base font-light ${poppins.className}`}>90%</p>
                            </div>

                            {/* Progress Bar Lead Generation */}
                            <progress className="progress w-full progress-primary" value="90" max="100"></progress>
                        </div>
                        <div className="mt-12">
                            <Link href={'/about'}>
                                <ButtonTertiary label={'Learn More'} />
                            </Link>
                        </div>
                    </div>
                    {/* Images */}
                    <ServiceImageWrapper />
                </div>

                {/* How to get Started */}

                <div className="bg-[#F8F8F8] 2xl:my-20 xl:my-20 my-10 2xl:py-32 xl:py-32 py-16">
                    <div className="2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto">
                        <Title
                            head={<>Four easy steps</>}
                            details={<>How To Get <br /> Started</>}
                        />
                        {/* Step Part */}
                        <Stepper />
                    </div>
                </div>

                {/* Our Services */}
                <ServiceWrapper />

                {/* Reviews */}
                <div className="my-16">
                    <UserReviewWrapper />
                </div>
                {/* Pricing */}
                <div id="pricing" className="max-w-[1150px] mx-auto mb-20 mt-28">
                    <Pricing />
                </div>


                {/* Our Team */}
                <div className="text-center my-24 max-w-[1150px] mx-auto">
                    <TeamWrapper />
                </div>
            </div>
            {/* Contact Info */}
            <div className="bg-white 2xl:pb-0 xl:pb-0 pb-20">
                <SectionTitles heading={"Contact Us"} />
                <div className="max-w-[1150px] mx-auto">
                    <ContactInfo />
                </div>
            </div>
        </>
    )
}
