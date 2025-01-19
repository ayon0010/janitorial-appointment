import { nunito } from "@/Shared/nunito";
import Link from "next/link";

const Web = () => {
    return (
        <div className='mt-40'>
            <div className='web flex flex-col'>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="w-fit h-fit my-auto z-40 2xl:ml-20 xl:ml-20 ml-16 space-y-8">
                    <h1 className={`${nunito.className} text-white font-semibold 2xl:text-5xl xl:text-5xl text-3xl banner-text`}>For all kinds of <br />Digital solutions</h1>
                    <p className="text-white">
                        We deliver premier IT solutions designed <br /> specifically for cleaning companies,<br /> empowering your business to achieve greater <br /> efficiency and growth.
                    </p>
                    <Link href={'/other-services'}>
                        <button className="btn btn-outline text-white rounded-none hover:bg-white hover:text-black font-normal">
                            View More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Web;