import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import Logo from "./Logo";
import ButtonSecondary from "@/ui/ButtonSecondary";
import SubscribeEmail from "@/ui/SubscribeEmail";
import Link from "next/link";

const Footer = () => {
    const message = encodeURIComponent('Hello! I would like to inquire about your commercial cleaning leads.');
    return (
        <footer className="bg-[#EBF1EC] text-base-content 2xl:px-10 xl:px-10 px-6 py-16 justify-between max-w-[1920px] mx-auto min-h-[200px]">
            <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:justify-between 2xl:items-start xl:justify-between xl:items-start justify-start items-start 2xl:gap-0 xl:gap-0 gap-10">
                <Logo />
                <div className="flex md:flex-row flex-col items-center md:gap-7 gap-4">
                    <p className="text-base font-medium inter">Ready to get started?</p>
                    <ButtonSecondary label={'Get Started'} href={'/register'} userHref={'/register'} />
                </div>
            </div>
            <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:justify-between xl:justify-between 2xl:items-end xl:items-end justify-center">
                <aside>
                    <div className="my-20">
                        <h3 className="text-2xl inter font-bold">
                            Subscribe to our <br />
                            newsletter
                        </h3>
                        <SubscribeEmail />
                    </div>
                    <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:items-center xl:items-center items-start 2xl:gap-14 xl:gap-14 gap-6">
                        <Link href={'/term&condition'} className="font-medium text-base inter">Terms & Conditions</Link>
                        <Link href={'/privacy'} className="font-medium text-base inter">Privacy Policy</Link>
                    </div>
                </aside>
                <aside className="w-fit 2xl:mt-0 xl:mt-0 mt-10">
                    <div className="flex items-center gap-10">
                        <Link href={'https://www.facebook.com/commercialcleaningleads/'} target='_blank'>
                            <FaFacebook color="#246532" size={'1.5rem'} />
                        </Link>
                        <Link href={`https://wa.me/${+8801726108060}?text=${message}`}
                            target="_blank"
                            rel="noopener noreferrer">
                            <FaWhatsapp color="#246532" size={'1.5rem'} />
                        </Link>
                        <Link href={'https://x.com/cleaningleads12'} target='_blank'>
                            <FaTwitter color="#246532" size={'1.5rem'} />
                        </Link>
                    </div>
                </aside>
            </div>
        </footer>

    );
};

export default Footer;