
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Top Lady Doctor near Rampur for Every Woman in Your Family – Dr. Priyanka Pachauri",

  description:
    "Looking for a top lady doctor near Rampur? Dr. Priyanka Pachauri, Moradabad, offers care for teenagers, brides, mothers-to-be and women after menopause. Book today.",

  keywords: [
    "top lady doctor near Rampur",
    "lady doctor for family",
    "lady doctor for teenage girls",
    "lady doctor for newly married women",
    "lady doctor for pregnancy near Rampur",
    "lady doctor for menopause",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "female gynaecologist near Rampur",
    "women's health clinic Moradabad",
    "fertility specialist Moradabad",
    "laparoscopic surgeon Moradabad",
    "normal delivery doctor",
    "lady doctor for periods problem",
    "family gynaecologist",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/top-lady-doctor-near-rampur",
  },

  openGraph: {
    title:
      "Top Lady Doctor near Rampur for Every Woman in Your Family – Dr. Priyanka Pachauri",
    description:
      "Women's healthcare consultations for different stages of life with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/top-lady-doctor-near-rampur",
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
      "Top Lady Doctor near Rampur for Every Woman in Your Family – Dr. Priyanka Pachauri",
    description:
      "Explore women's healthcare consultations for teenagers, pregnancy, motherhood and menopause in Moradabad.",
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
