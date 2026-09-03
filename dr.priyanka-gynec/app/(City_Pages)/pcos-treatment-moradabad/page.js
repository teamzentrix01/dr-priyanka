import React from "react";
import Content from "./Content";

// SEO METADATA – PCOS TREATMENT IN MORADABAD
export const metadata = {
  title: "PCOS Treatment in Moradabad | Dr. Priyanka Gynaec",

  description:
    "Expert PCOS treatment in Moradabad with personalized care for irregular periods, weight gain & infertility. Advanced fertility support by Dr. Priyanka Gynaec.",

  keywords: [
    "PCOS treatment Moradabad",
    "PCOS doctor Moradabad",
    "PCOS specialist Moradabad",
    "irregular periods treatment",
    "PCOS and infertility treatment",
    "best Gynaecologist for PCOS",
    "hormonal imbalance treatment Moradabad",
    "PCOS pregnancy treatment",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/pcos-treatment-in-moradabad",
  },

  openGraph: {
    title: "PCOS Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Expert PCOS treatment in Moradabad with personalized care for irregular periods, weight gain & infertility. Advanced fertility support by Dr. Priyanka Gynaec.",
    url: "https://www.gynaecologistmoradabad.com/pcos-treatment-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "PCOS Treatment in Moradabad | Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "PCOS Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Expert PCOS treatment in Moradabad with personalized care for irregular periods, weight gain & infertility. Advanced fertility support by Dr. Priyanka Gynaec.",
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