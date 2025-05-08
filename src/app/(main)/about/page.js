import Image from "next/image";
import aboutImage from '@/../public/assets/about-us-janitorial-appointments.webp'
import FaTelemarketting from "@/icons/FaTelemarketting";
import image from '@/../public/assets/verified-commercial-cleaning-leads.webp';
import image2 from '@/../public/assets/janitorial-leads-support.svg';
import FaLeads from "@/icons/FaLeads";
import FaWeb from "@/icons/FaWeb";
import FaCircleCheck from "@/icons/FaCheck";
import SectionTitles from "@/Shared/SectionTitles";
import YoutubeEmbed from '@/ui/Youtube'
import { gilroy } from "../layout";
import ParticlesComponent from "@/Animations/Particles";
import ReviewSwiper from "@/ui/Home/ReviewSwiper";
import DownAnimation from "@/Animations/DownAnimation";
import Title from "@/Shared/Titles/Title";
import Team from "@/ui/Home/Team";
import ContactInfo from "@/ui/ContactInfo";
import Stepper from "@/ui/Home/Stepper";


export const metadata = {
    title: "About Us - Janitorial Appointments & Commercial Cleaning Leads",
    description: "Learn more about our company, your trusted partner for generating high-quality janitorial appointments and commercial cleaning leads. We help businesses connect with top cleaning service providers.",
    keywords: [
        "janitorial appointments",
        "commercial cleaning leads",
        "cleaning services leads",
        "business cleaning appointments",
        "commercial cleaning solutions"
    ],
    openGraph: {
        title: "About Us - Janitorial Appointments & Commercial Cleaning Leads",
        description:
            "Discover how we generate quality janitorial appointments and commercial cleaning leads for businesses. Partner with us for your growth.",
        url: "https://www.janitorialappointment.com/about",
        type: "website",
    },
    twitter: {
        card: "",
        title: "About Us - Janitorial Appointments & Commercial Cleaning Leads",
        description:
            "Find out how we specialize in providing janitorial appointments and commercial cleaning leads. Get in touch today!",
    },
};


export const PageSection = ({ image, text, title }) => {
    return (
        <div className="relative 2xl:h-[352px] xl:h-[352px] h-[430px] z-10 pageImage">
            {/* About Image */}
            <Image
                className="w-full h-full object-cover"
                src={image}
                alt="About us - Learn more about our cleaning services and expertise"
                priority
                width={1233}
                height={240}
                sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div className="absolute transform -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 z-40">
                <h1 className="2xl:text-6xl xl:text-5xl text-3xl font-medium text-white text-center ">{text}</h1>
                <p className="text-sm text-white font-medium text-center ">{title}</p>
            </div>
        </div>
    )
}

const page = async () => {
    return (
        <div className={`${gilroy.className}`}>

            {/* About Image section */}
            <PageSection image={aboutImage} text={<>The Path to Success</>} title={<>About Us</>} />

            <div className="max-w-[1150px] mx-auto">
                <div className="2xl:py-24 xl:py-16 py-10 2xl:px-0 xl:px-0 px-10">
                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 xl:gap-10 2xl:gap-12">
                        <div className="flex flex-col h-full justify-between">
                            <div>
                                <h2 className="text-primary text-sm xl:text-sm 2xl:text-lg 2xl:font-medium xl:font-medium font-semibold">Why choose us</h2>
                                <h2 className="2xl:text-5xl xl:text-4xl text-3xl 2xl:font-medium xl:font-medium font-semibold  mt-2 ">Creative and Unique <br /> Solutions</h2>
                            </div>
                            <div className="flex 2xl:flex-row xl:flex-row flex-col items-start gap-5 py-6 border-b-2 border-[#D6D6D6] mt-6">
                                <div>
                                    <FaTelemarketting />
                                </div>
                                <div className="mt-1">
                                    <h3 className="xl:text-2xl 2xl:text-3xl text-2xl text-black font-medium ">Telemarketing</h3>
                                    <p className={`ml-[2px] text-deep-blue xl:text-base text-base 2xl:text-xl font-normal  2xl:mt-0 xl:mt-0 mt-4 ${gilroy.className}`}>Our expert team delivers tailored telemarketing solutions, ensuring high-quality leads and increased sales.</p>
                                </div>
                            </div>
                            <div className="flex 2xl:flex-row xl:flex-row flex-col items-start gap-5 py-6 border-b-2 border-[#D6D6D6]">
                                <div>
                                    <FaLeads />
                                </div>
                                <div className="mt-1">
                                    <h3 className="xl:text-2xl 2xl:text-3xl text-2xl text-black font-medium ">Lead Generation</h3>
                                    <p className={`ml-[2px] text-deep-blue xl:text-base text-base 2xl:text-xl font-normal  2xl:mt-0 xl:mt-0 mt-4 ${gilroy.className}`}>Our expert team delivers tailored telemarketing solutions, ensuring high-quality leads and increased sales.</p>
                                </div>
                            </div>
                            <div className="flex 2xl:flex-row xl:flex-row flex-col items-start gap-5 py-6 border-b-2 border-[#D6D6D6]">
                                <div>
                                    <FaWeb />
                                </div>
                                <div className="mt-1">
                                    <h3 className="xl:text-2xl 2xl:text-3xl text-2xl text-black font-medium ">Your online presence solution</h3>
                                    <p className={`ml-[2px] text-deep-blue xl:text-base text-base 2xl:text-xl font-normal  2xl:mt-0 xl:mt-0 mt-4 ${gilroy.className}`}>From web design to SEO, our full-service web solutions help your business thrive online.</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col h-full 2xl:mt-0 xl:mt-0 mt-6">
                            <YoutubeEmbed />
                            <div className="mt-6 h-full">
                                <Image
                                    src={image}
                                    className="rounded-[30px] h-full"
                                    alt="Telemarketing and business support services for enhanced lead generation and customer outreach"
                                    width={1920}
                                    height={1080}
                                    placeholder="blur"
                                    loading='lazy'
                                    sizes="(max-width: 768px) 100vw, 100vw"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="2xl:py-24 xl:py-16 py-10 2xl:px-0 xl:px-0 px-10">
                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 xl:gap-8 2xl:gap-12">
                        <h3 className="xl:text-2xl 2xl:text-3xl text-2xl text-black font-medium ">Transforming Dreams into <br />Reality</h3>
                        <p className="text-deep-blue xl:text-base 2xl:text-xl text-base 2xl:mt-0 xl:mt-0 mt-6">We are dedicated to turning your vision into a tangible success story. With a deep understanding of your goals and our expertise across various industries, we bring innovative solutions that align with your aspirations. Whether you&apos;re a small business or a growing enterprise, we are committed to delivering results that exceed your expectations.</p>
                    </div>
                    <div className="grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 xl:gap-8 2xl:gap-12 2xl:mt-12 xl:mt-10 mt-6">
                        <div className="h-full grid grid-rows-[2fr_2fr_1fr] gap-0">
                            <div className="w-full h-full">
                                <div className="flex items-start h-full">
                                    <div className="flex flex-col h-full">
                                        <FaCircleCheck />
                                        <div className="w-[46px] h-full">
                                            <div className="w-1/2 h-full border-[#3328BF] border-r-2"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="xl:text-2xl text-2xl 2xl:text-3xl text-black font-medium ">Tailored Solutions</h3>
                                        <p className="ml-[2px] mt-1 text-deep-blue xl:text-base 2xl:text-xl text-base font-normal ">We customize our approach to meet your unique needs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full">
                                <div className="flex items-start h-full">
                                    <div className="flex flex-col h-full">
                                        <FaCircleCheck />
                                        <div className="w-[46px] h-full">
                                            <div className="w-1/2 h-full border-[#3328BF] border-r-2"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="xl:text-2xl text-2xl 2xl:text-3xl text-black font-medium ">Innovative Strategies</h3>
                                        <p className="ml-[2px] mt-1 text-deep-blue xl:text-base text-base 2xl:text-xl font-normal ">We create cutting-edge solutions to drive your business forward.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full h-full">
                                <div className="flex items-start h-full">
                                    <div className="flex flex-col h-full">
                                        <FaCircleCheck />
                                        <div className="w-[50px] h-full">
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="xl:text-2xl text-2xl 2xl:text-3xl text-black font-medium ">Dedicated Support</h3>
                                        <p className=" mt-1 text-deep-blue xl:text-base 2xl:text-xl text-base font-normal ">Our team works closely with you every step of the way</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Image src={image2} className="rounded-[30px] w-full 2xl:mt-0 xl:mt-0 mt-10" loading="lazy" alt="About-Us" sizes="(max-width: 768px) 100vw, 100vw" />
                    </div>
                </div>
                <div className="2xl:py-24 xl:py-16 py-10 2xl:px-0 xl:px-0 px-10">
                    <div className="grid 2xl:grid-cols-5 xl:grid-cols-5 grid-cols-1 2xl:gap-10 xl:gap-10 gap-0">
                        <div className="2xl:col-span-2 xl:col-span-2 h-full flex flex-col justify-between">
                            <h3 className="text-[#0D0D0D] 2xl:text-left xl:text-left text-center font-semibold 2xl:mb-0 xl:mb-0 mb-6 2xl:text-5xl xl:text-4xl text-3xl">Need More <br className="2xl:block xl:block hidden" /> Help?</h3>
                            <p className="text-deep-blue 2xl:text-xl xl:text-lg text-lg font-semibold mt-auto 2xl:block xl:block hidden">Couldn’t not find what you were looking for?<br /> write to us at <a className="text-black" href="mailTo:contact@janitorialappointment.com">contact@janitorialappointment.com</a>
                            </p>
                            <p className="text-deep-blue 2xl:text-xl xl:text-lg text-lg font-semibold text-center mb-6 2xl:hidden xl:hidden block">We`re happy to answer your questions</p>
                        </div>
                        <div className="col-span-3 h-full rounded-[10px] border border-[#D6D6D6]">
                            <div className="pt-10 pb-6 border-b-[#D6D6D6] border-b-[1px]">
                                <div className="flex 2xl:gap-10 xl:gap-8 gap-4  items-start px-5">
                                    <div className="mt-6">
                                        <h3 className="2xl:text-4xl xl:text-4xl text-3xl font-semibold ">01</h3>
                                    </div>
                                    <div>
                                        <h3 className="text-[#0D0D0D] 2xl:text-xl xl:text-lg font-medium">What telemarketing services do you provide?</h3>
                                        <p className="text-deep-blue 2xl:text-lg xl:text-base mt-2">We offer a wide range of telemarketing services, including outbound calls, lead qualification, appointment setting, and sales calls tailored to your business goals.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="py-6 border-b-[#D6D6D6] border-b-[1px]">
                                <div className="flex 2xl:gap-10 xl:gap-8 gap-4 items-start px-5">
                                    <div className="mt-6">
                                        <h3 className="2xl:text-4xl xl:text-4xl text-3xl font-semibold ">02</h3>
                                    </div>
                                    <div>
                                        <h3 className="text-[#0D0D0D] 2xl:text-xl xl:text-lg font-medium">How do you generate leads for my business?</h3>
                                        <p className="text-deep-blue 2xl:text-lg xl:text-base mt-2">Our lead generation process involves identifying your target audience, running tailored campaigns across multiple channels (like email, social media, and phone calls), and delivering high-quality, ready-to-convert leads.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 pb-10 border-b-[#D6D6D6] border-b-[1px]">
                                <div className="flex 2xl:gap-10 xl:gap-8 gap-4 items-start px-5">
                                    <div className="mt-6">
                                        <h3 className="2xl:text-4xl xl:text-4xl text-3xl font-semibold ">03</h3>
                                    </div>
                                    <div>
                                        <h3 className="text-[#0D0D0D] 2xl:text-xl xl:text-lg font-medium">What type of web solutions do you offer?</h3>
                                        <p className="text-deep-blue 2xl:text-lg xl:text-base mt-2">We provide comprehensive web solutions, including website design and development, SEO optimization, e-commerce solutions, and website maintenance to ensure your online presence is top-notch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* How to start */}

            <div className="bg-[#F8F8F8] 2xl:mt-20 xl:mt-20 mt-10 2xl:py-32 xl:py-32 py-16">
                <div className="2xl:w-[1150px] xl:w-[1150px] w-[90%] mx-auto">
                    <Title
                        head={<>Four easy steps</>}
                        details={<>How To Get <br /> Started</>}
                    />
                    {/* Step Part */}
                    <Stepper />
                </div>
            </div>

            {/* Reviews */}
            <div className="relative">
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

            {/* Our Team */}
            <div className="text-center my-24 max-w-[1150px] mx-auto">
                <DownAnimation>
                    <Title
                        head={<>Our team</>}
                        details={<>Our Best Specialists <br />
                            Work For You</>}
                    />
                </DownAnimation>
                <DownAnimation delay={1}>
                    <Team />
                </DownAnimation>
            </div>
            <div className="bg-white 2xl:pb-0 xl:pb-0 pb-20">
                <SectionTitles heading={"Contact Us"} />
                <div className="max-w-[1150px] mx-auto">
                    <ContactInfo />
                </div>
            </div>
        </div>
    );
};

export default page;