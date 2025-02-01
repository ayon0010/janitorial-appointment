// 'use client'
// import dynamic from 'next/dynamic';

// const Dot = dynamic(() => import('@/ui/Dot'), { ssr: false });

const Loading = () => {
    if (typeof window === 'undefined') return null; // Ensures only renders client-side

    return (
        <div className="flex items-center justify-center pt-40 pb-20 px-10">
            <div className="flex items-center justify-center">
                {/* <Dot width={'w-[400px]'} /> */}
            </div>
        </div>
    );
};

export default Loading;
