import Image from "next/image";
import side1 from "@/../public/assets/buy-commercial-cleaning-leads.webp";
import side2 from "@/../public/assets/contact-with-decision-maker.webp";
import slide4 from '../../../public/assets/exclusive-commercial-cleaning-leads-.webp';
import Banner from "@/ui/Banner";
import SectionTitles from "@/ui/SectionTitles";
import FaCheck from "@/ui/FaCheck";
import Reviews from "@/ui/Reviews";
import Pricing from "@/ui/Pricing";
import '../globals.css'
import Offers from "@/ui/Offers";
import Leads from "@/ui/Leads";
import Appointment from "@/ui/Appointment";
import Web from "@/ui/Web";
import image from '@/../public/assets/it-expert-for-cleaning-companies.webp';
import ReviewItems from "../../ui/ReviewItems";
import { data } from '@/js/states';
import ContactInfo from "@/ui/ContactInfo";
import AudioPlayer from "@/Shared/Audio";
import ButtonPrimary from "@/ui/ButtonPrimary";
import Link from "next/link";
import { headers } from "next/headers";
import Title from "@/Shared/Titles/Title";
import image2 from '@/../public/assets/img_03.jpg'
import image3 from '@/../public/assets/img_04.jpg'
import { poppins } from "./layout";
import ButtonTertiary from "@/ui/ButtonTertiary";
import SlideRight from "@/Animations/SlideRight";


export const metadata = {
    title: "Janitorial Appointments - Commercial Cleaning Leads",
    description: "We provide high-quality commercial cleaning leads, including office cleaning leads, janitorial appointments, and more, for cleaning businesses looking to grow.",
    keywords: "janitorial appointments, janitorial leads, commercial cleaning leads, office cleaning leads, cleaning business leads, commercial cleaning services, office cleaning services, janitorial services, professional cleaning leads, cleaning appointments, cleaning contractor leads, commercial cleaning business, business cleaning leads",
    other: {
        "application/ld+json": JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Commercial Cleaning Leads",
            "description": "We provide high-quality commercial cleaning leads, including office cleaning leads, janitorial appointments, and more, for cleaning businesses looking to grow.",
            "keywords": "janitorial appointments, janitorial leads, commercial cleaning leads, office cleaning leads, cleaning business leads, commercial cleaning services, office cleaning services, janitorial services, professional cleaning leads, cleaning appointments, cleaning contractor leads, commercial cleaning business, business cleaning leads",
            "provider": {
                "@type": "Organization",
                "name": "Janitorial Appointments",
                "url": "https://www.janitorialappointment.com/"
            },
            "serviceType": "Cleaning Leads",
            "areaServed": {
                "@type": "Place",
                "name": "United States"
            },
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Cleaning Leads Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Commercial Cleaning Leads"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Office Cleaning Leads"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Janitorial Appointment Booking"
                        }
                    }
                ]
            }
        }),
    },
};


export default async function Home() {
    const headersList = await headers();
    const userAgent = headersList.get("user-agent") || "";
    const isMobile = /Mobi|Android/i.test(userAgent);
    console.log(isMobile);

    return (
        <>
            <div className="relative">
                <Banner />
                <div className="absolute 2xl:-bottom-[150px] xl:-bottom-[150px] -bottom-[450px] w-full right-0 left-0">
                    <div className="2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto">
                        <Appointment />
                    </div>
                </div>
            </div>
            <div className="mt-[470px] 2xl:mt-60 xl:mt-60 2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto">
                <div className="2xl:py-20 xl:py-20 py-10 grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 items-center 2xl:gap-0 xl:gap-0 gap-8">
                    <div>
                        <Title />
                        <p className="text-base text-[#777] font-light mt-7">Our agents are fully bilingual, bi-cultural, well educated <br /> and have expertise in a wide array of business functions <br /> such as Debt Collection, Customer Service.</p>
                        <div className="mt-6 2xl:w-[75%] xl:w-[75%] w-full">
                            <div className="flex items-center justify-between mb-4">
                                <p className={`text-base font-light ${poppins.className}`}>Customer Service</p>
                                <p className={`text-base font-light ${poppins.className}`}>85%</p>
                            </div>
                            <progress className="progress progress-secondary w-full" value="85" max="100"></progress>
                            <div className="mt-6 flex items-center justify-between mb-4">
                                <p className={`text-base font-light ${poppins.className}`}>Sales / Lead Generation</p>
                                <p className={`text-base font-light ${poppins.className}`}>90%</p>
                            </div>
                            <progress className="progress progress-success w-full" value="90" max="100"></progress>
                        </div>
                        <div className="mt-12">
                            <ButtonTertiary label={'Learn More'} />
                        </div>
                    </div>
                    <SlideRight>
                        <div className="relative 2xl:h-[580px] xl:h-[580px] h-[480px]">
                            <Image src={image2} height={450} width={370} className="z-30 absolute bottom-0 left-0" alt="Janitorial lead generating by our agent" />
                            <Image src={image3} height={450} width={370} className="z-20 absolute top-0 right-0 2xl:hover:translate-x-6 xl:hover:translate-x-6 duration-300 transition-all" alt="Janitorial lead generating by our agent" />
                        </div>
                    </SlideRight>
                </div>
                <div className="px-6 mb-20">
                    <SectionTitles heading={"Find the right plan"} subHeading={"Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals."} />
                </div>
                <Pricing />
                <div className="mt-20">
                    <SectionTitles
                        heading={"Closed Deals"}
                        subHeading={"Listen to our agents successfully engaging with decision-makers"}
                    />
                </div>
                <div className="grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-6 my-16 2xl:px-10 xl:px-10 px-6">
                    <AudioPlayer src={'https://firebasestorage.googleapis.com/v0/b/clean-jobs-production.appspot.com/o/records%2F2023-10-16T19_16_15%2B00_00.mp3?alt=media&token=a6d77910-b142-4b4a-85a0-1d3f881f48c0'} name={'Apartment Complex Cleaning Leads'} />
                    <AudioPlayer src={'https://firebasestorage.googleapis.com/v0/b/clean-jobs-production.appspot.com/o/records%2FThe%20Royal%20King%20Palace%20and%20Convention%20Center-%20Diego-%20JAN.mp3?alt=media&token=fa1f1d37-b96c-4ceb-b17d-fa9d71aa3bc5'} name={'Convention Center Cleaning Leads'} />
                    <AudioPlayer src={'https://firebasestorage.googleapis.com/v0/b/clean-jobs-production.appspot.com/o/records%2F2024-10-29T15_24_20%2B00_00%20(2).mp3?alt=media&token=d1dec64b-7503-48c7-b8ec-61afc61c9cb0'} name={'Apartment Complex Cleaning Leads'} />
                </div>
                <h3 className="text-secondary text-center font-light text-xl mt-20 mb-4">How We Help You to Grow</h3>
                <div className="w-[80%] mx-auto">
                    <SectionTitles heading={'Discover Commercial Cleaning Leads Across the USA'} subHeading={"Janitorial Appointment connects cleaning companies with top commercial centers, hospitals, schools, and offices. Register now for exclusive access to appointment-setting opportunities."} />
                </div>
                <Leads />
            </div>

            <h5 className="text-secondary  text-center font-light text-xl mt-40 mb-4">What We Offer</h5>
            <SectionTitles heading={'Maximize results with minimal effort'} subHeading={"Get cleaning contracts sent straight to your inbox, easily find and delegate tasks to subcontractors, and engage with decision makers automatically"} />

            <div className=" md:px-10 px-6">
                <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row-reverse flex-col">
                    <div className="md:w-fit w-full md:pb-10 md:pt-10 md:pl-10 pb-6 pt-6 pl-6 bg-[#F5F6F7] rounded-[32px] h-fit">
                        <Image
                            src={slide4}
                            alt="Commercial Cleaning Leads across USA"
                            className="md:h-[400px] md:w-auto w-full h-auto"
                            loading="lazy"
                            width={950}
                            height={600}
                            sizes="(max-width:768px) 100vw,50vw"
                            priority={false} // Use `true` if this image is above the fold
                        />
                    </div>
                    <div className="md:space-y-3 space-y-3 md:w-1/2 w-full md:my-auto md:pr-24">
                        <h1 className="text-primary  font-medium md:text-lg text-sm">Nationwide Lead Supply</h1>
                        <h2 className="md:text-5xl text-3xl  font-semibold">
                            Get Quality Leads from Anywhere in the U.S.
                        </h2>
                        <p className=" font-normal text-sm">
                            We provide verified leads from all over the United States, helping you connect with potential clients no matter where your business operates.
                        </p>
                        <div className="space-y-1">
                            <div className="flex items-center gap-[11px]">
                                <div>
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Effortless Networking</p>
                            </div>
                            <div className="flex items-center gap-[11px]">
                                <div>
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Seamless Outreach</p>
                            </div>
                            <div className="flex items-center gap-[11px]">
                                <div>
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Nationwide Lead Coverage</p>
                            </div>
                            <div className="flex items-center gap-[11px]">
                                <div>
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Verified and Targeted Leads</p>
                            </div>
                        </div>
                        <div>
                            <Link href={'/search/exclusive-leads'}>
                                <ButtonPrimary label={'View More'} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row flex-col">
                    <div className="md:w-fit w-full md:pb-10 md:pt-10 md:pr-10 pb-6 pt-6 pr-6 bg-[#F5F6F7] rounded-[32px]" >
                        <Image
                            src={side2}
                            alt="Uncover Top Janitorial Leads"
                            className="md:h-[400px] md:w-auto w-full h-auto"
                            loading="lazy"
                            width={950}
                            height={600}
                            sizes="(max-width:768px) 100vw,50vw"
                        />
                    </div>
                    <div className="md:space-y-8 space-y-3 md:w-1/2 w-full md:my-auto md:pl-24">
                        <h1 className="text-primary  font-medium md:text-lg text-sm">Upcoming Cleaning Project Access</h1>
                        <h2 className="md:text-5xl text-3xl  font-semibold">Uncover Top <br /> Cleaning Jobs</h2>
                        <p className=" font-normal text-sm">Access upcoming cleaning projects, including office and construction clean-ups, all gathered in one place.</p>
                        <div className="space-y-1">
                            <div className="flex items-center gap-[11px]">
                                <div className="">
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Effortless Access</p>
                            </div>
                            <div className="flex items-center gap-[11px]">
                                <div className="">
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Enhanced Planning</p>
                            </div>
                            <div className="flex items-center gap-[11px]">
                                <div className="">
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Expanded Opportunities</p>
                            </div>
                        </div>
                        <div>
                            <Link href={'/search/exclusive-leads'}>
                                <ButtonPrimary label={'View More'} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row-reverse flex-col">
                    <div className="md:w-fit w-full md:pb-10 md:pt-10 md:pl-10 pb-6 pt-6 pl-6 bg-[#F5F6F7] rounded-[32px]">
                        <Image
                            src={side2}
                            alt="Reach decision makers instantly and effortlessly with top janitorial leads"
                            className="md:h-[400px] md:w-auto w-full h-auto"
                            loading="lazy"
                            width={950}
                            height={600}
                            sizes="(max-width:768px) 100vw,50vw"
                        />
                    </div>
                    <div className="md:space-y-8 space-y-3 md:w-1/2 w-full md:my-auto md:pr-24">
                        <h1 className="text-primary  font-medium md:text-lg text-sm">Local Decision Maker Discovery</h1>
                        <h2 className="md:text-5xl text-3xl  font-semibold">Reach Decision Makers Instantly & Effortlessly</h2>
                        <p className=" font-normal text-sm">Discover key decision makers nearby and initiate contact seamlessly</p>
                        <div className="space-y-1">
                            <div className="flex items-center gap-[11px]">
                                <div>
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Effortless Networking</p>
                            </div>
                            <div className="flex items-center gap-[11px]">
                                <div>
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Seamless Outreach</p>
                            </div>
                            <div className="flex items-center gap-[11px]">
                                <div>
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Enhanced Collaboration</p>
                            </div>
                        </div>
                        <div>
                            <Link href={'/search/exclusive-leads'}>
                                <ButtonPrimary label={'View More'} />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row flex-col" >
                    <div className="md:w-1/2 w-full bg-[#F5F6F7] rounded-[32px]">
                        <Image
                            src={side1}
                            className="md:w-auto mx-auto md:h-[500px] w-3/4"
                            alt="Buy high-quality commercial leads for janitorial services to boost your business"
                            loading="lazy"
                            width={950}
                            height={600}
                            sizes="(max-width:768px) 100vw,50vw"
                        />
                    </div>
                    <div className="space-y-6 md:w-1/2 w-full md:my-auto md:pl-24">
                        <h1 className="text-primary  font-medium md:text-lg text-sm">Buy High-Quality Cleaning Leads</h1>
                        <h2 className="md:text-5xl text-3xl  font-semibold">
                            Get Access to Exclusive Leads for Your Cleaning Business
                        </h2>
                        <p className=" font-normal text-sm">
                            Purchase our curated leads to connect with potential clients actively seeking cleaning services. Start growing your business with targeted, high-quality leads tailored to your needs.
                        </p>

                        <div className="space-y-1">
                            <div className="flex items-center gap-[11px]">
                                <div className="">
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Exclusive Cleaning Leads</p>
                            </div>
                            <div className="flex items-center gap-[11px]">
                                <div className="">
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Verified Client Information</p>
                            </div>
                            <div className="flex items-center gap-[11px]">
                                <div className="">
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium ">Boosted Business Growth</p>
                            </div>
                        </div>
                        <div>
                            <Link href={'/search/exclusive-leads'}>
                                <ButtonPrimary label={'View More'} />
                            </Link>
                        </div>
                    </div>
                </div>

                <p className="text-secondary  text-center font-light text-xl mt-20 mb-4">Effortless business growth.</p>
                <SectionTitles
                    heading={"Boost Your Business with a Multi-Channel Lead Generation Strategy"}
                    subHeading={
                        "High-quality commercial cleaning leads delivered to your inbox, connect with top prospects, and automate engagement with key decision-makers."
                    }
                />
                <Offers />

                <Web image={image} />

                <div className="2xl:mt-40 xl:mt-40 mt-20">
                    <SectionTitles
                        heading={"What Our Clients Say"}
                        subHeading={
                            "We appreciate your trust in Janitorial Appointment! Our commitment is to provide quality janitorial leads and reliable service connections to meet your business needs. Hear from clients who have successfully grown their businesses with us."
                        }
                    />
                </div>
                <div className='md:grid md:grid-cols-3 md:gap-3 hidden mt-10'>
                    {
                        data?.map((d, i) => {
                            return (
                                <ReviewItems key={i} d={d} />
                            )
                        })
                    }
                </div>
                <Reviews />
                {/*  */}
            </div>
            <div className="py-10 bg-white">
                <SectionTitles heading={"Contact Us"} />
                <ContactInfo />
            </div>
        </>
    )
}