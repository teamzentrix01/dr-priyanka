
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Women's Health Clinic near Rampur – Dr. Priyanka Gynaec, Moradabad",

  description:
    "Looking for a women's health clinic near Rampur? Dr. Priyanka Gynaec, Moradabad, offers gynaecology, pregnancy care, IVF and 3D laparoscopy under one roof. Book today.",

  keywords: [
    "women's health clinic near Rampur",
    "women's clinic near Rampur",
    "gynaecology clinic near Rampur",
    "women's healthcare near Rampur",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "fertility and IVF clinic near Rampur",
    "pregnancy care near Rampur",
    "laparoscopic surgery near Rampur",
    "women's health clinic Moradabad",
    "PCOS treatment near Rampur",
    "antenatal care near Rampur",
    "paediatric care Moradabad",
    "lady doctor clinic near Rampur",
    "complete women's healthcare",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/womens-health-clinic-near-rampur",
  },

  openGraph: {
    title:
      "Women's Health Clinic near Rampur – Dr. Priyanka Gynaec, Moradabad",
    description:
      "Explore women's healthcare, gynaecology, pregnancy care and fertility consultations with Dr. Priyanka Gynaec in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/womens-health-clinic-near-rampur",
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
      "Women's Health Clinic near Rampur – Dr. Priyanka Gynaec, Moradabad",
    description:
      "Gynaecology, pregnancy care and fertility consultations at Dr. Priyanka Gynaec in Moradabad.",
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
