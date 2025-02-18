import Modal from '@/ui/Modal';
import React from 'react';

const page = async ({ params }) => {
    const { id } = await params;
    return (
        <div>
            <Modal id={id} />
        </div>
    );
};

export default page;