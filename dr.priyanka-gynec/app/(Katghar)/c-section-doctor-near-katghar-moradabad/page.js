
import React from "react";
import Content from "./Content";

// SEO METADATA – C-Section Doctor near Katghar, Moradabad
export const metadata = {
  title:
    "C-Section Doctor near Katghar Moradabad – Dr. Priyanka Pachauri",

  description:
    "Need a C-section doctor near Katghar, Moradabad? Dr. Priyanka Pachauri offers safe caesarean care when medically needed, plus antenatal care, 3D/4D ultrasound and recovery support.",

  keywords: [
    "C-section doctor near Katghar Moradabad",
    "caesarean delivery doctor Moradabad",
    "C-section specialist Moradabad",
    "caesarean section Katghar",
    "cesarean delivery Moradabad",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "pregnancy and birthing care Moradabad",
    "antenatal care Moradabad",
    "high-risk pregnancy doctor Moradabad",
    "lady doctor for delivery",
    "C-section recovery tips",
    "repeat caesarean Moradabad",
    "safe motherhood Moradabad",
    "maternity care Moradabad",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/c-section-doctor-near-katghar-moradabad",
  },

  openGraph: {
    title:
      "C-Section Doctor near Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Need a C-section doctor near Katghar, Moradabad? Dr. Priyanka Pachauri offers safe caesarean care when medically needed, plus antenatal care, 3D/4D ultrasound and recovery support.",

    url: "https://www.gynaecologistmoradabad.com/c-section-doctor-near-katghar-moradabad",

    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "C-Section Doctor near Katghar Moradabad – Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "C-Section Doctor near Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Dr. Priyanka Pachauri offers caesarean care when medically needed, antenatal care, 3D/4D ultrasound and recovery support in Moradabad.",

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
