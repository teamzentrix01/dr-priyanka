
import React from "react";
import Content from "./Content";

// SEO METADATA – Book Gynaecologist Appointment in Katghar, Moradabad
export const metadata = {
  title:
    "Book Gynaecologist Appointment in Katghar Moradabad – Dr. Priyanka Pachauri",

  description:
    "Book a gynaecologist appointment in Katghar, Moradabad with Dr. Priyanka Pachauri. Call or WhatsApp for pregnancy care, PCOS, IVF, periods problems and laparoscopy.",

  keywords: [
    "book gynaecologist appointment Katghar Moradabad",
    "gynaecologist appointment Moradabad",
    "online appointment gynaecologist Moradabad",
    "book lady doctor appointment",
    "Dr. Priyanka Pachauri appointment",
    "gynaecologist in Katghar",
    "women's clinic Moradabad",
    "WhatsApp appointment gynaecologist",
    "pregnancy checkup appointment Moradabad",
    "fertility consultation Moradabad",
    "PCOS consultation Moradabad",
    "laparoscopic surgeon consultation Moradabad",
    "gynaecologist near me",
    "Dr. Priyanka Gynaec contact",
    "women's health appointment",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/book-gynaecologist-appointment-in-katghar-moradabad",
  },

  openGraph: {
    title:
      "Book Gynaecologist Appointment in Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Book a gynaecologist appointment in Katghar, Moradabad with Dr. Priyanka Pachauri. Call or WhatsApp for pregnancy care, PCOS, IVF, periods problems and laparoscopy.",

    url: "https://www.gynaecologistmoradabad.com/book-gynaecologist-appointment-in-katghar-moradabad",

    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Book Gynaecologist Appointment in Katghar Moradabad – Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Book Gynaecologist Appointment in Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Book an appointment with Dr. Priyanka Pachauri in Katghar, Moradabad for pregnancy care, PCOS, IVF, menstrual problems and laparoscopy.",

    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },

  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Katghar, Moradabad",
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
