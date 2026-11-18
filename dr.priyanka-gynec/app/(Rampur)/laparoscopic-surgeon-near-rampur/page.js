
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Laparoscopic Surgeon near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for a laparoscopic surgeon near Rampur? Dr. Priyanka Pachauri, Moradabad, offers 3D keyhole surgery for cysts, fibroids and endometriosis. Plan your visit today.",

  keywords: [
    "laparoscopic surgeon near Rampur",
    "laparoscopic gynae surgeon near Rampur",
    "3D laparoscopy near Rampur",
    "keyhole surgery gynaecology",
    "laparoscopic hysterectomy near Rampur",
    "laparoscopic myomectomy",
    "laparoscopic cystectomy",
    "endometriosis surgery",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "second opinion before surgery",
    "fibroid surgery near Rampur",
    "ovarian cyst removal near Rampur",
    "hysteroscopy Moradabad",
    "minimally invasive gynaecological surgery",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/laparoscopic-surgeon-near-rampur",
  },

  openGraph: {
    title:
      "Laparoscopic Surgeon near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore 3D laparoscopic and minimally invasive gynaecological surgery consultations for cysts, fibroids and endometriosis in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/laparoscopic-surgeon-near-rampur",
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
      "Laparoscopic Surgeon near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about minimally invasive gynaecological surgery options and second opinions in Moradabad.",
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
