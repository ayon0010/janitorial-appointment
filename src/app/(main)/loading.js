// 'use client'
// import { useEffect, useRef } from 'react';
// import lottie from 'lottie-web';
// import animation from '@/../public/assets/Animation - 1722287102834.json';

// const Loading = () => {
//     const containerRef = useRef(null);

//     useEffect(() => {
//         const animationInstance = lottie.loadAnimation({
//             container: containerRef.current, // The DOM element where the animation will render
//             renderer: 'svg', // Use SVG rendering
//             loop: true, // Loop the animation
//             autoplay: true, // Start playing immediately
//             animationData: animation, // The animation data from the imported JSON file
//         });

//         // Cleanup the animation on component unmount
//         return () => animationInstance.destroy();
//     }, []); // Empty dependency array to ensure this runs only once

//     return (
//         <div className="flex items-center justify-center pt-40 pb-20 px-10">
//             <div className="flex items-center justify-center">
//                 <div ref={containerRef} className={`h-auto w-[400px]`} />
//             </div>
//         </div>

//     );
// };

// export default Loading;
