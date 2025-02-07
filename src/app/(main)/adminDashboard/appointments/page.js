import SectionTitles from '@/ui/SectionTitles';
import TableHead from '@/ui/TableHead';
import { cookies } from 'next/headers';
import React from 'react';

const page = async () => {
    const cookieStore = await cookies();
    const userTokenObj = cookieStore.get('userToken');
    const token = userTokenObj?.value;
    const res = await fetch('http://localhost:5000/appointment', {
        cache: 'no-cache',
        headers: {
            authorization: `Bearer ${token}`
        }
    })
    const data = await res.json();
    if (!data) {
        return
    }
    console.log(data);

    return (
        <div className='2xl:px-[70px] xl:px-16 px-8 2xl:py-36 xl:py-28 my-36'>
            <div className=''>
                <SectionTitles heading={'Booked Appointments'} subHeading={'See the user messages'} />
            </div>
            <div className="overflow-x-auto mt-10">
                <table className="table w-full">
                    {/* head */}
                    <TableHead tableHead={['#', 'Email', 'Company Name', 'Phone Number', 'Area', 'Frequency', 'Rate', 'Variations', 'Dnc']} />
                    <tbody>
                        {/* row 1 */}
                        {
                            data?.map((d, i) => (
                                <tr key={d?._id} className="bg-base-200">
                                    <td>{i + 1}</td>
                                    <td>{d?.email}</td>
                                    <td>{d?.companyName}</td>
                                    <td>{d?.number}</td>
                                    <td>{d?.area}</td>
                                    <td>{d?.frequency}</td>
                                    <td>{d?.rate}</td>
                                    <td>{d?.variations}</td>
                                    <td>{d?.dnc}</td>
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