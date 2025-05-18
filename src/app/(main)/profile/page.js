import PageSection from '@/Shared/PageClient';
import ProfileForm from '@/ui/ProfileForm';
import React from 'react';
import image3 from '@/../public/assets/slide03.jpg';

const page = () => {
    return (
        <div>
            <PageSection image={image3} text={<>Manage Your Profile</>} title={<>Profile</>} />
            <div className="max-w-[1150px] mx-auto">
                <ProfileForm />
            </div>
        </div>
    );
};

export default page;