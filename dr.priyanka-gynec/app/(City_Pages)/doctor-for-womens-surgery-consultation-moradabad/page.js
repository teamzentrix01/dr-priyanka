import React from "react";
import Content from "./Content";

// SEO METADATA - WOMEN'S SURGERY CONSULTATION
export const metadata = {
  title: "Women's Surgery Consultation | Dr. Priyanka, Moradabad",
  description:
    "Consult Dr. Priyanka Pachauri in Moradabad about gynaecological surgery options and women's health care.",
  keywords: [
    "doctor for women's surgery consultation Moradabad",
    "women's surgery consultation",
    "gynaecological surgeon Moradabad",
    "gynaecological surgery consultation",
    "laparoscopic gynaecologist Moradabad",
    "women's health surgery doctor",
    "surgery second opinion Moradabad",
    "Dr. Priyanka Pachauri Moradabad",
  ],
  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/doctor-for-womens-surgery-consultation-moradabad",
  },
  openGraph: {
    title: "Women's Surgery Consultation | Dr. Priyanka, Moradabad",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad about gynaecological surgery options and women's health care.",
    url: "https://www.gynaecologistmoradabad.com/doctor-for-womens-surgery-consultation-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Women's Surgery Consultation | Dr. Priyanka, Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Women's Surgery Consultation | Dr. Priyanka, Moradabad",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad about gynaecological surgery options and women's health care.",
    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;