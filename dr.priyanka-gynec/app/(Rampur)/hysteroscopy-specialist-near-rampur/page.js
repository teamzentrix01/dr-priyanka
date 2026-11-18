
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Hysteroscopy Specialist near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for a hysteroscopy specialist near Rampur? Dr. Priyanka Pachauri, Moradabad, offers diagnostic hysteroscopy and polypectomy without cuts. Plan your visit today.",

  keywords: [
    "hysteroscopy specialist near Rampur",
    "hysteroscopy doctor near Rampur",
    "diagnostic hysteroscopy near Rampur",
    "hysteroscopic polypectomy",
    "uterine polyp removal near Rampur",
    "hysteroscopy for infertility",
    "hysteroscopy for abnormal bleeding",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "day-care hysteroscopy",
    "recurrent miscarriage evaluation",
    "intrauterine adhesions treatment",
    "laparoscopic surgeon Moradabad",
    "fertility specialist Moradabad",
    "lady doctor for hysteroscopy",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/hysteroscopy-specialist-near-rampur",
  },

  openGraph: {
    title:
      "Hysteroscopy Specialist near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore diagnostic hysteroscopy and hysteroscopic polypectomy consultations with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/hysteroscopy-specialist-near-rampur",
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
      "Hysteroscopy Specialist near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about diagnostic hysteroscopy and polypectomy consultations in Moradabad.",
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
