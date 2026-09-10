import React from "react";
import Content from "./Content";

// SEO METADATA – ANTENATAL CARE DOCTOR NEAR ME
export const metadata = {
  title: "Antenatal Care Doctor Near Me | Dr. Priyanka Gynaec Moradabad",

  description:
    "Searching for an antenatal care doctor near me? Dr. Priyanka Gynaec Moradabad offers complete pregnancy care, 3D/4D ultrasound and high-risk monitoring close to home. Trusted, caring and accessible. Call or WhatsApp now.",

  keywords: [
    "antenatal care doctor near me",
    "gynaecologist near me Moradabad",
    "pregnancy doctor near me Moradabad",
    "Dr. Priyanka Gynaec Moradabad",
    "antenatal care specialist near me",
    "best gynaecologist near me Moradabad",
    "pregnancy checkup near me",
    "lady doctor near me Moradabad",
    "maternity doctor near me Moradabad",
    "antenatal clinic near me Moradabad",
    "obstetrician near me Moradabad",
    "high risk pregnancy doctor near me",
    "best antenatal care Moradabad",
    "gynaec clinic near me",
    "pregnancy hospital near me Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/antenatal-care-doctor-near-me",
  },

  openGraph: {
    title: "Antenatal Care Doctor Near Me | Dr. Priyanka Gynaec Moradabad",
    description:
      "Searching for an antenatal care doctor near me? Dr. Priyanka Gynaec Moradabad offers complete pregnancy care, 3D/4D ultrasound and high-risk monitoring close to home. Trusted, caring and accessible. Call or WhatsApp now.",
    url: "https://www.gynaecologistmoradabad.com/antenatal-care-doctor-near-me",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Antenatal Care Doctor Near Me | Dr. Priyanka Gynaec Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Antenatal Care Doctor Near Me | Dr. Priyanka Gynaec Moradabad",
    description:
      "Searching for an antenatal care doctor near me? Dr. Priyanka Gynaec Moradabad offers complete pregnancy care, 3D/4D ultrasound and high-risk monitoring close to home. Trusted, caring and accessible. Call or WhatsApp now.",
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