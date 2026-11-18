
import React from "react";
import Content from "./Content";

// SEO METADATA – Best Gynaecologist near Rampur
export const metadata = {
  title:
    "Best Gynaecologist near Rampur – How to Choose | Dr. Priyanka Pachauri",

  description:
    "How to choose the best gynaecologist near Rampur. A simple checklist, common myths and what Dr. Priyanka Pachauri, Moradabad, offers in pregnancy, IVF and laparoscopy.",

  keywords: [
    "best gynaecologist near Rampur",
    "how to choose a gynaecologist",
    "gynaecologist for Rampur patients",
    "gynaecologist in Moradabad",
    "Dr. Priyanka Pachauri",
    "best lady doctor near Rampur",
    "gynaecologist checklist",
    "second opinion gynaecologist",
    "IVF specialist Moradabad",
    "pregnancy doctor near Rampur",
    "laparoscopic surgeon Moradabad",
    "PCOS treatment near Rampur",
    "women's clinic Moradabad",
    "gynaecologist consultation",
    "women's health specialist",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/best-gynaecologist-near-rampur",
  },

  openGraph: {
    title:
      "Best Gynaecologist near Rampur – How to Choose | Dr. Priyanka Pachauri",
    description:
      "A helpful checklist for choosing a gynaecologist near Rampur, including pregnancy care, IVF and laparoscopic treatment options with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/best-gynaecologist-near-rampur",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Gynaecologist near Rampur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Best Gynaecologist near Rampur – How to Choose | Dr. Priyanka Pachauri",
    description:
      "Learn how to choose a gynaecologist and explore pregnancy, IVF and laparoscopic care options in Moradabad.",
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
