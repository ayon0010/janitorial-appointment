import Image from "next/image";

const PageSection = ({ image, text, title }) => {
    return (
        <div className="relative 2xl:h-[352px] xl:h-[352px] h-[430px] z-10 pageImage">
            {/* About Image */}
            <Image
                className="w-full h-full object-cover"
                src={image}
                alt="About us - Learn more about our cleaning services and expertise"
                priority
                width={1233}
                height={240}
                sizes="(max-width: 768px) 100vw, 100vw"
            />
            <div className="absolute transform -translate-y-1/2 top-1/2 left-1/2 -translate-x-1/2 z-40">
                <h1 className="2xl:text-6xl xl:text-5xl text-3xl font-medium text-white text-center ">{text}</h1>
                <p className="text-sm text-white font-medium text-center ">{title}</p>
            </div>
        </div>
    )
}

export default PageSection;
