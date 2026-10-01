import React from "react";
import Content from "./Content";

// SEO METADATA - DOCTOR FOR UTERUS PROLAPSE
export const metadata = {
  title: "Doctor for Uterus Prolapse | Dr. Priyanka, Moradabad",
  description:
    "Consult Dr. Priyanka Pachauri in Moradabad about uterus prolapse evaluation and women's health care.",
  keywords: [
    "doctor for uterus prolapse Moradabad",
    "uterus prolapse doctor",
    "uterine prolapse consultation Moradabad",
    "pelvic organ prolapse doctor",
    "gynaecologist Moradabad",
    "women's health consultation Moradabad",
    "uterus treatment consultation",
    "Dr. Priyanka Pachauri Moradabad",
  ],
  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/doctor-for-uterus-prolapse-moradabad",
  },
  openGraph: {
    title: "Doctor for Uterus Prolapse | Dr. Priyanka, Moradabad",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad about uterus prolapse evaluation and women's health care.",
    url: "https://www.gynaecologistmoradabad.com/doctor-for-uterus-prolapse-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor for Uterus Prolapse | Dr. Priyanka, Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Doctor for Uterus Prolapse | Dr. Priyanka, Moradabad",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad about uterus prolapse evaluation and women's health care.",
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