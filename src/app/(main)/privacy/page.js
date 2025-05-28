import image from "../../../../public/assets/absolutvision-bSlHKWxxXak-unsplash_result.webp";
import PageSection from "@/Shared/PageClient";

export const metadata = {
  title: "Privacy Policy | Janitorial Appointments & Leads",
  description:
    "Learn how we protect your data while providing high-quality janitorial appointments, janitorial leads, and commercial cleaning leads.",
};

export default async function PrivacyPolicy() {
  return (
    <div>
      <PageSection
        image={image}
        text={
          <>
            Read Our <span className="text-green-600">Privacy Policy</span>
          </>
        }
      />
      <div className="max-w-[1150px] mx-auto">
        <main className="bg-gray-50 text-gray-800">
          <section className="px-16 py-10">
            <h1 className="text-4xl font-bold text-green-700 mb-6">
              Privacy Policy
            </h1>
            <p className="mb-4">
              Welcome to our janitorial appointment service website. We are
              committed to protecting your privacy and safeguarding the
              information you share with us while providing high-quality
              janitorial leads and commercial cleaning leads.
            </p>

            <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="mb-4">
              When you use our services, we may collect the following types of
              information:
            </p>
            <ul className="list-disc ml-5 mb-4">
              <li>Your name, contact details, and business information</li>
              <li>Appointment scheduling preferences and service inquiries</li>
              <li>
                Payment details when purchasing janitorial leads or commercial
                cleaning leads
              </li>
              <li>
                Website usage data, including browser type and traffic
                information
              </li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc ml-5 mb-4">
              <li>
                To schedule janitorial appointments tailored to your business
                needs
              </li>
              <li>
                To provide janitorial leads and commercial cleaning leads
                efficiently
              </li>
              <li>
                To communicate with you regarding services, promotions, or
                updates
              </li>
              <li>To improve our website experience and services</li>
            </ul>

            <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
              3. Data Security
            </h2>
            <p className="mb-4">
              We prioritize protecting your data by implementing
              industry-standard security measures to prevent unauthorized
              access, data breaches, and misuse.
            </p>

            <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
              4. Sharing Information with Third Parties
            </h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information. However,
              we may share data with trusted partners to fulfill janitorial
              appointment scheduling, provide leads, or comply with legal
              obligations.
            </p>

            <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
              5. Your Privacy Choices
            </h2>
            <p className="mb-4">
              You may opt out of certain communications or request data deletion
              by contacting us directly. We respect your right to manage your
              privacy preferences.
            </p>

            <h2 className="text-2xl font-semibold text-green-600 mt-8 mb-4">
              6. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about our Privacy Policy or how we
              handle your information, please contact us at:
            </p>
            <address className="not-italic mb-4">
              <p className="text-gray-600">
                Email: contact@janitorialappointment.com
              </p>
              <p className="text-gray-600">Phone: +880172610860</p>
            </address>
            <p className="text-sm text-gray-500">
              This Privacy Policy may be updated periodically. Please review it
              regularly for changes.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
