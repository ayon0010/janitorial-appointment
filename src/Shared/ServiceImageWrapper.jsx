// components/ServiceImageWrapper.js
'use client';
import dynamic from 'next/dynamic';

const ServiceImage = dynamic(() => import('@/Shared/ServiceImage'), {
    ssr: false, // ensures it's only loaded on the client
    loading: () => <p>Loading service image...</p>, // fallback during load
});

export default function ServiceImageWrapper() {
    return <ServiceImage />;
}
