// 'use client'
// import { data } from '@/js/states';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-cards';
// // import required modules
// import { EffectCards } from 'swiper/modules';
// import dynamic from 'next/dynamic';
// const ReviewItems = dynamic(() => import('./ReviewItems'), { ssr: false });

// const Reviews = () => {
//     return (
//         <div className='my-10'>
            
//             <div className='block md:hidden'>
//                 <Swiper
//                     effect={'cards'}
//                     grabCursor={true}
//                     modules={[EffectCards]}
//                     className="mySwiper w-[80%] mx-auto"
//                     initialSlide={3}
//                 >
//                     {
//                         data.map((d, i) => {
//                             return (
//                                 <SwiperSlide key={i} className='bg-green-100'>
//                                     <ReviewItems d={d} />
//                                 </SwiperSlide>
//                             )
//                         })
//                     }
//                 </Swiper>
//             </div>
//         </div>
//     );
// };

// export default Reviews;