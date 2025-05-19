import image from '@/../public/assets/romain-dancre-doplSDELX7E-unsplash_result.webp'
import PageSection from '@/Shared/PageClient';


export const metadata = {
    title: 'Terms & Conditions | Janitorial Appointments & Leads',
    description: 'Review the terms and conditions for using our janitorial appointment, janitorial leads, and commercial cleaning leads services.',
};


export default async function TermsAndConditions() {
    return (
        <div>
            <PageSection image={image} title={<h2 className='2xl:text-6xl xl:text-5xl text-3xl font-semibold 2xl:banner-text xl:banner-text text-white'>
                Follow our <br /><span className='text-green-600'>Terms & Conditions</span>
            </h2>} />
            <section className="bg-white rounded-lg shadow-lg py-8 px-16">
                <h1 className="text-4xl font-bold text-green-700 mb-6">
                    Terms & Conditions
                </h1>
                <p className="mb-4">
                    These Terms and Conditions govern the use of our services, including janitorial appointments, janitorial leads, and commercial cleaning leads. By using our website and services, you agree to comply with and be bound by these terms.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
                    1. Acceptance of Terms
                </h2>
                <p className="mb-4">
                    By accessing our website or using our services, you confirm that you have read, understood, and accepted these terms and conditions.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
                    2. Services Offered
                </h2>
                <ul className="list-disc ml-5 mb-4">
                    <li>Scheduling janitorial appointments tailored to your business requirements</li>
                    <li>Providing verified janitorial leads and commercial cleaning leads</li>
                    <li>Assisting businesses in finding professional cleaning services</li>
                </ul>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
                    3. User Responsibilities
                </h2>
                <ul className="list-disc ml-5 mb-4">
                    <li>You agree to provide accurate and up-to-date information when using our services.</li>
                    <li>You must not misuse our platform or attempt to access unauthorized data.</li>
                    <li>All appointments and lead-related engagements must comply with applicable laws.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
                    4. Payment Terms
                </h2>
                <p className="mb-4">
                    Payments for janitorial appointments, janitorial leads, and commercial cleaning leads must be made in accordance with the pricing and billing terms presented at the time of purchase.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
                    5. Intellectual Property
                </h2>
                <p className="mb-4">
                    All content, trademarks, and services on this website are the intellectual property of our company. Unauthorized use or reproduction is strictly prohibited.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
                    6. Limitation of Liability
                </h2>
                <p className="mb-4">
                    We shall not be held liable for any damages resulting from the use of our janitorial appointment services, janitorial leads, or commercial cleaning leads. Your use of the services is at your sole risk.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
                    7. Termination of Services
                </h2>
                <p className="mb-4">
                    We reserve the right to terminate or suspend access to our services at our sole discretion, without prior notice, for any violation of these terms.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
                    8. Changes to Terms
                </h2>
                <p className="mb-4">
                    We may update these Terms and Conditions from time to time. Continued use of the website and services constitutes acceptance of any changes.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
                    9. Governing Law
                </h2>
                <p className="mb-4">
                    These terms shall be governed by and interpreted in accordance with the laws of USA.
                </p>

                <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
                    10. Contact Information
                </h2>
                <p className="mb-4">
                    If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <address className="not-italic mb-4">
                    <p className="text-gray-600">Email: contact@janitorialappointment.com</p>
                    <p className="text-gray-600">Phone: +8801568868704</p>
                </address>
                <p className="text-sm text-gray-500">
                    Last updated on 09/02/2025.
                </p>
            </section>
        </div>
    );
}
