
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Normal Delivery Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for a normal delivery doctor near Rampur? Dr. Priyanka Pachauri, Moradabad, offers antenatal care and labour support. Learn how to plan your birth. Book now.",

  keywords: [
    "normal delivery doctor near Rampur",
    "normal delivery specialist near Rampur",
    "vaginal delivery doctor near Rampur",
    "pregnancy doctor near Rampur",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "normal delivery Moradabad",
    "antenatal care near Rampur",
    "labour and delivery planning",
    "birth plan checklist",
    "signs of labour",
    "high-risk pregnancy doctor",
    "lady doctor for delivery",
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
      "https://www.gynaecologistmoradabad.com/normal-delivery-doctor-near-rampur",
  },

  openGraph: {
    title:
      "Normal Delivery Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore antenatal care, labour support and birth planning consultations with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/normal-delivery-doctor-near-rampur",
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
      "Normal Delivery Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Plan antenatal visits, labour support and birth preferences with Dr. Priyanka Pachauri in Moradabad.",
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
