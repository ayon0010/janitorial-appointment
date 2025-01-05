'use client'
import dynamic from 'next/dynamic';

// Dynamically import lottie-react with ssr: false
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
import animation from '../../public/assets/Animation - 1722287102834.json'
const Dot = ({ width }) => {
    return (
        <Lottie animationData={animation} loop={true} className={`h-auto ${width}`} />
    );
};

export default Dot;