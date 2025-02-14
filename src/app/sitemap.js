import { blogData } from "./(main)/blogs/page";

export default async function sitemap() {
    const pathName = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Blogs', path: '/blogs' },
        {name:'Book an apointment',path:'/book-an-appointment'},
        { name: 'Decision Maker', path: '/decision-maker' },
        { name: 'Single Decision Maker', path: '/single-decision-maker' },
        { name: 'Cleaning Calculator', path: '/cleaning-calculator' },
        { name: 'Other Services', path: '/other-services' },
        { name: 'Exclusive Leads', path: '/search/exclusive-leads' },
        { name: 'Layups', path: '/search/layups' },
        { name: 'Opportunities', path: '/search/opportunities' },
        { name: 'Profile', path: '/profile' },
    ];
    const blogs = await blogData() || [];
    const urls = pathName.map((name) => ({
        url: `https://www.janitorialappointment.com${name.path}`,
        name: name.name
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