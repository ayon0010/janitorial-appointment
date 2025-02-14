export default function robots() {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/dashboard', '/sellerDashboard', '/adminDashboard'],
        },
        sitemap: 'https://www.janitorialappointment.com/sitemap.xml',
    }
}