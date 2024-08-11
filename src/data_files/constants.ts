import ogImageSrc from "@/images/social.png";

export const SITE = {
  title: "GreenField Dev",
  tagline: "Top-quality Web Development Services",
  description: "GreenField Development offers top-tier web and mobile application services. LGBTQAI+ owned and operated, we are committed to providing the best user experience and customer service. Our team of experts is dedicated to helping you achieve your goals. Contact us today to learn more!",
  description_short: "GreenField Development offers top-tier web and mobile application services.",
  url: "https://greenfield-dev.com",
  author: "Daniel Vigil / Hanna Littlefield",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Mobile & Web Application Services`,
  description: "Equip your projects with GreenField Dev's top-quality application and expert services. Trusted by many, GreenField Dev offers simplicity, affordability, and reliability. Experience the difference when you work with a team that listens to what you want. Start exploring now!",
  image: ogImageSrc,
};
