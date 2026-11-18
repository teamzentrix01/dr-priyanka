
import React from "react";
import Content from "./Content";

// SEO METADATA – C-Section Specialist near Rampur
export const metadata = {
  title:
    "C-Section Specialist near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for a C-section specialist near Rampur? Dr. Priyanka Pachauri, Moradabad, offers antenatal care and caesarean planning when medically needed. Learn how to prepare.",

  keywords: [
    "C-section specialist near Rampur",
    "caesarean doctor near Rampur",
    "C-section doctor near Rampur",
    "caesarean delivery planning",
    "planned C-section preparation",
    "C-section recovery tips",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "pregnancy care near Rampur",
    "high-risk pregnancy doctor",
    "normal delivery vs caesarean",
    "repeat caesarean",
    "antenatal care near Rampur",
    "lady doctor for delivery",
    "maternity care Moradabad",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/c-section-specialist-near-rampur",
  },

  openGraph: {
    title:
      "C-Section Specialist near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about antenatal care, medically indicated caesarean planning and C-section preparation with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/c-section-specialist-near-rampur",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – C-Section Specialist near Rampur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "C-Section Specialist near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Antenatal care, caesarean planning when medically needed and C-section preparation guidance near Rampur.",
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
