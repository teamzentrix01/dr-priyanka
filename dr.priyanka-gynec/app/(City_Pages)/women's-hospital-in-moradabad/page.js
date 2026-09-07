import React from "react";
import Content from "./Content";


// SEO METADATA – WOMEN'S HOSPITAL IN MORADABAD
export const metadata = {
  title: "Women's Hospital In Moradabad | Dr. Priyanka Pachauri",


  description:
    "Looking for a trusted women's hospital in Moradabad? Dr. Priyanka Pachauri offers complete gynaecology, pregnancy, and fertility care under one roof.",


  keywords: [
    "women's hospital in Moradabad",
    "best women's hospital Moradabad",
    "maternity hospital Moradabad",
    "gynaecology hospital Moradabad",
    "fertility hospital Moradabad",
    "IVF hospital Moradabad",
    "delivery hospital Moradabad",
    "women's health center Moradabad",
    "Dr Priyanka Pachauri",
    "laparoscopic hospital Moradabad",
  ],


  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/womens-hospital-in-moradabad",
  },


  openGraph: {
    title: "Women's Hospital In Moradabad | Dr. Priyanka Pachauri",
    description:
      "Looking for a trusted women's hospital in Moradabad? Dr. Priyanka Pachauri offers complete gynaecology, pregnancy, and fertility care under one roof.",
    url: "https://www.gynaecologistmoradabad.com/womens-hospital-in-moradabad",
    siteName: "Dr. Priyanka Pachauri",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Women's Hospital In Moradabad | Dr. Priyanka Pachauri",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Women's Hospital In Moradabad | Dr. Priyanka Pachauri",
    description:
      "Looking for a trusted women's hospital in Moradabad? Dr. Priyanka Pachauri offers complete gynaecology, pregnancy, and fertility care under one roof.",
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