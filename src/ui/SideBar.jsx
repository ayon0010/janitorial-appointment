// 'use client'
// import React, { useEffect, useState } from 'react';
// import { IoMdCloseCircleOutline } from "@react-icons/all-files/io/IoMdCloseCircleOutline";
// import menu from '../../public/assets/burger-menu-svgrepo-com.svg'
// import logo from '@/../public/assets/Janitorial.png';
// import Image from 'next/image';
// import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
// import { FaLinkedinIn } from "@react-icons/all-files/fa/FaLinkedinIn";
// import { FaTwitterSquare } from "@react-icons/all-files/fa/FaTwitterSquare";
// import { FaWhatsappSquare } from "@react-icons/all-files/fa/FaWhatsappSquare";


// const SideBar = () => {
//     const [open, setOpen] = useState(false);
//     useEffect(() => {
//         if (typeof window !== 'undefined' && document) {
//             if (open) {
//                 document.body.style.overflow = 'hidden';
//             } else {
//                 document.body.style.overflow = '';
//             }

//             // Cleanup on unmount
//             return () => {
//                 document.body.style.overflow = '';
//             };
//         }
//         // Disable scrolling on the body when the menu is open

//     }, [open]);
//     return (
//         <div>
//             <div className='btn' onClick={() => setOpen(!open)}>
//                 <Image src={menu} className='w-[40px] h-[40px]' width={40} height={40} alt='menu' />
//             </div>
//             <div
//                 className={`h-screen flex items-stretch fixed top-0 overflow-auto z-[60] w-full 
//                   ${open ? 'left-0' : '-left-full'} 
//                   transition-all duration-500 ease-in-out`}
//             >
//                 <div className="w-[35%] h-full bg-[#FFFFFF] relative overflow-y-auto pb-10">
//                     <div
//                         className="w-fit h-fit absolute top-6 right-6 btn"
//                         onClick={() => setOpen(!open)}
//                     >
//                         <IoMdCloseCircleOutline size={'1.5rem'} />
//                     </div>
//                     <div className="mt-20 w-fit mx-auto flex items-center gap-3">
//                         <Image
//                             className="2xl:w-[140px] xl:w-[140px] w-[70px] 2xl:h-[110px] xl:h-[110px] h-auto object-contain"
//                             width={140}
//                             src={logo}
//                             alt="Janitorial Appointment logo"
//                         />
//                         <div>
//                             <h3 className="text-base text-orange">100% verified Janitorial Leads</h3>
//                             <h1 className="text-deep-blue text-xl font-semibold">
//                                 Business Consultancy
//                             </h1>
//                         </div>
//                     </div>
//                     <div className="mt-10 px-6">
//                         <h1 className="text-center text-xl text-deep-blue font-semibold">About Us</h1>
//                         <p className="text-base mt-6 text-center">
//                             <span className="text-deep-blue font-semibold text-base">Janitorial Appointment</span>{' '}
//                             we specialize in delivering high-quality janitorial leads to help businesses grow. With a
//                             commitment to reliability, accuracy, and exceptional service, we connect you with the right
//                             opportunities to succeed. Your success is our priority.
//                         </p>
//                         <h2 className="text-2xl font-semibold text-center mt-8">Contact Us</h2>
//                         <p className="mt-3 text-center">contact@janitorialappointment.com</p>
//                         <p className="mt-3 text-center">+8801726108060</p>
//                         <div className="flex items-center justify-center gap-6 mt-6">
//                             <FaFacebookSquare size={'1.5rem'} />
//                             <FaLinkedinIn size={'1.5rem'} />
//                             <FaWhatsappSquare size={'1.5rem'} />
//                             <FaTwitterSquare size={'1.5rem'} />
//                         </div>
//                     </div>
//                 </div>
//                 <div
//                     className="flex-1 h-full bg-black opacity-30"
//                     onClick={() => setOpen(!open)}
//                 ></div>
//             </div>
//         </div>

//     );
// };

// export default SideBar;