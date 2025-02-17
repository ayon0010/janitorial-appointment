import SectionTitles from '@/ui/SectionTitles';
import TableHead from '@/ui/TableHead';
import { cookies } from 'next/headers';
import React from 'react';

const page = async () => {
    const cookieStore = await cookies();
    const userTokenObj = cookieStore.get('userToken');
    const token = userTokenObj?.value;
    const res = await fetch('https://https://backend.janitorialappointment.com/subscribedEmail', {
        cache: 'no-cache',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    return (
        <div className='2xl:px-[70px] xl:px-16 px-8 2xl:py-36 xl:py-28 my-28'>
            <SectionTitles heading={'Subscribed Email'} subHeading={'See the user messages'} />
            <div className="overflow-x-auto mt-10">
                <table className="table">
                    {/* head */}
                    <TableHead tableHead={['#', 'Email']} />
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((d, i) => (
                                <tr key={d?._id} className="bg-base-200">
                                    <td>{i + 1}</td>
                                    <td>{d?.email}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;