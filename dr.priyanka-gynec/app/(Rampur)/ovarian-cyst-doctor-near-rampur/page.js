
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Ovarian Cyst Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for an ovarian cyst doctor near Rampur? Dr. Priyanka Pachauri, Moradabad, offers fertility-preserving 3D laparoscopic cystectomy and honest second opinions.",

  keywords: [
    "ovarian cyst doctor near Rampur",
    "ovarian cyst treatment near Rampur",
    "ovarian cyst surgeon near Rampur",
    "laparoscopic cystectomy near Rampur",
    "ovarian cyst removal",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "3D laparoscopy Moradabad",
    "endometrioma treatment",
    "chocolate cyst treatment",
    "PCOS and ovarian cyst",
    "second opinion ovarian cyst",
    "fertility-preserving surgery",
    "pelvic pain doctor",
    "lady doctor for ovarian cyst",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/ovarian-cyst-doctor-near-rampur",
  },

  openGraph: {
    title:
      "Ovarian Cyst Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore ovarian cyst evaluation, laparoscopic treatment options and second-opinion consultations with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/ovarian-cyst-doctor-near-rampur",
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
      "Ovarian Cyst Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about ovarian cyst evaluation, fertility-conscious treatment options and second opinions in Moradabad.",
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
