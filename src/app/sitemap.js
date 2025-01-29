import { blogData } from "./(main)/blogs/page";

export default async function sitemap() {
    const pathName = ['/', '/about', '/blogs', '/decision-maker', '/single-decision-maker', '/cleaning-calculator', '/other-services', '/my-subscription', '/search/exclusive-leads', '/search/layups', '/search/opportunities', '/profile'];
    const blogs = await blogData() || [];
    const urls = pathName.map(name => ({
        url: `https://www.janitorialappointment.com${name}`
    }));
    const blogsUrl = blogs.map(blog => (
        {
            url: `https://www.janitorialappointment.com/blogs/${blog?.currentSlug}`,
        }
    ))
    const allUrls = [...urls, ...blogsUrl];
    return [
        ...allUrls
    ]
}