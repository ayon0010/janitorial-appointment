import { DynamicBanner } from "./DynamicBanner";
import image1 from '@/../public/assets/it-expert-for-cleaning-companies.webp'
import image1mbl from '@/../public/assets/web-and-app-services-mobile.webp'

const Web = () => {
    return (
        <div className='mt-40 h-[600px]'>
            <DynamicBanner
                desktopImage={image1}
                mobileImage={image1mbl}
                title="For all kinds of"
                highlightedText="Digital solutions"
                description="We deliver premier IT solutions designed specifically for cleaning companies empowering your business to achieve greater efficiency and growth."
                buttonText="View More"
                buttonLink="/other-services"
                isTertiaryButton={false}
                priority={false}
            />
        </div>
    );
};

export default Web;
