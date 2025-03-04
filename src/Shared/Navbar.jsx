'use client'
import React, { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import Cookies from 'js-cookie';
import Facebook from '@/icons/Facebook';
import FaLinkedIn from '@/icons/FaLinkedIn';
import FaTwitter from '@/icons/FaTwitter';
import FaWhatsapp from '@/icons/FaWhatsapp';
import FaPhone from '@/icons/FaPhone';
import FaEmail from '@/icons/FaEmail';
import dynamic from 'next/dynamic'
const NavItems = dynamic(() => import('./NavItems'), { ssr: false });
const NavUser = dynamic(() => import('./NavUser'), { ssr: false });
const NavMobile = dynamic(() => import('./NavMobile'), { ssr: false });
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/Janitorial.png';


const Navbar = () => {
    // User Token
    const token = Cookies.get('userToken');
    const [isSeller, setSeller] = useState(false);
    const [isAdmin, setAdmin] = useState(false);

    // Nav Links
    const Services = [
        { name: 'Decision Maker', href: '/decision-maker' },
        { name: 'Single Decision Maker', href: '/single-decision-maker' },
        { name: 'Cleaning Calculator', href: '/cleaning-calculator' },
        { name: 'Web & App Support', href: '/other-services' },
    ]

    const Leads = [
        { name: 'Exclusive Leads', href: '/search/exclusive-leads' },
        { name: 'Opportunities', href: '/search/opportunities' },
        { name: 'Lay Ups', href: '/search/layUps' },
    ];

    let UserDetails = [
        { name: 'Profile', href: '/profile' },
        { name: 'Dashboard', href: '/dashboard' },
        isSeller && { href: '/sellerDashboard', name: 'Seller dashboard' },
        isAdmin && { href: '/adminDashboard', name: 'Admin dashboard' },
    ].filter(Boolean); // Remove falsy values


    // Token
    useEffect(() => {
        if (token) {
            const decoded = jwtDecode(token);
            const isSeller = decoded?.isSeller;
            const isAdmin = decoded?.isAdmin;

            if (isSeller) {
                setSeller(true);
            }
            if (isAdmin) {
                setAdmin(true);
            }
        }
    }, [token]);


    // Nav Position
    const [topPosition, setTopPosition] = useState(false);
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                const scrollPosition = window.scrollY;
                if (scrollPosition > 90) {
                    setTopPosition(true);
                }
                else {
                    setTopPosition(false)
                }
            }
            window.addEventListener('scroll', handleScroll);

            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }

    }, [])


    // Nav Top Part
    const NavComponent = () => {
        return (
            <div className='w-full 2xl:h-[60px] xl:h-[60px] h-0 hidden 2xl:flex xl:flex items-center justify-between bg-sky-200'>
                <div className='flex gap-4 items-center px-11 py-[12px]'>
                    <h3 className='text-base'>Connect with us</h3>
                    <div className='nav-start flex gap-1'>
                        <Facebook />
                        <FaLinkedIn />
                        <FaTwitter />
                        <FaWhatsapp />
                    </div>
                </div>
                <div className='nav-end flex items-center gap-12 pe-6'>
                    <div className='flex items-center gap-2'>
                        <FaEmail />
                        <p className='font-normal text-sm hover:text-deep-blue transition-colors duration-500 cursor-pointer'>
                            <a href="mailto:contact@janitorialappointment.com">contact@janitorialappointment.com</a>
                        </p>
                    </div>
                    {/* <div className='bg-deep-blue flex items-center gap-1 px-12 py-[18px]'>
                        <FaPhone />
                        <div className="phone-number">
                            <a href="tel:+8801726108060">
                                <span className="letter text-base font-semibold text-white animate__backOutDown">+8801726108060</span>
                            </a>
                        </div>
                    </div> */}
                </div>
            </div>
        )
    }

    return (
        <div className={`w-full relative z-[100]`}>
            {/* Nav Top Part */}
            <NavComponent />
            {/* NavBar */}
            <div className={`${!topPosition ? 'absolute 2xl:top-[60px] xl:top-[60px] top-0' : 'fixed 2xl:top-0 xl:top-0 top-0'} left-0 right-0`}>
                <div className='bg-[#FBFCFF] shadow-xl'>
                    <div className='items-center justify-between max-w-[1440px] mx-auto relative 2xl:h-[100px] xl:h-[100px] 2xl:flex xl:flex hidden 2xl:py-10 xl:py-10 2xl:px-11 xl:px-11'>
                        {/* Logo */}
                        <Link className='2xl:w-[140px] xl:w-[140px] w-[110px] 2xl:h-[110px] xl:h-[110px] h-[90px]' href={'/'}>
                            <div className='absolute top-0 2xl:left-11 xl:left-11 left-5'>
                                <div className='nav-start bg-white shadow-xl'>
                                    <Image
                                        className='object-contain h-[110px]'
                                        width={140}
                                        height={90}
                                        sizes="(min-width: 1536px) 140px, (min-width: 1280px) 110px"
                                        src={logo}
                                        alt='janitorial-appointments-logo'
                                        priority
                                    />
                                </div>
                            </div>
                        </Link>
                        {/* Nav Items */}
                        <div className="">
                            <ul className="flex navItems items-center justify-between 2xl:gap-10 xl:gap-6">
                                <NavItems Services={Services} Leads={Leads} />
                            </ul>
                        </div>
                        {/* User Items */}
                        <div className=''><NavUser UserDetails={UserDetails} /></div>
                    </div>
                    {/* Nav Mobile */}
                    <div className='2xl:hidden xl:hidden h-[80px] flex items-center justify-between px-6'>
                        <Link className='h-[90px]' href={'/'}>
                            <div className='absolute top-0 2xl:left-11 xl:left-11 left-5'>
                                <div className='nav-start bg-white shadow-xl'>
                                    <Image className='h-[90px] object-contain' width={140} height={90} src={logo} alt='janitorial-appointment-logo' />
                                </div>
                            </div>
                        </Link>
                        <NavMobile UserDetails={UserDetails} Services={Services} Leads={Leads} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;