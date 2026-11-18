
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "PCOS Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for a PCOS doctor near Rampur? Dr. Priyanka Pachauri, Moradabad, offers personalised PCOS care for irregular periods, weight, acne and fertility. Book today.",

  keywords: [
    "PCOS doctor near Rampur",
    "PCOS specialist near Rampur",
    "PCOS treatment near Rampur",
    "PCOD doctor near Rampur",
    "irregular periods treatment near Rampur",
    "PCOS and infertility",
    "ovulation induction",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "PCOS diet and lifestyle",
    "PCOS weight management",
    "PCOS pregnancy",
    "hirsutism and acne PCOS",
    "fertility specialist Moradabad",
    "lady doctor for PCOS",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/pcos-doctor-near-rampur",
  },

  openGraph: {
    title:
      "PCOS Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore personalised PCOS consultations for menstrual irregularities, acne, weight concerns and fertility with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/pcos-doctor-near-rampur",
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
      "PCOS Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Get personalised PCOS care and guidance for periods, weight, acne and fertility in Moradabad.",
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
