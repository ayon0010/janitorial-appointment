'use client'
import React from 'react';
import FaProfile from '@/icons/FaProfile';
import FaExit from '@/icons/FaExit';
import useAuth from '@/Hooks/useAuth';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const ProfileCard = ({ sellerDashboard, userDashboard, adminDashboard }) => {
    const { user, logOut } = useAuth();
    const router = useRouter();
    const firstLetter = user?.displayName[0];

    const handleLogOut = async () => {
        await logOut();
        router.push('/');
    }

    return (
        <div className='2xl:mt-[50px] xl:mt-[50px] box-shadow rounded-3xl border border-[#246532] h-fit pb-10'>
            <div className='2xl:pt-[50px] xl:pt-[50px] pt-7'>
                <div className="2xl:w-[60px] 2xl:h-[60px] xl:w-[50px] xl:h-[50px] relative w-[30px] h-[30px] rounded-full bg-primary  mx-auto text-white">
                    <span className="absolute top-1/2 right-1/2 transform -translate-y-1/2 translate-x-1/2 md:text-base text-xs font-normal">{firstLetter}</span>
                </div>
            </div>
            <div className='2xl:mt-6 xl:mt-6 mt-3'>
                <h3 className='text-[#344054] text-center 2xl:text-3xl xl:text-3xl text-xl font-medium'>{user?.displayName}</h3>
                <p className='text-[#667085] text-center font-normal'>{user?.email}</p>
                <div className='2xl:px-14 xl:px-12 px-5 my-7'>
                    {
                        userDashboard &&
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-xl flex items-start gap-3'>
                            <div>
                                <h3 className='font-bold text-xs'>Premium Membership</h3>
                                <p className=' text-xs mt-1'>Upgrade for more features</p>
                            </div>
                        </div>
                    }
                    {
                        sellerDashboard &&
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-xl flex items-start gap-3'>
                            <div>
                                <h3 className='font-bold text-xs'>Seller Dashboard</h3>
                                <p className=' text-xs mt-1'>Upload your lead from this account</p>
                            </div>
                        </div>
                    }
                    {
                        adminDashboard &&
                        <div className='bg-[#C7F2AB] px-6 py-5 rounded-xl flex items-start gap-3'>
                            <div className='w-full'>
                                <h3 className='font-bold text-xs text-center'>Admin Dashboard</h3>
                                <p className=' text-xs mt-1 text-center'>Welcome back Admin</p>
                            </div>
                        </div>
                    }
                </div>
                <div className='2xl:px-6 xl:px-6 px-3 space-y-6'>
                    <h2 className='text-lg font-bold text-black'>Account</h2>
                    <div>
                        <Link className='flex items-center gap-2' href={'/profile/'}>
                            <FaProfile />
                            <h2 className='text-base'>Profile</h2>
                        </Link>
                    </div>

                    <div onClick={() => handleLogOut()} className='flex items-center gap-2 cursor-pointer'>
                        <FaExit />
                        <h2 className='text-base'>Logout</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ProfileCard;