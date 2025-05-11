'use client'; // only if this file is a Client Component

import dynamic from 'next/dynamic';

const Services = dynamic(() => import('@/Shared/Services'), {
    loading: () => <p>Loading services...</p>,
    ssr: false, // optional, disables SSR
});

export default function ServiceWrapper() {
    return <Services />;
}
