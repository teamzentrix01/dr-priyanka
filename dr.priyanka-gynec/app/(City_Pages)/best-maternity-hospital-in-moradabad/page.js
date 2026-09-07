import React from "react";
import Content from "./Content";


// SEO METADATA – BEST MATERNITY HOSPITAL IN MORADABAD
export const metadata = {
  title: "Best Maternity Hospital in Moradabad | Dr. Priyanka Gynec",


  description:
    "Searching for the best maternity hospital in Moradabad? From antenatal checkups to normal delivery and postnatal care, get expert, safe support at Dr. Priyanka Gynec. Book your appointment today.",


  keywords: [
    "best maternity hospital in Moradabad",
    "maternity hospital Moradabad",
    "best gynaecologist Moradabad",
    "normal delivery hospital Moradabad",
    "pregnancy hospital Moradabad",
    "best delivery hospital Moradabad",
    "women's hospital Moradabad",
    "antenatal care Moradabad",
    "Dr. Priyanka Pachauri",
    "top maternity center Moradabad",
  ],


  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/best-maternity-hospital-in-moradabad",
  },


  openGraph: {
    title: "Best Maternity Hospital in Moradabad | Dr. Priyanka Gynec",
    description:
      "Searching for the best maternity hospital in Moradabad? From antenatal checkups to normal delivery and postnatal care, get expert, safe support at Dr. Priyanka Gynec. Book your appointment today.",
    url: "https://www.gynaecologistmoradabad.com/best-maternity-hospital-in-moradabad",
    siteName: "Dr. Priyanka Gynec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Best Maternity Hospital in Moradabad | Dr. Priyanka Gynec",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Best Maternity Hospital in Moradabad | Dr. Priyanka Gynec",
    description:
      "Searching for the best maternity hospital in Moradabad? From antenatal checkups to normal delivery and postnatal care, get expert, safe support at Dr. Priyanka Gynec. Book your appointment today.",
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