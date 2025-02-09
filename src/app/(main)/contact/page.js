/* eslint-disable @next/next/no-img-element */
import React from 'react';
import contact from '@/../public/assets/Frame (6).svg'
import Image from 'next/image';
import FaTick from '@/icons/FaTick';
import image from '../../../../public/assets/image 36_result_result.webp'
import FaAddress from '@/icons/FaAddress';
import FaPhone from '@/icons/FaPhone';
import FaEmail from '@/icons/FaEmail';
import ContactForm from '@/ui/ContactForm';
import SectionTitles from '@/ui/SectionTitles';
import fb from '@/../public/assets/Frame (8).svg'
import linked from '@/../public/assets/Frame (11).svg'
import twitt from '@/../public/assets/Frame (12).svg'
import Map from '@/ui/Map';
import Link from 'next/link';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
const message = encodeURIComponent('Hello! I would like to inquire about your commercial cleaning leads.');

export const metadata = {
    title: 'Contact Us | Janitorial Leads & Commercial Cleaning Services',
    description:
        'Get in touch with us to book janitorial appointments, access high-quality commercial cleaning leads, or inquire about our cleaning services. We are here to help your business grow.',
    keywords: [
        'contact janitorial services',
        'janitorial leads',
        'commercial cleaning leads',
        'contact cleaning services',
        'book janitorial appointments',
        'commercial cleaning inquiries',
    ],
    openGraph: {
        title: 'Contact Us | Janitorial Leads & Commercial Cleaning Services',
        description:
            'Get in touch with us to book janitorial appointments, access commercial cleaning leads, or inquire about our services. We are here to help!',
        url: 'https://www.janitorialappointment.com/contact',
        type: 'website',
        images: [
            {
                url: 'https://www.janitorialappointment.com/path-to-image.jpg',
                alt: 'Contact Us Image',
            },
        ],
    },
    twitter: {
        title: 'Contact Us | Janitorial Leads & Commercial Cleaning Services',
        description:
            'Contact us for janitorial leads and commercial cleaning services. We help grow your business with top-quality leads and appointments.',
        card: 'summary_large_image',
        images: ['https://www.janitorialappointment.com/path-to-image.jpg'],
    },
};


const page = () => {
    return (
        <div>
            <div className='2xl:px-40 xl:px-28 2xl:pt-52 xl:pt-40 pt-28 px-6 bg-white'>
                <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-8 max-h-[680px]'>
                    <div className='h-full'>
                        <h1 className='2xl:text-5xl xl:text-4xl text-2xl font-medium inter text-[#0D0D0D]'>Get in Touch</h1>
                        <ContactForm />
                    </div>
                    <div className='h-full 2xl:block xl:block hidden'>
                        <Image
                            src={contact}
                            loading='lazy'
                            className="w-full max-h-[680px] object-contain"
                            alt="Contact us for professional cleaning, telemarketing, and business support services"
                        />
                    </div>
                </div>
                <div className='2xl:py-40 xl:py-28 py-16'>
                    <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 2xl:pb-8 xl:pb-6 pb-4 border-b-[#D6D6D6] border-b-[1px]'>
                        <h1 className='2xl:text-5xl xl:text-4xl text-2xl font-medium inter text-[#0D0D0D]'>Taking Your Goals to <br /> New Heights</h1>
                        <p className="text-[#808080] xl:text-base 2xl:text-xl text-sm 2xl:mt-0 xl:mt-0 mt-4">Our mission is to elevate your goals with innovative strategies, cutting-edge solutions, and a relentless commitment to excellence. Whether you&apos;re expanding your brand or scaling operations, we&apos;re here to take you to new heights of success.</p>
                    </div>
                    <div className='2xl:mt-11 xl:mt-9 mt-5 grid 2xl:grid-cols-3 xl:grid-cols-3 grid-cols-1 gap-6'>
                        <div className='flex flex-col justify-between'>
                            <div className='2xl:space-y-4 xl:space-y-3 space-y-2 2xl:p-6 xl:p-6 p-4 bg-[#F9F9FB]'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl text-lg font-medium'>Strategic Growth</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base text-sm'>Comprehensive plans tailored to your goals, ensuring sustainable growth</p>
                            </div>
                            <div className='2xl:space-y-4 xl:space-y-3 space-y-2 2xl:p-6 xl:p-6 p-4 bg-[#F9F9FB] 2xl:mt-0 xl:mt-0 mt-6'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl text-lg font-medium'>Innovative Solutions</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base text-sm'>Our forward-thinking approach empowers your business</p>
                            </div>
                        </div>
                        <div className='w-full'>
                            <Image src={image} className='w-full max-h-[420px]' alt='' />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <div className='2xl:space-y-4 xl:space-y-3 space-y-2 2xl:p-6 xl:p-6 p-4 bg-[#F9F9FB]'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl text-lg font-medium'>Expert Guidance</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base text-sm'>With a team of seasoned professionals, we provide insights and expertise</p>
                            </div>
                            <div className='2xl:space-y-4 xl:space-y-3 space-y-2 2xl:p-6 xl:p-6 p-4 bg-[#F9F9FB] 2xl:mt-0 xl:mt-0 mt-6'>
                                <FaTick />
                                <h3 className='text-[#0D0D0D] 2xl:text-2xl xl:text-xl text-lg font-medium'>Results-Driven Focus</h3>
                                <p className='text-[#808080] 2xl:text-base xl:text-base text-sm'>We are committed to measurable outcomes, delivering results</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='2xl:pb-40 xl:pb-28 pb-16'>
                    <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-8'>
                        <div>
                            <h1 className='2xl:text-5xl xl:text-4xl text-2xl font-medium inter text-[#0D0D0D]'>Contact Us</h1>
                            <div className='2xl:mt-10 xl:mt-8 mt-6 space-y-6 border-b-[1px] border-b-[#D6D6D6] pb-8'>
                                <div className='flex items-start gap-4'>
                                    <FaAddress />
                                    <div>
                                        <h1 className='text-xl font-medium text-[#0D0D0D]'>Address</h1>
                                        <p className='text-[#808080] text-base'>403, Port Washington Road, Canada.</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-4'>
                                    <div className='rounded-full border border-green-700 p-[14px]'>
                                        <FaPhoneAlt color='#15803d' />
                                    </div>
                                    <div>
                                        <h1 className='text-xl font-medium text-[#0D0D0D]'>Contact  Details</h1>
                                        <p className='text-[#808080] text-base'> +1 800-525-54-589</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-4'>
                                    <FaEmail />
                                    <div>
                                        <h1 className='text-xl font-medium text-[#0D0D0D]'>Email Us</h1>
                                        <p className='text-[#808080] text-base'>contact@janitorialappointment.com</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className='2xl:pb-40 xl:pb-28 pb-16'>
                    <SectionTitles heading={'Find Us on Social Media'} subHeading={"If you want to contact us in person or simply want to know more about us, here's some helpful information about us"} />
                    <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-2 2xl:gap-8 xl:gap-8 gap-6 w-3/4 mx-auto mt-10'>
                        <Link href="https://www.facebook.com/commercialcleaningleads/" target="_blank">
                            <Image className='cursor-pointer' src={fb} alt="Facebook" />
                        </Link>
                        <Link href="https://www.linkedin.com/company/janitorial-appointments-commercial-cleaning-leads/about/?viewAsMember=true" target="_blank">
                            <Image className='cursor-pointer' src={linked} alt="LinkedIn" />
                        </Link>
                        <Link href="https://x.com/cleaningleads12" target="_blank">
                            <Image className='cursor-pointer' src={twitt} alt="Twitter" />
                        </Link>
                        <Link href={`https://wa.me/${+8801726108060}?text=${message}`}
                            target="_blank"
                            rel="noopener noreferrer" className='border w-full border-[#DDDDDD] rounded-md flex flex-col' target="_blank">
                            <FaWhatsapp size={'4rem'} color='#006600' className='w-fit m-auto' />
                        </Link>
                    </div>
                </div>
                <div className='2xl:pb-40 xl:pb-28 pb-16'>
                    <p className='text-center text-primary mb-2 font-medium text-sm'>Location</p>
                    <SectionTitles heading={'Discover Our Location'} subHeading={"Whether you're visiting us in person or simply want to know where we're based, here's some helpful information about our location"} />
                    <div className='2xl:mt-12 xl:mt-10 mt-8 grid 2xl:grid-cols-2 xl:grid-cols-2 2xl:grid-rows-2 xl:grid-rows-2 grid-rows-4 grid-cols-1 gap-8'>
                        <div className='flex items-start gap-4 2xl:p-12 xl:p-10 p-8 bg-[#F9F9FB] rounded-[30px]'>
                            <FaEmail />
                            <div className='space-y-[16px]'>
                                <h1 className='text-xl font-medium text-[#0D0D0D]'>Send Us an Email</h1>
                                <p className='text-[#808080] text-base'>We&apos;d love to hear from you! Please feel free to reach out to us via mail.</p>
                                <div>
                                    <a href="mailto:contact@janitorialappointment.com">
                                        <button className='btn bg-primary text-white rounded-lg'>
                                            contact@janitorialappointment.com
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-start gap-4 2xl:p-12 xl:p-10 p-8 bg-[#F9F9FB] rounded-[30px]'>
                            <FaPhone />
                            <div className='space-y-[16px]'>
                                <h1 className='text-xl font-medium text-[#0D0D0D]'>Give Us a Call</h1>
                                <p className='text-[#808080] text-base'>We&apos;re here to help! Don&apos;t hesitate to reach out to us by phone.</p>
                                <div>
                                    <a href="tel:+180052554589">
                                        <button className='btn bg-primary text-white rounded-lg'>
                                            +8801726108060
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-start gap-4 2xl:p-12 xl:p-10 p-8 bg-[#F9F9FB] rounded-[30px]'>
                            <FaAddress />
                            <div className='space-y-[16px]'>
                                <h1 className='text-xl font-medium text-[#0D0D0D]'>Address</h1>
                                <p className='text-[#808080] text-base'>This text provides essential information about the address.</p>
                                <button className='btn bg-primary text-white rounded-lg'>Washington Road, Canada.</button>
                            </div>
                        </div>
                        <div className='h-full'>
                            <Map />
                        </div>
                    </div>
                </div>
                <div className='2xl:pb-40 xl:pb-28 pb-16'>
                    <SectionTitles heading={'Frequently asked questions.'} subHeading={'Lorem ipsum dolor sit amet consectetur. Orci malesuada mi et mi pellentesque tincidunt at mollis facilisis. Nisl eu blandit nunc parturient adipiscing commodo.'} />
                    <div className='2xl:w-3/4 xl:w-3/4 w-full mx-auto mt-10 space-y-8'>
                        <div className="collapse collapse-plus bg-white border border-[#D6D6D6]">
                            <input type="checkbox" id='1' name="my-accordion-1" defaultChecked />
                            <div className="collapse-title text-xl font-bold">How do I get janitorial or commercial cleaning leads from you?.</div>
                            <div className="collapse-content text-sm">
                                <p>You can purchase leads from us by reaching out through our website, phone, or email. We’ll provide you with qualified, pre-screened leads that match your service offerings, including the type of cleaning required, the size of the property, and the frequency of service.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white border border-[#D6D6D6]">
                            <input type="checkbox" id='2' name="my-accordion-2" />
                            <div className="collapse-title text-xl font-medium">Are the janitorial leads exclusive?</div>
                            <div className="collapse-content">
                                <p>Yes, we offer exclusive leads for our clients, meaning you won’t be competing with others for the same lead. This gives you a higher chance of converting the lead into a paying client.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white border border-[#D6D6D6]">
                            <input type="checkbox" id='3' name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">How do you qualify the leads you provide?</div>
                            <div className="collapse-content">
                                <p>We qualify leads through a thorough process that includes direct communication with potential clients. We gather information about the property, type of cleaning services needed, and the budget. Only leads that meet these criteria are passed along to you, ensuring you receive high-quality prospects.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white border border-[#D6D6D6]">
                            <input type="checkbox" id='3' name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">Can I get leads for specific types of cleaning services?</div>
                            <div className="collapse-content">
                                <p>Yes, we can provide leads based on your specific area of expertise, whether it's general janitorial services, deep cleaning, post-construction cleaning, or specialized commercial cleaning like carpet cleaning or sanitation.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus bg-white border border-[#D6D6D6]">
                            <input type="checkbox" id='3' name="my-accordion-3" />
                            <div className="collapse-title text-xl font-medium">How are the leads delivered?</div>
                            <div className="collapse-content">
                                <p>Once you purchase the leads, we deliver them through email or a secure online portal. Each lead will include detailed information such as the property type, service needs, contact details, and the best time to reach the client.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;