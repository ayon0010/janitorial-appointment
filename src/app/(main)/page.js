import Image from "next/image";
import side1 from "@/../public/assets/597346f805a7ac1230c3c0eb176f2c90.png";
import side2 from "@/../public/assets/3a5f8d21d291fb96da9cf2d4b91d2db0.png";
import side3 from "@/../public/assets/21d3c07652283c432b6c4b982b0d04d0.png";
import slide4 from '../../../public/assets/Screenshot (12).png';
import Banner from "@/ui/Banner";
import SectionTitles from "@/ui/SectionTitles";
import FaCheck from "@/ui/FaCheck";
import Reviews from "@/ui/Reviews";
import Utilities from "@/ui/Utilities";
import Pricing from "@/ui/Pricing";
import Footer from "@/Shared/Footer";
import '../globals.css'
import Offers from "@/ui/Offers";
import Leads from "@/ui/Leads";

export default function Home() {
    return (
        <div>
            {/* Banner */}
            <Banner />
            {/* Section */}
            <div className="2xl:px-10 xl:px-10 px-6">
                <h5 className="text-secondary nunito text-center font-light text-xl mt-20 mb-4">Effortless business growth.</h5>
                <SectionTitles
                    heading={"Boost Your Business with a Multi-Channel Lead Generation Strategy"}
                    subHeading={
                        "High-quality commercial cleaning leads delivered to your inbox, connect with top prospects, and automate engagement with key decision-makers."
                    }
                />
                <Offers />
            </div>
            <div className="max-w-screen-2xl mx-auto md:px-10 px-6">
                <h5 className="text-secondary nunito text-center font-light text-xl mt-20 mb-4">How We Help You to Grow</h5>
                <div className="w-[80%] mx-auto">
                    <SectionTitles heading={'Discover Commercial Cleaning Leads Across the USA'} subHeading={"Janitorial Appointment connects cleaning companies with top commercial centers, hospitals, schools, and offices. Register now for exclusive access to appointment-setting opportunities."} />
                </div>

                <Leads />

                <div className="2xl:mt-40 xl:mt-40 mt-20">
                    <h5 className="text-secondary nunito text-center font-light text-xl mt-20 mb-4">What We Offer</h5>
                    <SectionTitles heading={'Maximize results with minimal effort'} subHeading={"Get cleaning contracts sent straight to your inbox, easily find and delegate tasks to subcontractors, and engage with decision makers automatically"} />


                    <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row-reverse flex-col">
                        <div className="md:w-fit w-full md:pb-10 md:pt-10 md:pl-10 pb-6 pt-6 pl-6 bg-[#F4F4F4] rounded-[32px]" data-aos="fade-left">
                            <Image src={slide4} className="md:h-[400px] md:w-auto w-full h-auto" alt="" />
                        </div>
                        <div className="md:space-y-8 space-y-3 md:w-1/2 w-full md:my-auto md:pr-24">
                            <h5 className="text-primary poppins font-medium md:text-lg text-sm">Nationwide Lead Supply</h5>
                            <h1 className="md:text-5xl text-3xl poppins font-semibold">
                                Get Quality Leads from Anywhere in the U.S.
                            </h1>
                            <p className="poppins font-normal text-sm">
                                We provide verified leads from all over the United States, helping you connect with potential clients no matter where your business operates.
                            </p>
                            <div className="space-y-1">
                                <div className="flex items-center gap-[11px]">
                                    <div>
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Effortless Networking</p>
                                </div>
                                <div className="flex items-center gap-[11px]">
                                    <div>
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Seamless Outreach</p>
                                </div>
                                <div className="flex items-center gap-[11px]">
                                    <div>
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Nationwide Lead Coverage</p>
                                </div>
                                <div className="flex items-center gap-[11px]">
                                    <div>
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Verified and Targeted Leads</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row flex-col">
                        <div className="md:w-fit w-full md:pb-10 md:pt-10 md:pr-10 pb-6 pt-6 pr-6 bg-[#F4F4F4] rounded-[32px]" data-aos="fade-right">
                            <Image src={side2} className="md:h-[400px] md:w-auto w-full h-auto" alt="" />
                        </div>
                        <div className="md:space-y-8 space-y-3 md:w-1/2 w-full md:my-auto md:pl-24">
                            <h5 className="text-primary poppins font-medium md:text-lg text-sm">Upcoming Cleaning Project Access</h5>
                            <h1 className="md:text-5xl text-3xl poppins font-semibold">Uncover Top <br /> Cleaning Jobs</h1>
                            <p className="poppins font-normal text-sm">Access upcoming cleaning projects, including office and construction clean-ups, all gathered in one place.</p>
                            <div className="space-y-1">
                                <div className="flex items-center gap-[11px]">
                                    <div className="">
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Effortless Access</p>
                                </div>
                                <div className="flex items-center gap-[11px]">
                                    <div className="">
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Enhanced Planning</p>
                                </div>
                                <div className="flex items-center gap-[11px]">
                                    <div className="">
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Expanded Opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row-reverse flex-col">
                        <div className="md:w-fit w-full md:pb-10 md:pt-10 md:pl-10 pb-6 pt-6 pl-6 bg-[#F4F4F4] rounded-[32px]" data-aos="fade-left">
                            <Image src={side2} className="md:h-[400px] md:w-auto w-full h-auto" alt="" />
                        </div>
                        <div className="md:space-y-8 space-y-3 md:w-1/2 w-full md:my-auto md:pr-24">
                            <h5 className="text-primary poppins font-medium md:text-lg text-sm">Local Decision Maker Discovery</h5>
                            <h1 className="md:text-5xl text-3xl poppins font-semibold">Reach Decision Makers Instantly & Effortlessly</h1>
                            <p className="poppins font-normal text-sm">Discover key decision makers nearby and initiate contact seamlessly</p>
                            <div className="space-y-1">
                                <div className="flex items-center gap-[11px]">
                                    <div>
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Effortless Networking</p>
                                </div>
                                <div className="flex items-center gap-[11px]">
                                    <div>
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Seamless Outreach</p>
                                </div>
                                <div className="flex items-center gap-[11px]">
                                    <div>
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Enhanced Collaboration</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row flex-col" >
                        <div className="md:w-1/2 w-full bg-[#F4F4F4] rounded-[32px]" data-aos="fade-right">
                            <Image src={side1} className="md:w-auto mx-auto md:h-[500px] w-3/4" alt="" />
                        </div>
                        <div className="space-y-6 md:w-1/2 w-full md:my-auto md:pl-24">
                            <h5 className="text-primary poppins font-medium md:text-lg text-sm">Buy High-Quality Cleaning Leads</h5>
                            <h1 className="md:text-5xl text-3xl poppins font-semibold">
                                Get Access to Exclusive Leads for Your Cleaning Business
                            </h1>
                            <p className="poppins font-normal text-sm">
                                Purchase our curated leads to connect with potential clients actively seeking cleaning services. Start growing your business with targeted, high-quality leads tailored to your needs.
                            </p>

                            <div className="space-y-1">
                                <div className="flex items-center gap-[11px]">
                                    <div className="">
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Exclusive Cleaning Leads</p>
                                </div>
                                <div className="flex items-center gap-[11px]">
                                    <div className="">
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Verified Client Information</p>
                                </div>
                                <div className="flex items-center gap-[11px]">
                                    <div className="">
                                        <FaCheck />
                                    </div>
                                    <p className="md:text-lg text-sm font-medium poppins">Boosted Business Growth</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <div className="md:mt-32 mt-14 flex md:gap-0 gap-4 md:flex-row-reverse flex-col">
                    <div className="md:w-1/2 w-full bg-[#F4F4F4] py-10 rounded-[32px]">
                        <Image src={side3} className="md:w-auto mx-auto md:h-[520px] w-1/2 h-auto" alt="" />
                    </div>
                    <div className="space-y-6 md:w-1/2 w-full md:my-auto md:pr-24">
                        <h5 className="text-primary poppins font-medium md:text-lg text-sm">Automated Follow-Up Emails<span className="text-blue-500 zoom-animation ml-5">(Coming Soon)</span></h5>
                        <h1 className="md:text-5xl text-3xl poppins font-semibold">Seamless follow-up email automation</h1>
                        <p className="poppins font-normal text-sm">We will send automated follow-up emails to your leads after a specified number of days if you don&apos;t open or respond to your emails within a set timeframe</p>
                        <div className="space-y-1">
                            <div className="flex items-center gap-[11px]">
                                <div>
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium poppins">Consistent Engagement</p>
                            </div>
                            <div className="flex items-center gap-[11px]">
                                <div>
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium poppins">Improved Efficiency</p>
                            </div>
                            <div className="flex items-center gap-[11px]">
                                <div>
                                    <FaCheck />
                                </div>
                                <p className="md:text-lg text-sm font-medium poppins">Enhanced Conversion</p>
                            </div>
                        </div>
                    </div>
                </div> */}
                </div>

                <div className="md:mt-40 mt-20">

                    <SectionTitles
                        heading={"What Our Clients Say"}
                        subHeading={
                            "We appreciate your trust in Janitorial Appointment! Our commitment is to provide quality janitorial leads and reliable service connections to meet your business needs. Hear from clients who have successfully grown their businesses with us."
                        }
                    />
                </div>
                <Reviews />
                {/*  */}
                <div className="md:mt-40 mt-20">
                    <SectionTitles
                        heading={"Essential Tools & Added Benefits"}
                        subHeading={
                            "Streamline Your Success: Essential Tools and Added Benefits for Efficient Janitorial Appointment Management and Business Growth"
                        }
                    />
                    <Utilities />
                </div>

            </div>
            <div className="bg-[#EBFAEF] md:py-48 py-12 max-w-screen-2xl mx-auto">
                <SectionTitles heading={"Find the right plan"} subHeading={"Invest in your company's future with our comprehensive financial solution. Contact us for pricing details and see how we can help you streamline your finances and reach your business goals."} />
                <Pricing />
            </div>
            <Footer />
        </div >
    )
}