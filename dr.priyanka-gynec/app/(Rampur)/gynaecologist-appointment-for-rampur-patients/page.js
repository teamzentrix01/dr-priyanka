
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Gynaecologist Appointment for Rampur Patients – Dr. Priyanka Pachauri",

  description:
    "Book a gynaecologist appointment in Moradabad as a Rampur patient. Call or WhatsApp Dr. Priyanka Pachauri's clinic. Learn what to say, bring and ask when you book.",

  keywords: [
    "gynaecologist appointment for Rampur patients",
    "book gynaecologist appointment Rampur",
    "gynaecologist appointment Moradabad",
    "WhatsApp appointment gynaecologist",
    "Dr. Priyanka Pachauri appointment",
    "how to book gynaecologist appointment",
    "first gynaecology appointment",
    "fertility consultation appointment",
    "antenatal appointment Moradabad",
    "second opinion appointment gynaecologist",
    "women's clinic Moradabad",
    "gynaecologist booking checklist",
    "Dr. Priyanka Gynaec contact",
    "reschedule gynaecologist appointment",
    "gynaecologist in Moradabad",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/gynaecologist-appointment-for-rampur-patients",
  },

  openGraph: {
    title:
      "Gynaecologist Appointment for Rampur Patients – Dr. Priyanka Pachauri",
    description:
      "Book your gynaecologist appointment in Moradabad. Find out how to contact the clinic and prepare for your consultation.",
    url: "https://www.gynaecologistmoradabad.com/gynaecologist-appointment-for-rampur-patients",
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
      "Gynaecologist Appointment for Rampur Patients – Dr. Priyanka Pachauri",
    description:
      "Book a gynaecologist appointment in Moradabad and prepare for your consultation with Dr. Priyanka Pachauri.",
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
