'use client'
import useAuth from '@/Hooks/useAuth';
import SectionTitles from "@/Shared/SectionTitles";
import TableHead from '@/ui/TableHead';
import React from 'react';
import Loading from '../../loading';
import GetData from '@/lib/GetData';

const Page = () => {
    const { user } = useAuth();
    const { data: purchasedLeads = [], isLoading } = GetData(user?.uid, `myProducts/${user?.uid}`);

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='2xl:px-[70px] xl:px-16 px-8 py-20'>
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