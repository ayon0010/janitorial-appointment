'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

const Data = ({ Lead, data }) => {
    const router = useRouter();

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        console.log(selectedState);

        if (selectedState) {
            console.log(`${Lead}/${selectedState}`);
            router.push(`${Lead}/${selectedState}`);
        }
    };

    return (
        <div className="w-fit mx-auto 2xl:hidden xl:hidden block">
            <label htmlFor="service" className="sr-only">Choose a state</label>
            <select
                aria-label="Choose a State"
                className={`bg-[#EDEDED] px-4 py-2`}
                onChange={handleStateChange}
            >
                <option value="" className="w-full" disabled defaultValue={'Choose State'} selected>
                    Choose State
                </option>
                {data?.map((state) => (
                    <option value={state} className="w-[156px] px-4 bg-state text-white border border-white py-2" key={state}>
                        {/* <Link className="" href={`${Lead}/${state}`}>

                        </Link> */}
                        {state}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Data;