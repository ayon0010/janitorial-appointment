'use client'
import useAuth from '@/Hooks/useAuth';
import GetData from '@/lib/GetData';
import React from 'react';

const Page = () => {
    const { user } = useAuth();
    
    const sellerId = user?.uid;
    const { data: sellerLeads, refetch } = GetData(user?.uid, `sellerLeads/${sellerId}`);

    return (
        <div className='py-20 px-10'>
            <div>
                <div className="flex items-center gap-4 justify-center">
                    <h4 className="text-xl inter font-medium text-center">
                        Lead verification status
                    </h4>
                    <p className="text-[#6941C6] inter text-sm font-medium pt-[3px] px-[10px] bg-[#F9F5FF] rounded-[18px]">
                        {sellerLeads?.length}
                    </p>
                </div>
                <p className="text-[#667085] inter font-normal text-xs text-center mt-2">
                    Check the leads you uploaded and know your lead status
                </p>
            </div>
        </div>
    );
};

export default Page;