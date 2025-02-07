import { client } from '@/lib/sanity';
import BlogCards from '@/ui/BlogCards';


export const metadata = {
    title: "Blog - Janitorial Appointments & Commercial Cleaning Leads",
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
        title: "Janitorial Appointments & Commercial Cleaning Leads Blog",
        description:
            "Explore industry news and expert tips on generating janitorial appointments and commercial cleaning leads to grow your business.",
        url: "https://www.janitorialappointment.com/blogs",
        type: "website",
    },
    twitter: {
        card: "",
        title: "Janitorial Appointments & Commercial Cleaning Leads Blog",
        description:
            "Discover expert insights on janitorial appointments and commercial cleaning leads for growing your cleaning business.",
    },
};


export const revalidate = 2;


export const blogData = async () => {
    const query = `*[_type == 'blog'] | order(_createdAt asc) {
title,
"currentSlug":slug.current,
date,
content,
titleImage,
authorName,
 authorImage
}`
    const data = await client.fetch(query, { cache: 'no-cache' });
    return data;
}




const page = async () => {

    const blogs = await blogData() || [];

    return (
        <div className="2xl:pt-40 xl:pt-40 pt-28 pb-20 px-10">
            <h1 className="text-2xl font-bold inter">Stories, News, and Insights for Business Growth</h1>
            <p className=" 2xl:text-sm xl:text-sm text-xs opacity-60 font-medium mt-3">A thoughtfully curated blog featuring stories, news, and insights to help you grow and enhance your cleaning service business.</p>
            <div className='grid 2xl:grid-cols-4 xl:grid-cols-4 grid-cols-1 items-stretch gap-6 mt-10'>
                {
                    blogs.map((blog, i) => {
                        return (
                            <BlogCards key={i} blog={blog} />
                        )
                    })
                }
            </div>
        </div>
    );
};

export default page;