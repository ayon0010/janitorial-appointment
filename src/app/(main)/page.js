import Image from "next/image";
import side1 from "@/../public/assets/597346f805a7ac1230c3c0eb176f2c90_result.webp";
import side2 from "@/../public/assets/3a5f8d21d291fb96da9cf2d4b91d2db0_result_result.webp";
import slide4 from '../../../public/assets/Screenshot (12)_result_result_result.webp';
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
import image from '@/../public/assets/group-young-business-people-working-office_result.webp';
import ReviewItems from "../../ui/ReviewItems";
import { data } from '@/js/states';
import ContactAnimationForHome from "@/ui/ContactAnimationForHome";

export const metadata = {
    title: "Janitorial Appointments | Commercial Cleaning Leads",
    description:
        "Boost your janitorial business with high-quality janitorial appointments and commercial cleaning leads. Unlock effective lead generation strategies for growth.",
    keywords: [
        "janitorial appointments",
        "commercial cleaning leads",
        "janitorial lead generation",
        "cleaning service leads",
        "book janitorial appointments",
    ],
    authors: [
        {
            name: "Al Shariar Auon",
        },
    ],
    charset: "utf-8",
};


export default function Home() {
    return (
        <div>
            {/* Banner */}
            <Banner />
            <div className="2xl:px-10 xl:px-10 px-6">
                <div className="mt-20">
                    <div className="px-6 mb-10">
                        <SectionTitles heading={"Book an appointment"} subHeading={"Reserve a convenient time for your appointment"} />
                    </div>
                    <Appointment />
                </div>
                <div className="2xl:py-20 xl:py-20 py-10">
                    <div className="px-6">
                        <SectionTitles heading={"Find the right plan"} subHeading={"Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals."} />
                    </div>
                    <Pricing />
                </div>
                <h5 className="text-secondary text-center font-light text-xl mt-20 mb-4">How We Help You to Grow</h5>
                <div className="w-[80%] mx-auto">
                    <SectionTitles heading={'Discover Commercial Cleaning Leads Across the USA'} subHeading={"Janitorial Appointment connects cleaning companies with top commercial centers, hospitals, schools, and offices. Register now for exclusive access to appointment-setting opportunities."} />
                </div>
                <Leads />
            </div>

            <div>
                <h5 className="text-secondary  text-center font-light text-xl mt-20 mb-4">What We Offer</h5>
                <SectionTitles heading={'Maximize results with minimal effort'} subHeading={"Get cleaning contracts sent straight to your inbox, easily find and delegate tasks to subcontractors, and engage with decision makers automatically"} />
            </div>
            <div className=" md:px-10 px-6">
                <div className="">
                    <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row-reverse flex-col">
                        <div className="md:w-fit w-full md:pb-6 md:pt-10 md:pl-10 pb-6 pt-6 pl-6 bg-[#F5F6F7] rounded-[32px]">
                            <Image
                                src={slide4}
                                alt="Commercial Cleaning Leads across USA"
                                className="md:h-[400px] md:w-auto w-full h-auto"
                                loading="lazy"
                                width={1609}
                                height={813}
                                priority={false} // Use `true` if this image is above the fold
                            />
                        </div>
                        <div className="md:space-y-8 space-y-3 md:w-1/2 w-full md:my-auto md:pr-24">
                            <h5 className="text-primary  font-medium md:text-lg text-sm">Nationwide Lead Supply</h5>
                            <h1 className="md:text-5xl text-3xl  font-semibold">
                                Get Quality Leads from Anywhere in the U.S.
                            </h1>
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
                        </div>
                    </div>

                    <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row flex-col">
                        <div className="md:w-fit w-full md:pb-10 md:pt-10 md:pr-10 pb-6 pt-6 pr-6 bg-[#F5F6F7] rounded-[32px]" >
                            <Image
                                src={side2}
                                alt="Uncover Top Janitorial Leads"
                                className="md:h-[400px] md:w-auto w-full h-auto"
                                loading="lazy"
                                width={2895}
                                height={1891}

                            />
                        </div>
                        <div className="md:space-y-8 space-y-3 md:w-1/2 w-full md:my-auto md:pl-24">
                            <h5 className="text-primary  font-medium md:text-lg text-sm">Upcoming Cleaning Project Access</h5>
                            <h1 className="md:text-5xl text-3xl  font-semibold">Uncover Top <br /> Cleaning Jobs</h1>
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
                        </div>
                    </div>

                    <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row-reverse flex-col">
                        <div className="md:w-fit w-full md:pb-10 md:pt-10 md:pl-10 pb-6 pt-6 pl-6 bg-[#F5F6F7] rounded-[32px]">
                            <Image
                                src={side2}
                                alt="Reach decision makers instantly and effortlessly with top janitorial leads"
                                className="md:h-[400px] md:w-auto w-full h-auto"
                                loading="lazy"
                                width={2895}
                                height={1891}

                            />
                        </div>
                        <div className="md:space-y-8 space-y-3 md:w-1/2 w-full md:my-auto md:pr-24">
                            <h5 className="text-primary  font-medium md:text-lg text-sm">Local Decision Maker Discovery</h5>
                            <h1 className="md:text-5xl text-3xl  font-semibold">Reach Decision Makers Instantly & Effortlessly</h1>
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
                        </div>
                    </div>

                    <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row flex-col" >
                        <div className="md:w-1/2 w-full bg-[#F5F6F7] rounded-[32px]">
                            <Image
                                src={side1}
                                className="md:w-auto mx-auto md:h-[500px] w-3/4"
                                alt="Buy high-quality commercial leads for janitorial services to boost your business"
                                loading="lazy"
                                width={1840}
                                height={2192}
                            />
                        </div>
                        <div className="space-y-6 md:w-1/2 w-full md:my-auto md:pl-24">
                            <h5 className="text-primary  font-medium md:text-lg text-sm">Buy High-Quality Cleaning Leads</h5>
                            <h1 className="md:text-5xl text-3xl  font-semibold">
                                Get Access to Exclusive Leads for Your Cleaning Business
                            </h1>
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
                        </div>
                    </div>

                </div>
                <div className="">
                    <h5 className="text-secondary  text-center font-light text-xl mt-20 mb-4">Effortless business growth.</h5>
                    <SectionTitles
                        heading={"Boost Your Business with a Multi-Channel Lead Generation Strategy"}
                        subHeading={
                            "High-quality commercial cleaning leads delivered to your inbox, connect with top prospects, and automate engagement with key decision-makers."
                        }
                    />
                    <Offers />
                </div>

                <div>
                    <Web image={image} />
                </div>

                <div className="2xl:mt-40 xl:mt-40 mt-20">
                    <SectionTitles
                        heading={"What Our Clients Say"}
                        subHeading={
                            "We appreciate your trust in Janitorial Appointment! Our commitment is to provide quality janitorial leads and reliable service connections to meet your business needs. Hear from clients who have successfully grown their businesses with us."
                        }
                    />
                </div>
                <div>
                    <div className='md:grid md:grid-cols-3 md:gap-3 hidden'>
                        {
                            data?.map((d, i) => {
                                return (
                                    <ReviewItems key={i} d={d} />
                                )
                            })
                        }
                    </div>
                </div>
                <Reviews />
                {/*  */}
            </div>
            <div className="py-28  bg-white">
                <SectionTitles heading={"Contact Us"} />
                <ContactAnimationForHome />
            </div>
        </div >
    )
}