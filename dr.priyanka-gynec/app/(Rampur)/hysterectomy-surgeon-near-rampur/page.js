
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Hysterectomy Surgeon near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for a hysterectomy surgeon near Rampur? Dr. Priyanka Pachauri, Moradabad, offers laparoscopic hysterectomy and honest second opinions. Plan your visit today.",

  keywords: [
    "hysterectomy surgeon near Rampur",
    "hysterectomy doctor near Rampur",
    "laparoscopic hysterectomy near Rampur",
    "uterus removal surgery near Rampur",
    "keyhole hysterectomy",
    "second opinion hysterectomy",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "alternatives to hysterectomy",
    "fibroid treatment near Rampur",
    "heavy periods treatment",
    "hysterectomy recovery tips",
    "uterine prolapse treatment",
    "laparoscopic surgeon Moradabad",
    "lady doctor for hysterectomy",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/hysterectomy-surgeon-near-rampur",
  },

  openGraph: {
    title:
      "Hysterectomy Surgeon near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about laparoscopic hysterectomy and second-opinion consultations with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/hysterectomy-surgeon-near-rampur",
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
      "Hysterectomy Surgeon near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore laparoscopic hysterectomy options and get an informed second opinion in Moradabad.",
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
