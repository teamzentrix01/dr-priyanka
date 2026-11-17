
import React from "react";
import Content from "./Content";

// SEO METADATA – Antenatal Care Doctor near Rampur
export const metadata = {
  title:
    "Antenatal Care Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for an antenatal care doctor near Rampur? Dr. Priyanka Pachauri, Moradabad, offers trimester-wise pregnancy care, 3D/4D ultrasound and delivery planning. Book now.",

  keywords: [
    "antenatal care doctor near Rampur",
    "pregnancy doctor near Rampur",
    "antenatal checkup Rampur",
    "prenatal care near Rampur",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "pregnancy care Moradabad",
    "3D 4D ultrasound Moradabad",
    "high-risk pregnancy doctor",
    "normal delivery doctor near Rampur",
    "trimester pregnancy care",
    "lady doctor for pregnancy",
    "maternity care Moradabad",
    "antenatal clinic Moradabad",
    "safe motherhood",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/antenatal-care-doctor-near-rampur",
  },

  openGraph: {
    title:
      "Antenatal Care Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",

    description:
      "Looking for an antenatal care doctor near Rampur? Dr. Priyanka Pachauri, Moradabad, offers trimester-wise pregnancy care, 3D/4D ultrasound and delivery planning. Book now.",

    url: "https://www.gynaecologistmoradabad.com/antenatal-care-doctor-near-rampur",

    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Antenatal Care Doctor near Rampur – Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Antenatal Care Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",

    description:
      "Dr. Priyanka Pachauri offers trimester-wise pregnancy care, 3D/4D ultrasound and delivery planning near Rampur, Moradabad.",

    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },

  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Moradabad, Uttar Pradesh",
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
