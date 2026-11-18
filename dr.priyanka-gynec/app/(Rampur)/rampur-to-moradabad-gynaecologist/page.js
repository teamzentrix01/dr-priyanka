
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Rampur to Moradabad Gynaecologist – Trip Planner | Dr. Priyanka Pachauri",

  description:
    "Visiting a gynaecologist in Moradabad from Rampur? Use this trip planner to prepare, avoid repeat trips and make the most of your consultation with Dr. Priyanka Pachauri.",

  keywords: [
    "Rampur to Moradabad gynaecologist",
    "gynaecologist visit from Rampur",
    "Moradabad gynaecologist trip planner",
    "plan gynaecologist visit",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "what to bring to gynaecologist",
    "first gynaecologist appointment checklist",
    "gynaecologist near Old Roadways Moradabad",
    "fertility consultation Moradabad",
    "pregnancy checkup Moradabad",
    "laparoscopic surgeon Moradabad",
    "women's clinic Moradabad",
    "second opinion gynaecologist",
    "avoid repeat visits gynaecologist",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/rampur-to-moradabad-gynaecologist-trip-planner",
  },

  openGraph: {
    title:
      "Rampur to Moradabad Gynaecologist – Trip Planner | Dr. Priyanka Pachauri",
    description:
      "Plan your gynaecologist visit from Rampur to Moradabad. Prepare your medical records, questions and appointment details before travelling.",
    url: "https://www.gynaecologistmoradabad.com/rampur-to-moradabad-gynaecologist-trip-planner",
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
      "Rampur to Moradabad Gynaecologist – Trip Planner | Dr. Priyanka Pachauri",
    description:
      "Prepare for your gynaecologist consultation in Moradabad with a practical checklist for patients travelling from Rampur.",
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
