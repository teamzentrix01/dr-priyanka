
import React from "react";
import Content from "./Content";

// SEO METADATA – Top Lady Doctor in Katghar, Moradabad
export const metadata = {
  title:
    "Top Lady Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",

  description:
    "Searching for the top lady doctor in Katghar, Moradabad? Consult Dr. Priyanka Pachauri for PCOS, pregnancy care, IVF, normal delivery and 3D laparoscopy. Book today.",

  keywords: [
    "top lady doctor in Katghar Moradabad",
    "best lady doctor Katghar",
    "lady doctor in Moradabad",
    "female gynaecologist Moradabad",
    "women's doctor near me",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Katghar",
    "lady doctor for pregnancy Moradabad",
    "PCOS doctor Moradabad",
    "IVF specialist Moradabad",
    "laparoscopic surgeon Moradabad",
    "lady doctor for periods problem",
    "normal delivery doctor Moradabad",
    "women's health clinic Moradabad",
    "fertility doctor Moradabad",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/top-lady-doctor-in-katghar-moradabad",
  },

  openGraph: {
    title:
      "Top Lady Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Searching for the top lady doctor in Katghar, Moradabad? Consult Dr. Priyanka Pachauri for PCOS, pregnancy care, IVF, normal delivery and 3D laparoscopy. Book today.",

    url: "https://www.gynaecologistmoradabad.com/top-lady-doctor-in-katghar-moradabad",

    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Top Lady Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Top Lady Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Consult Dr. Priyanka Pachauri for PCOS, pregnancy care, IVF, normal delivery and 3D laparoscopy in Katghar, Moradabad.",

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
