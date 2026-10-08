import React from "react";
import Content from "./Content";

// SEO METADATA – MATERNITY DOCTOR NEAR ME IN MORADABAD | DR. PRIYANKA
export const metadata = {
  title: "Maternity Doctor Near Me in Moradabad | Dr. Priyanka",
  description:
    "Looking for a maternity doctor near you in Moradabad? Contact Dr. Priyanka Pachauri for pregnancy consultations and maternity care guidance.",
  keywords: [
    "maternity doctor near me",
    "maternity doctor near me Moradabad",
    "maternity doctor Moradabad",
    "pregnancy doctor near me Moradabad",
    "maternity specialist Moradabad",
    "antenatal care Moradabad",
    "delivery doctor Moradabad",
    "pregnancy consultation Moradabad",
    "gynaecologist near me Moradabad",
    "Dr. Priyanka Pachauri"
  ],
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/maternity-doctor-near-me",
  },
  openGraph: {
    title: "Maternity Doctor Near Me in Moradabad | Dr. Priyanka",
    description:
      "Looking for a maternity doctor near you in Moradabad? Contact Dr. Priyanka Pachauri for pregnancy consultations and maternity care guidance.",
    url: "https://www.gynaecologistmoradabad.com/maternity-doctor-near-me",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Maternity Doctor Near Me in Moradabad | Dr. Priyanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Maternity Doctor Near Me in Moradabad | Dr. Priyanka",
    description:
      "Looking for a maternity doctor near you in Moradabad? Contact Dr. Priyanka Pachauri for pregnancy consultations and maternity care guidance.",
    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
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