'use client'
import dynamic from 'next/dynamic';
const UserReview = dynamic(() => import('@/ui/Home/ReviewSwiper'), {
    loading: () => <p>Loading reviews...</p>,
    ssr: false, // optional, disables SSR
});

const UserReviewWrapper = () => {
    return (
        <div>
            <UserReview />
        </div>
    );
};

export default UserReviewWrapper;