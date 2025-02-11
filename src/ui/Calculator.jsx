'use client'
import PageTitle from "@/Shared/PageTitle";
import Image from "next/image";
import image from '@/../public/assets/Frame (1).svg';
import { FaArrowRight } from "react-icons/fa";
import { usStates } from "@/js/states";
import { useForm } from "react-hook-form";

const Calculator = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Data:", data);
        if (typeof window !== "undefined" && document) {
            document.getElementById('my_modal_1').showModal()
        }
        const payRate = data.payRate;
    };



    return (
        <div className="py-20 px-10 bg-white">
            <PageTitle
                heading={'How much should I pay my cleaners? (This feature is coming soon!)'}
                subHeading={'Pick the employee type, add your average pay rate, your city, and your state to see how you measure up.'}
            />
            <div className="mt-20 flex 2xl:flex-row xl:flex-row flex-col gap-10 justify-between items-center">
                <form className="2xl:w-1/2 xl:w-1/2 w-full space-y-10" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base">Type</span>
                        </label>
                        <select
                            {...register("type", { required: "Type is required" })}
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        >
                            <option value="" disabled selected>Pick a type</option>
                            <option value="Full Time">Full Time</option>
                            <option value="Part Time">Part Time</option>
                        </select>
                        {errors.type && <p className="text-red-500 text-sm">{errors.type.message}</p>}
                    </div>

                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base">Pay rate</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Enter pay rate"
                            {...register("payRate", { required: "Pay rate is required", min: 1 })}
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                        {errors.payRate && <p className="text-red-500 text-sm">{errors.payRate.message}</p>}
                    </div>

                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base">State</span>
                        </label>
                        <select
                            {...register("state", { required: "State is required" })}
                            className="select select-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        >
                            <option value="" disabled selected>Select a state</option>
                            {usStates.map((state) => (
                                <option key={state} value={state}>
                                    {state}
                                </option>
                            ))}
                        </select>
                        {errors.state && <p className="text-red-500 text-sm">{errors.state.message}</p>}
                    </div>

                    <div className="form-control relative">
                        <label className="label absolute bg-white left-[2%] -top-[50%]">
                            <span className="label-text text-primary font-normal text-base">City</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter city name"
                            {...register("city", { required: "City is required" })}
                            className="input input-bordered rounded-[10px] bg-white border border-[#5C6272]"
                        />
                        {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                    </div>

                    <div className="form-control relative">
                        <button type="submit" className="bg-primary text-white w-3/4 btn rounded-[16px] text-lg font-semibold h-[60px]">
                            Check Pay Rate <FaArrowRight />
                        </button>
                    </div>
                </form>

                <div className="2xl:w-1/2 xl:w-1/2 w-full">
                    <Image src={image} alt="Pay Rate Checker Illustration" width={276} height={276} className="mx-auto" />
                    <p className='text-center nunito font-semibold text-4xl mt-6'>Compare Confidently</p>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">This feature is coming soon!</p>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>

    );
};

export default Calculator;
