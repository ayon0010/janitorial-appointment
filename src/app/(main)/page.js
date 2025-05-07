import Image from "next/image";
import side1 from "@/../public/assets/buy-commercial-cleaning-leads.webp";
import side2 from "@/../public/assets/contact-with-decision-maker.webp";
import slide4 from '@/../public/assets/exclusive-commercial-cleaning-leads-.webp';

import SectionTitles from "@/ui/SectionTitles";
import FaCheck from "@/ui/FaCheck";
import Reviews from "@/ui/Reviews";
import Pricing from "@/ui/Pricing";
import '../globals.css'
import Leads from "@/ui/Leads";
import Appointment from "@/ui/Appointment";
import ReviewItems from "../../ui/ReviewItems";
import { data } from '@/js/states';
import ContactInfo from "@/ui/ContactInfo";
import AudioPlayer from "@/Shared/Audio";
import ButtonPrimary from "@/ui/ButtonPrimary";
import Link from "next/link";
import Title from "@/Shared/Titles/Title";
import image2 from '@/../public/assets/img_03.jpg'
import image3 from '@/../public/assets/img_04.jpg'
import { poppins } from "./layout";
import ButtonTertiary from "@/ui/ButtonTertiary";
import SlideRight from "@/Animations/SlideRight";
import Banner from "@/ui/Home/Banner";
import Stepper from "@/ui/Home/Stepper";
import Service1 from "@/icons/Service-1";
import Service2 from "@/icons/Service2";
import Service3 from "@/icons/Service3";
import Service4 from "@/icons/Service4";
import ParticlesComponent from "@/Animations/Particles";
import ReviewSwiper from "@/ui/Home/ReviewSwiper";
import Team from "@/ui/Home/Team";
import DownAnimation from "@/Animations/DownAnimation";


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
                            <ButtonTertiary label={'Learn More'} />
                        </div>
                    </div>
                    {/* Images */}
                    <SlideRight>
                        <div className="relative 2xl:h-[580px] xl:h-[580px] h-[480px] 2xl:w-full xl:w-full w-[387px]">
                            <Image src={image2} loading="lazy" placeholder="blur" height={450} width={370} className="z-30 absolute bottom-0 left-0" alt="Janitorial lead generating by our agent" />
                            <Image src={image3} loading="lazy" placeholder="blur" height={450} width={370} className="z-20 absolute top-0 right-0 2xl:hover:translate-x-6 xl:hover:translate-x-6 duration-300 transition-all" alt="Janitorial lead generating by our agent" />
                        </div>
                    </SlideRight>
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
                <div className="2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto flex 2xl:flex-row xl:flex-row flex-col gap-16 2xl:items-center xl:items-center items-start 2xl:py-16 xl:py-16 py-10">
                    {/* Description of services */}
                    <div>
                        {/* Title */}
                        <Title
                            head={<>Our Expertise</>}
                            details={<>Some Of The
                                <br />  Services We Offer</>}
                        />
                        <p className="text-base text-[#777] font-light my-7 leading-7">Call Center Services International’s <br />management team has over 35-years of <br /> expertise in successfully establishing U.S.</p>
                        {/* Button */}
                        <ButtonTertiary label={'Learn More'} />
                    </div>
                    {/* Card Section */}
                    <div className="flex-1 w-full">
                        <SlideRight amount={0.1}>
                            {/* Services */}
                            <div className="2xl:h-[878px] xl:h-[878px] grid 2xl:grid-cols-2 xl:grid-cols-2 2xl:grid-rows-2 xl:grid-rows-2 gap-x-8 2xl:gap-y-0 xl:gap-y-0 gap-y-8 grid-cols-1 grid-rows-4">
                                {/* It Support */}
                                <div className="relative 2xl:pt-10 xl:pt-10 pt-0">
                                    <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] h-[384px] flex flex-col services">
                                        <div className="w-fit h-fit m-auto">
                                            <Service1 />
                                            <div className="mt-7 space-y-6">
                                                <h3 className={`text-xl ${poppins.className} font-medium`}>IT Development</h3>
                                                <p className="text-base text-[#777] font-light leading-7 service-text">Professional Web Solutions and <br /> Support Services</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Lead Generation */}
                                <div className="2xl:pt-3 xl:pt-3 pt-0">
                                    <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] h-[384px] flex flex-col services">
                                        <div className="w-fit h-fit m-auto">
                                            <Service2 />
                                            <div className="mt-7 space-y-6">
                                                <h3 className={`text-xl ${poppins.className} font-medium`}>Lead Generation</h3>
                                                <p className="text-base text-[#777] font-light leading-7 service-text">Improve direct response time,<br /> increase</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Appointment Setting Service */}
                                <div className="z-10 relative 2xl:pt-7 xl:pt-7 pt-0">
                                    <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] h-[384px] flex flex-col services">
                                        <div className="w-fit h-fit m-auto">
                                            <Service3 />
                                            <div className="mt-7 space-y-6">
                                                <h3 className={`text-xl ${poppins.className} font-medium`}>Appointment Setting</h3>
                                                <p className="text-base text-[#777] font-light leading-7 service-text">Exclusive Appointment Setting for <br /> Janitorial Services</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Digital Marketing */}
                                <div className="relative">
                                    <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] h-[384px] flex flex-col services">
                                        <div className="w-fit h-fit m-auto">
                                            <Service4 />
                                            <div className="mt-7 space-y-6">
                                                <h3 className={`text-xl ${poppins.className} font-medium`}>Digital Marketing</h3>
                                                <p className="text-base text-[#777] font-light leading-7 service-text">Expert SEO and Digital Marketing <br /> Services</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SlideRight>
                    </div>
                </div>

                {/* Reviews */}
                <div className="relative my-16">
                    {/* Background */}
                    <ParticlesComponent id="particles" />
                    {/* Swiper Reviews */}
                    <div className="w-fit h-fit absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                        <div className="space-y-5 mb-10">
                            <p className="text-white text-lg font-medium text-center">Testimonial</p>
                            <h3 className="text-white text-2xl font-bold text-center">What People Say About <br />Our Service</h3>
                        </div>
                        {/* Swiper */}
                        <ReviewSwiper />
                    </div>
                </div>
                {/* Pricing */}
                <div id="pricing" className="max-w-[1150px] mx-auto mb-20 mt-28">
                    <Pricing />
                </div>


                {/* Our Team */}
                <div className="text-center my-24 max-w-[1150px] mx-auto">
                    <DownAnimation>
                        <Title
                            head={<>Our team</>}
                            details={<>Our Best Specialists <br />
                                Work For You</>}
                        />
                    </DownAnimation>
                    <DownAnimation delay={0.6}>
                        <Team />
                    </DownAnimation>
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