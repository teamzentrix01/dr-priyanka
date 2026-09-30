import React from "react";
import Content from "./Content";

// SEO METADATA – DOCTOR FOR PAINFUL PERIODS NEAR ME
export const metadata = {
  title: "Doctor for Painful Periods Near Me | Dr. Priyanka, Moradabad",

  description:
    "Severe period pain? Consult Dr. Priyanka Pachauri, gynaecologist in Moradabad, for endometriosis, PCOS & cramps care. Call +91 90797 65578.",

  keywords: [
    "doctor for painful periods near me",
    "painful periods treatment Moradabad",
    "period pain doctor Moradabad",
    "severe menstrual cramps treatment",
    "endometriosis treatment Moradabad",
    "best gynaecologist in Moradabad",
    "dysmenorrhea treatment",
    "gynaecologist near me",
    "PCOS doctor Moradabad",
    "Dr. Priyanka Pachauri Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/doctor-for-painful-periods-near-me",
  },

  openGraph: {
    title: "Doctor for Painful Periods Near Me | Dr. Priyanka, Moradabad",
    description:
      "Severe period pain? Consult Dr. Priyanka Pachauri, gynaecologist in Moradabad, for endometriosis, PCOS & cramps care. Call +91 90797 65578.",
    url: "https://www.gynaecologistmoradabad.com/doctor-for-painful-periods-near-me",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor for Painful Periods Near Me | Dr. Priyanka, Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Doctor for Painful Periods Near Me | Dr. Priyanka, Moradabad",
    description:
      "Severe period pain? Consult Dr. Priyanka Pachauri, gynaecologist in Moradabad, for endometriosis, PCOS & cramps care. Call +91 90797 65578.",
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
