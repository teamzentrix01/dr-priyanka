
import React from "react";
import Content from "./Content";

// SEO METADATA – Female Gynaecologist near Rampur
export const metadata = {
  title:
    "Female Gynaecologist near Rampur – Preventive Women's Health Care",

  description:
    "Female gynaecologist near Rampur: learn which check-ups women need at each age. Consult Dr. Priyanka Pachauri, Moradabad, for preventive care, pregnancy and fertility.",

  keywords: [
    "female gynaecologist near Rampur",
    "preventive women's health check-up",
    "yearly gynaecology check-up",
    "women's health screening",
    "Pap smear check-up",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "female doctor for women's health",
    "women's health checklist by age",
    "lady gynaecologist near Rampur",
    "PCOS check-up",
    "pregnancy planning consultation",
    "menopause check-up",
    "women's clinic Moradabad",
    "healthy habits for women",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/female-gynaecologist-near-rampur",
  },

  openGraph: {
    title:
      "Female Gynaecologist near Rampur – Preventive Women's Health Care",
    description:
      "Learn about age-appropriate women's health check-ups and preventive care. Consult Dr. Priyanka Pachauri in Moradabad for pregnancy and fertility care.",
    url: "https://www.gynaecologistmoradabad.com/female-gynaecologist-near-rampur",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Female Gynaecologist near Rampur",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Female Gynaecologist near Rampur – Preventive Women's Health Care",
    description:
      "Women's preventive health check-ups, pregnancy care and fertility consultations with Dr. Priyanka Pachauri in Moradabad.",
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
