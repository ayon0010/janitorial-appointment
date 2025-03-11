import Link from 'next/link';
import ButtonPrimary from './ButtonPrimary';
import ButtonTertiary from './ButtonTertiary';
import Image, { getImageProps } from 'next/image';
export const DynamicBanner = ({
    desktopImage,
    mobileImage,
    title,
    highlightedText,
    description,
    buttonText,
    buttonLink,
    note,
    isTertiaryButton,
    cover,
    priority
}) => {

    const common = { alt: "Janitorial Appointment", sizes: "100vw" };
    const {
        props: { srcSet: desktop },
    } = getImageProps({
        ...common,
        width: 1920,
        height: 600,
        src: desktopImage,
    });

    const {
        props: { srcSet: mobile, ...rest },
    } = getImageProps({
        ...common,
        width: 430,
        height: 600,
        src: mobileImage,
    });



    return (
        <div className="flex flex-col relative min-h-[600px] max-h-[800px] h-auto w-full">
            {/* Background Images */}
            <picture className="absolute inset-0 z-20 h-full">
                <source media="(min-width: 787px)" srcSet={desktop} />
                <source media="(max-width: 786px)" srcSet={mobile} />
                <img {...rest} className='object-cover' loading='eager' style={{ width: '100%', maxHeight: '800px', minHeight: '600px' }} />
            </picture>

            {/* Overlays */}
            <div className="absolute inset-0 bg-black opacity-40 z-30"></div>

            {/* Content Section */}
            <div className="my-auto 2xl:pl-40 xl:pl-40 2xl:w-1/2 xl:w-1/2 w-full pl-10 2xl:pr-0 xl:pr-0 pr-10 z-40">
                <h1 className="text-white font-bold 2xl:text-6xl xl:text-5xl text-3xl">
                    {title} <span className="text-green-600 banner-text">{highlightedText}</span>
                </h1>
                <p className="my-6 2xl:text-xl xl:text-xl text-sm font-semibold text-white opacity-80">
                    {description}
                </p>
                <div className="flex items-center gap-6">
                    <Link href={`${buttonLink ? buttonLink : ''}`}>
                        {isTertiaryButton ? (
                            <ButtonTertiary label={buttonText} />
                        ) : (
                            <ButtonPrimary label={buttonText} />
                        )}
                    </Link>
                    {note && (
                        <p className="text-white opacity-8 font-bold 2xl:text-base xl:text-base text-xs">
                            {note}
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};
