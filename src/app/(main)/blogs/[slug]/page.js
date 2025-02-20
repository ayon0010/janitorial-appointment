import { FaRegCalendar } from "react-icons/fa";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";
import formatTimestamp from "@/js/convertTime";
import { PortableText } from "next-sanity";
import { blogData } from "../page";

export const revalidate = 1;
export async function generateStaticParams() {
    const data = await blogData();
    return data.map((blog) => ({
        slug: blog.currentSlug,
    }));
}

const getData = async (params) => {
    const query = `
      *[_type == 'blog' && slug.current == '${params}']{
        'currentSlug':slug.current,
        title,
        content,
        titleImage,
        authorName,
        authorImage,
        images,
        date
      }[0]
    `;

    try {
        const data = await client.fetch(query, { cache: 'no-cache' });
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export async function generateMetadata({ params }) {
    const data = await getData(params.slug) || {};
    return {
        title: data?.title,
        description:
            "Stay updated with the latest insights on janitorial appointments and commercial cleaning leads. Learn tips and strategies to grow your business.",
        keywords: [
            "janitorial appointments",
            "commercial cleaning leads",
            "cleaning business tips",
            "lead generation for cleaning services",
            "janitorial marketing strategies",
        ],
        openGraph: {
            title: "Blogs - Janitorial Appointments & Commercial Cleaning Leads",
            description:
                "Explore industry news and expert tips on generating janitorial appointments and commercial cleaning leads to grow your business.",
            url: "https://www.janitorialappointment.com/blogs/" + params.slug,
            type: "website",
            images:
                [
                    {
                        url: urlFor(data?.titleImage).url(),
                        width: 800,
                        height: 600,
                    }
                ]
        },
        twitter: {
            card: "",
            title: "Blogs - Janitorial Appointments & Commercial Cleaning Leads",
            description:
                "Discover expert insights on janitorial appointments and commercial cleaning leads for growing your cleaning business.",
        },
    };
}

const page = async ({ params }) => {
    const data = await getData(params.slug) || {};
    return (
        <div className="pt-20 pb-20 px-10">
            <h2 className="2xl:text-5xl xl:text-5xl text-3xl inter font-bold text-black text-center">{data?.title}</h2>
            <p className="mt-10 text-center flex justify-center items-center gap-2"><FaRegCalendar className="mt-1" size={'1.2rem'} /><span className="inter 2xl:text-2xl xl:text-2xl text-xl font-semibold">{formatTimestamp(data?.date)}</span></p>
            <Image priority layout="responsive" src={urlFor(data?.titleImage).url()} width={950} height={665} className="my-10 w-full object-contain" alt={data?.title} />
            <div className="2xl:px-16 xl:px-16">
                <div className="flex items-center gap-2 mb-10">
                    <Image src={urlFor(data?.authorImage).url()} width={30} height={1552} className='w-[50px] h-auto rounded-full' alt='' />
                    <p className="inter text-xl font-semibold">By {data?.authorName}</p>
                </div>
                <div className="prose 2xl:prose-xl xl:prose-xl prose-indigo">
                    <PortableText value={data?.content} components={{
                        types: {
                            imageGroup: ({ value }) => {
                                const { images, layout } = value;
                                if (!images || images.length === 0) return null;
                                const imageUrls = images.map(image => urlFor(image.asset).url());
                    
                                return (
                                    <div className={`${layout === 'grid' ? 'grid 2xl:grid-cols-3 xl:grid-cols-3 gap-4 items-stretch' : 'block'
                                        }`}>
                                        {
                                            imageUrls?.map((url, i) => {
                                                return (
                                                    <Image
                                                        key={i}
                                                        src={url}
                                                        alt={`${params.slug}`}
                                                        width={950}
                                                        height={665}
                                                        className={`rounded-lg shadow-lg h-auto ${layout === 'grid' ? 'w-full' : 'mb-4'
                                                            } `}
                                                    />
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        },
                        blocks: {
                            normal: ({ children }) => <p>{children}</p>,
                        },
                    }} />
                </div>
            </div>
        </div>
    );
};

export default page;