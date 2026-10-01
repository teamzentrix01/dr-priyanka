import React from "react";
import Content from "./Content";

// SEO METADATA - DOCTOR FOR HORMONAL PROBLEMS IN WOMEN
export const metadata = {
  title: "Doctor for Hormonal Problems in Women | Dr. Priyanka, Moradabad",
  description:
    "Consult Dr. Priyanka Pachauri in Moradabad about hormonal concerns and women's health care.",
  keywords: [
    "doctor for hormonal problems women Moradabad",
    "hormone doctor for women",
    "hormonal imbalance consultation Moradabad",
    "women's hormone specialist Moradabad",
    "hormonal health doctor",
    "gynaecologist Moradabad",
    "women's health consultation Moradabad",
    "Dr. Priyanka Pachauri Moradabad",
  ],
  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/doctor-for-hormonal-problems-women-moradabad",
  },
  openGraph: {
    title: "Doctor for Hormonal Problems in Women | Dr. Priyanka, Moradabad",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad about hormonal concerns and women's health care.",
    url: "https://www.gynaecologistmoradabad.com/doctor-for-hormonal-problems-women-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor for Hormonal Problems in Women | Dr. Priyanka, Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Doctor for Hormonal Problems in Women | Dr. Priyanka, Moradabad",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad about hormonal concerns and women's health care.",
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