import Calculator from '@/ui/Calculator';
import React from 'react';
export const metadata = {
    title: "Pay Rate Calculator | Compare Cleaner Pay Rates",
    description:
        "Use our pay rate calculator to determine the best pay for your commercial cleaning and janitorial staff. Enter employee type, pay rate, city, and state for accurate insights.",
    keywords: [
        "pay rate calculator",
        "cleaning pay rates",
        "janitorial pay calculator",
        "commercial cleaning salaries",
        "compare cleaner wages",
    ],
    author: "Ayon's Cleaning Services",
}
const page = () => {

    return (
        <div>
            <Calculator />
        </div>
    );
};

export default page;