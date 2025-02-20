'use client'

import useAuth from '@/Hooks/useAuth';
import useAxiosSecure from '@/Hooks/useAxiosSecure';
import GetData from '@/lib/GetData';
import Table from '@/Shared/Table';
import SectionTitles from '@/ui/SectionTitles';
import dynamic from 'next/dynamic';
import React from 'react';
import Swal from 'sweetalert2';
const Loading = dynamic(() => import('../../loading'), { ssr: false });

const Page = () => {

    // User
    const { user } = useAuth();
    // user id
    const uid = user?.uid;

    const { data: savedLeads, refetch, isLoading } = GetData(uid, `savedLeads/${uid}`);
    console.log(savedLeads);

    const axiosSecure = useAxiosSecure();

    const removeBookmarks = (id) => {
        // Show loading Swal
        Swal.fire({
            title: 'Removing Bookmark...',
            text: 'Please wait while we remove the bookmark.',
            icon: 'info',
            allowOutsideClick: false,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();  // Show loading spinner
            }
        });

        // Axios request to remove bookmark
        axiosSecure.delete(`/bookmarks/${user?.uid}/${id}`)
            .then(res => {
                // Close the loading Swal and show success Swal
                Swal.fire({
                    title: 'Success!',
                    text: 'Bookmark has been successfully removed.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                refetch();  // Refetch to get updated status from the server
            })
            .catch(err => {
                // Close the loading Swal and show error Swal
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error removing the bookmark. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });

            });
    };


    const Button = ({ id }) => {
        return (
            <button onClick={() => removeBookmarks(id)} className='rounded-lg btn btn-outline text-red-600 hover:bg-red-600 hover:text-white'>
                Delete
            </button>
        )
    }

    return (
        <div className='pt-20 pb-20 px-10'>
            <SectionTitles heading={'Bookmarked'} subHeading={'Saved leads'} />
            {
                isLoading ? <Loading /> :
                    <Table
                        tableHead={['Leads', 'Location', 'Opportunity Type', 'Date', 'Status', 'View Details', 'Action']}
                        data={savedLeads}
                        Button={Button}
                        bookMarks={true}
                    />
            }
        </div>
    );
};

export default Page;