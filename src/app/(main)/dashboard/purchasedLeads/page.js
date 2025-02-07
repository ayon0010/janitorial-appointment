'use client'
import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import { data } from '@/js/states';
import SectionTitles from '@/ui/SectionTitles';
import TableHead from '@/ui/TableHead';
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../loading';

const Page = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const { isLoading, isError, error, data: purchasedLeads, refetch } = useQuery({
        queryKey: ['products'], // Include `uid` in queryKey to refetch if `uid` changes
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`myProducts/${user?.uid}`);
                const data = await response.data;
                return data;
            } catch (err) {
                console.error("Error fetching user data:", err);
                throw err; // Rethrow the error to be caught by React Query
            }
        },
    });

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='2xl:px-[70px] xl:px-16 px-8 2xl:py-36 xl:py-28 my-36'>
            <div className=''>
                <SectionTitles heading={'Your Leads'} subHeading={'See your purchased leads'} />
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <TableHead tableHead={['#', 'Lead Name', 'City', 'Status', 'Time', 'Amount', 'Report']} />
                    <tbody>
                        {/* row 1 */}
                        {
                            purchasedLeads?.map((d, i) => (
                                <tr key={i} className="bg-base-200">
                                    <td>{i + 1}</td>
                                    <td>{d?.leadName}</td>
                                    <td>{d?.city}</td>
                                    <td>{d?.status}</td>
                                    <td>{d?.time}</td>
                                    <td>${d?.amount} usd</td>
                                    <td>{''}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};


export default Page;