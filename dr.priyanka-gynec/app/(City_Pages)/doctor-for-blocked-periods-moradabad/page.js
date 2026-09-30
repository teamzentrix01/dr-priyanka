import React from "react";
import Content from "./Content";

// SEO METADATA – DOCTOR FOR BLOCKED PERIODS IN MORADABAD
export const metadata = {
  title: "Doctor for Blocked Periods in Moradabad | Dr. Priyanka Pachauri",

  description:
    "Missed or blocked periods? Consult Dr. Priyanka Pachauri, gynaecologist in Moradabad, for PCOS, thyroid & hormonal care. Call +91 90797 65578.",

  keywords: [
    "doctor for blocked periods Moradabad",
    "blocked periods treatment Moradabad",
    "missed periods doctor Moradabad",
    "irregular periods treatment Moradabad",
    "best gynaecologist in Moradabad",
    "period problems doctor Moradabad",
    "PCOS doctor Moradabad",
    "amenorrhea treatment Moradabad",
    "delayed periods treatment",
    "Dr. Priyanka Pachauri Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/doctor-for-blocked-periods-in-moradabad",
  },

  openGraph: {
    title: "Doctor for Blocked Periods in Moradabad | Dr. Priyanka Pachauri",
    description:
      "Missed or blocked periods? Consult Dr. Priyanka Pachauri, gynaecologist in Moradabad, for PCOS, thyroid & hormonal care. Call +91 90797 65578.",
    url: "https://www.gynaecologistmoradabad.com/doctor-for-blocked-periods-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor for Blocked Periods in Moradabad | Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Doctor for Blocked Periods in Moradabad | Dr. Priyanka Pachauri",
    description:
      "Missed or blocked periods? Consult Dr. Priyanka Pachauri, gynaecologist in Moradabad, for PCOS, thyroid & hormonal care. Call +91 90797 65578.",
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
