
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Irregular Periods Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for an irregular periods doctor near Rampur? Dr. Priyanka Pachauri, Moradabad, finds the cause and treats PCOS, thyroid, fibroids and more. Book your visit.",

  keywords: [
    "irregular periods doctor near Rampur",
    "irregular periods treatment near Rampur",
    "missed periods doctor near Rampur",
    "delayed periods treatment",
    "menstrual disorder doctor near Rampur",
    "PCOS and irregular periods",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "period tracking",
    "thyroid and periods",
    "lady doctor for periods problem",
    "abnormal uterine bleeding",
    "women's health clinic Moradabad",
    "hormonal imbalance treatment",
    "cycle irregularity causes",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/irregular-periods-doctor-near-rampur",
  },

  openGraph: {
    title:
      "Irregular Periods Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Get an evaluation for irregular periods and possible causes such as PCOS, thyroid conditions and fibroids with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/irregular-periods-doctor-near-rampur",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Gynaecologist in Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Irregular Periods Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about evaluation and treatment options for irregular periods with Dr. Priyanka Pachauri in Moradabad.",
    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },

  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Rampur, Uttar Pradesh",
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
