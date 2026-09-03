import React from "react";
import Content from "./Content";

// SEO METADATA – PELVIC PAIN TREATMENT IN MORADABAD
export const metadata = {
  title: "Pelvic Pain Treatment in Moradabad | Dr. Priyanka Gynaec",

  description:
    "Expert pelvic pain treatment in Moradabad by Dr. Priyanka Gynaec. Accurate diagnosis, advanced laparoscopy & personalized care for lasting relief. Book now.",

  keywords: [
    "pelvic pain treatment Moradabad",
    "chronic pelvic pain doctor Moradabad",
    "best Gynaecologist for pelvic pain",
    "pelvic pain specialist Moradabad",
    "lower abdomen pain treatment",
    "endometriosis pelvic pain Moradabad",
    "ovarian cyst pain treatment",
    "pelvic inflammatory disease treatment Moradabad",
    "Dr Priyanka Gynaec",
    "women's health Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/pelvic-pain-treatment-in-moradabad",
  },

  openGraph: {
    title: "Pelvic Pain Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Expert pelvic pain treatment in Moradabad by Dr. Priyanka Gynaec. Accurate diagnosis, advanced laparoscopy & personalized care for lasting relief. Book now.",
    url: "https://www.gynaecologistmoradabad.com/pelvic-pain-treatment-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Pelvic Pain Treatment in Moradabad | Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Pelvic Pain Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Expert pelvic pain treatment in Moradabad by Dr. Priyanka Gynaec. Accurate diagnosis, advanced laparoscopy & personalized care for lasting relief. Book now.",
    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;