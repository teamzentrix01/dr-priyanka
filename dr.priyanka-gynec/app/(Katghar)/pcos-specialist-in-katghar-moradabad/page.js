
import React from "react";
import Content from "./Content";

// SEO METADATA – PCOS Specialist in Katghar, Moradabad
export const metadata = {
  title: "PCOS Specialist in Katghar Moradabad – Dr. Priyanka Pachauri",

  description:
    "Looking for a PCOS specialist in Katghar, Moradabad? Dr. Priyanka Pachauri offers personalised PCOS treatment for irregular periods, weight, acne and fertility. Book today.",

  keywords: [
    "PCOS specialist in Katghar Moradabad",
    "PCOS treatment Moradabad",
    "PCOD doctor Moradabad",
    "PCOS and infertility Moradabad",
    "irregular periods treatment Moradabad",
    "ovulation induction Moradabad",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "fertility specialist Moradabad",
    "IVF centre Moradabad",
    "PCOS diet and lifestyle",
    "PCOS weight loss guidance",
    "PCOS pregnancy",
    "hirsutism and acne PCOS",
    "lady doctor for PCOS",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/pcos-specialist-in-katghar-moradabad",
  },

  openGraph: {
    title: "PCOS Specialist in Katghar Moradabad – Dr. Priyanka Pachauri",
    description:
      "Personalised PCOS care in Katghar, Moradabad for irregular periods, weight management, acne and fertility concerns with Dr. Priyanka Pachauri.",
    url: "https://www.gynaecologistmoradabad.com/pcos-specialist-in-katghar-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – PCOS Specialist in Katghar, Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PCOS Specialist in Katghar Moradabad – Dr. Priyanka Pachauri",
    description:
      "Personalised PCOS care for menstrual, weight, acne and fertility concerns in Moradabad.",
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
