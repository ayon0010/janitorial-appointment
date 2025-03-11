import Link from 'next/link';
import ButtonPrimary from './ButtonPrimary';
import ButtonTertiary from './ButtonTertiary';
import Image from 'next/image';
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
    return (
        <div className="flex flex-col relative min-h-[600px] max-h-[800px] h-auto w-full">
            {/* Background Images */}
            <div className="absolute inset-0 z-20 h-full">
                {
                    desktopImage && (
                        <Image
                            src={desktopImage}
                            fill
                            priority={priority}
                            className='object-cover h-full w-full 2xl:block xl:block hidden'
                            alt='Janitorial Appointments'
                            sizes='(min-width:787px) 100vw'
                        />
                    )
                }
                {
                    mobileImage && (
                        <Image
                            src={mobileImage}
                            width={430}
                            height={600}
                            priority={priority}
                            sizes='(max-width: 768px) 350px'
                            className='object-cover h-full w-full 2xl:hidden xl:hidden block'
                            alt='Janitorial Appointment'
                            quality={80}
                        />
                    )
                }
            </div>

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
