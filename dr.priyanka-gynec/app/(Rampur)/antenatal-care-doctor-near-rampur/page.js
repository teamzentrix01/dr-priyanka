
import React from "react";
import Content from "./Content";

// SEO METADATA – Antenatal Care Doctor near Rampur
export const metadata = {
  title:
    "Antenatal Care Doctor near Rampur – First-Time Mother Guide | Dr. Priyanka Pachauri",

  description:
    "First pregnancy? Find an antenatal care doctor near Rampur. Dr. Priyanka Pachauri, Moradabad, explains checkups, myths and warning signs. Book your first visit.",

  keywords: [
    "antenatal care doctor near Rampur",
    "first pregnancy guide",
    "first-time mother checklist",
    "pregnancy myths and facts",
    "pregnancy doctor near Rampur",
    "prenatal care near Rampur",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "antenatal checkup",
    "pregnancy questions to ask doctor",
    "normal delivery doctor",
    "pregnancy warning signs",
    "3D 4D ultrasound Moradabad",
    "maternity care Moradabad",
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
      "Antenatal Care Doctor near Rampur – First-Time Mother Guide | Dr. Priyanka Pachauri",
    description:
      "First pregnancy? Learn about antenatal checkups, pregnancy myths, warning signs and prenatal care with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/antenatal-care-doctor-near-rampur",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Antenatal Care Doctor near Rampur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Antenatal Care Doctor near Rampur – First-Time Mother Guide | Dr. Priyanka Pachauri",
    description:
      "A first-time mother's guide to antenatal checkups, pregnancy myths and warning signs.",
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
