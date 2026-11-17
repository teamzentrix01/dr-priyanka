
import React from "react";
import Content from "./Content";

// SEO METADATA – Antenatal Checkup Doctor in Katghar, Moradabad
export const metadata = {
  title:
    "Antenatal Checkup Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",

  description:
    "Looking for an antenatal checkup doctor in Katghar, Moradabad? Dr. Priyanka Pachauri offers trimester-wise pregnancy care, 3D/4D ultrasound, high-risk care and normal delivery.",

  keywords: [
    "antenatal checkup doctor in Katghar Moradabad",
    "antenatal care Moradabad",
    "pregnancy checkup doctor Katghar",
    "pregnancy doctor in Moradabad",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "antenatal clinic Moradabad",
    "high-risk pregnancy doctor Moradabad",
    "normal delivery doctor Moradabad",
    "3D 4D ultrasound Moradabad",
    "prenatal care Moradabad",
    "trimester pregnancy guide",
    "best gynaecologist for pregnancy Moradabad",
    "lady doctor for pregnancy",
    "maternity care Moradabad",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/antenatal-checkup-doctor-in-katghar-moradabad",
  },

  openGraph: {
    title:
      "Antenatal Checkup Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Looking for an antenatal checkup doctor in Katghar, Moradabad? Dr. Priyanka Pachauri offers trimester-wise pregnancy care, 3D/4D ultrasound, high-risk care and normal delivery.",

    url: "https://www.gynaecologistmoradabad.com/antenatal-checkup-doctor-in-katghar-moradabad",

    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Antenatal Checkup Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Antenatal Checkup Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Dr. Priyanka Pachauri offers trimester-wise pregnancy care, 3D/4D ultrasound, high-risk pregnancy care and normal delivery in Moradabad.",

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
