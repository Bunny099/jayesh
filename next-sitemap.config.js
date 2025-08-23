
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://jayeshkhuman.in', 
  generateRobotsTxt: true, 
  sitemapSize: 7000,       
  changefreq: 'weekly',   
  priority: 0.7,           
  exclude: ['/admin'],     
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'], 
      },
    ],
    additionalSitemaps: [
      'https://jayeshkhuman.in/sitemap.xml',
    ],
  },
};
