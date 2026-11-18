
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Pregnancy Scan Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for a pregnancy scan doctor near Rampur? Dr. Priyanka Pachauri, Moradabad, offers 3D/4D ultrasound within antenatal care. Plan your scans and book a visit.",

  keywords: [
    "pregnancy scan doctor near Rampur",
    "pregnancy ultrasound near Rampur",
    "antenatal scan near Rampur",
    "3D 4D ultrasound near Rampur",
    "dating scan",
    "anomaly scan",
    "growth scan in pregnancy",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "Voluson E22 ultrasound",
    "pregnancy scan schedule",
    "high-risk pregnancy scan",
    "antenatal care near Rampur",
    "lady doctor for pregnancy",
    "maternity care Moradabad",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/pregnancy-scan-doctor-near-rampur",
  },

  openGraph: {
    title:
      "Pregnancy Scan Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore pregnancy ultrasound and antenatal scan planning with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/pregnancy-scan-doctor-near-rampur",
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
      "Pregnancy Scan Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Plan your pregnancy scans and antenatal care consultation in Moradabad with Dr. Priyanka Pachauri.",
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
