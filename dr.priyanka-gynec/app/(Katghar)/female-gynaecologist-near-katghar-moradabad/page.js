
import React from "react";
import Content from "./Content";

// SEO METADATA – Female Gynaecologist near Katghar, Moradabad
export const metadata = {
  title:
    "Female Gynaecologist near Katghar Moradabad – Dr. Priyanka Pachauri",

  description:
    "Need a female gynaecologist near Katghar, Moradabad? Dr. Priyanka Pachauri offers pregnancy care, PCOS treatment, IVF, normal delivery and 3D laparoscopy. Call to book.",

  keywords: [
    "female gynaecologist near Katghar Moradabad",
    "female gynaecologist in Moradabad",
    "lady gynaecologist near me",
    "gynaecologist near Katghar",
    "women's doctor Katghar Moradabad",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "pregnancy doctor Moradabad",
    "PCOS treatment Moradabad",
    "IVF centre Moradabad",
    "fertility specialist Moradabad",
    "laparoscopic surgeon Moradabad",
    "normal delivery Moradabad",
    "women's health clinic Moradabad",
    "female doctor for periods problem",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/female-gynaecologist-near-katghar-moradabad",
  },

  openGraph: {
    title:
      "Female Gynaecologist near Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Need a female gynaecologist near Katghar, Moradabad? Dr. Priyanka Pachauri offers pregnancy care, PCOS treatment, IVF, normal delivery and 3D laparoscopy. Call to book.",

    url: "https://www.gynaecologistmoradabad.com/female-gynaecologist-near-katghar-moradabad",

    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Female Gynaecologist near Katghar Moradabad – Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Female Gynaecologist near Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Dr. Priyanka Pachauri offers pregnancy care, PCOS treatment, IVF, normal delivery and 3D laparoscopy near Katghar, Moradabad.",

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
