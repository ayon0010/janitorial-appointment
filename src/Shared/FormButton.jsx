import React from 'react';
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
const FormButton = ({ width, label }) => {
    return (
        <div className="form-control relative">
            <button type='submit' className={`bg-primary text-white btn rounded-[16px]  px-10 text-lg font-semibold h-[60px] ${width}`}>
                {label}  <FaArrowRight />
            </button>
        </div>
    );
};

export default FormButton;