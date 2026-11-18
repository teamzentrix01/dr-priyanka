
import React from "react";
import Content from "./Content";

// SEO METADATA – Fibroid Surgery Doctor near Rampur
export const metadata = {
  title:
    "Fibroid Surgery Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for a fibroid surgery doctor near Rampur? Dr. Priyanka Pachauri, Moradabad, offers uterus-preserving 3D laparoscopic myomectomy and honest second opinions.",

  keywords: [
    "fibroid surgery doctor near Rampur",
    "fibroid treatment near Rampur",
    "laparoscopic myomectomy near Rampur",
    "uterine fibroid removal",
    "fibroid specialist near Rampur",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "heavy periods treatment",
    "uterus-preserving surgery",
    "fibroids and pregnancy",
    "second opinion fibroid surgery",
    "3D laparoscopy Moradabad",
    "hysteroscopy Moradabad",
    "keyhole fibroid surgery",
    "lady doctor for fibroids",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/fibroid-surgery-doctor-near-rampur",
  },

  openGraph: {
    title:
      "Fibroid Surgery Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore fibroid treatment options, uterus-preserving laparoscopic myomectomy and second opinions with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/fibroid-surgery-doctor-near-rampur",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Fibroid Surgery Doctor near Rampur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Fibroid Surgery Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Fibroid treatment options, laparoscopic myomectomy and second opinions in Moradabad.",
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
