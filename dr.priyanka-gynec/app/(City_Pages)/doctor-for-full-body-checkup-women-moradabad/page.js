import React from "react";
import Content from "./Content";

// SEO METADATA - DOCTOR FOR WOMEN'S FULL BODY CHECKUP
export const metadata = {
  title: "Doctor for Women's Full Body Checkup | Dr. Priyanka, Moradabad",
  description:
    "Consult Dr. Priyanka Pachauri in Moradabad about a full body checkup and preventive women's health care.",
  keywords: [
    "doctor for full body checkup women Moradabad",
    "women's full body checkup",
    "women's health checkup Moradabad",
    "preventive health checkup for women",
    "female health doctor Moradabad",
    "women's wellness consultation",
    "gynaecologist Moradabad",
    "Dr. Priyanka Pachauri Moradabad",
  ],
  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/doctor-for-full-body-checkup-women-moradabad",
  },
  openGraph: {
    title: "Doctor for Women's Full Body Checkup | Dr. Priyanka, Moradabad",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad about a full body checkup and preventive women's health care.",
    url: "https://www.gynaecologistmoradabad.com/doctor-for-full-body-checkup-women-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor for Women's Full Body Checkup | Dr. Priyanka, Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Doctor for Women's Full Body Checkup | Dr. Priyanka, Moradabad",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad about a full body checkup and preventive women's health care.",
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