'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

const ButtonTertiary = ({ label, width }) => {
    const [hover, setHover] = useState(false)
    return (
        <div className={`${width ? 'w-full rounded-lg' : 'w-fit rounded-[40px]'} h-fit overflow-clip py-4 btn border-none relative btn-hover bg-primary`} onMouseEnter={(e) => setHover(true)} onMouseLeave={(e) => setHover(false)}>
            <motion.div
                initial='initial'
                whileHover='hovered'
                className={`relative block overflow-hidden whitespace-nowrap text-white  2xl:text-base xl:text-base text-sm 2xl:px-6 xl:px-4 px-2 font-semibold  2xl:rounded-[35px] xl:rounded-[35px] rounded-3xl`}
            >
                <motion.div
                    animate={hover ? { y: '-100%' } : { y: '0' }}
                    className="z-30 flex items-center gap-2"
                >
                    {label}
                    <FaArrowRight />
                </motion.div>
                <motion.div
                    animate={hover ? { y: 0 } : { y: '100%' }}
                    className='absolute z-30 inset-0 flex items-center justify-center gap-2'
                >
                    {label}
                    <FaArrowRight />
                </motion.div>
            </motion.div>
        </div>

    );
};

export default ButtonTertiary;
