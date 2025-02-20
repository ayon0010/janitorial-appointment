import React from 'react';

const InputField = ({ label, type, placeholder, register, name, errors, disabled, noRequired }) => {
    return (
        <>
            <div>
                <div className="form-control relative">
                    <label className="label absolute bg-white left-[2%] -top-[50%]">
                        <span className="label-text text-primary font-normal text-base ">{label}</span>
                    </label>
                    <input
                        type={type}
                        min={type === "number" ? 1 : undefined}
                        placeholder={placeholder}
                        disabled={disabled}
                        {...register(name, {
                            required: !noRequired ? `${label} is required` : false
                        })}
                        className={`input input-bordered rounded-[10px] bg-white border py-2 ${errors[name] ? 'border-red-500' : 'border-[#5C6272]'}`}
                    />
                </div>
                {errors[name] && <p className="text-red-500 text-sm mt-2">{errors[name]?.message}</p>}
            </div>
        </>
    );
};

export default InputField;
