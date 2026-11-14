
import React from "react";
import Content from "./Content";

// SEO METADATA – Women's Health Clinic in Civil Lines
export const metadata = {
  title: "Women's Health Clinic in Civil Lines, Moradabad | Dr. Priyanka Pachauri",

  description:
    "Looking for a women's health clinic in Civil Lines, Moradabad? Dr. Priyanka Pachauri offers pregnancy care, fertility and IVF, 3D laparoscopy, PCOS and period treatment under one roof. Book your visit today.",

  keywords: [
    "women's health clinic in Civil Lines Moradabad",
    "women's health clinic Moradabad",
    "gynaecology clinic Moradabad",
    "gynaecologist near Civil Lines",
    "Dr. Priyanka Pachauri",
    "pregnancy care Moradabad",
    "fertility and IVF Moradabad",
    "laparoscopic surgery Moradabad",
    "PCOS treatment Moradabad",
    "menstrual disorder treatment Moradabad",
    "hysteroscopy Moradabad",
    "antenatal care Moradabad",
    "best lady doctor in Moradabad",
    "paediatric care Moradabad",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/womens-health-clinic-in-civil-lines-moradabad",
  },

  openGraph: {
    title:
      "Women's Health Clinic in Civil Lines, Moradabad | Dr. Priyanka Pachauri",
    description:
      "Looking for a women's health clinic in Civil Lines, Moradabad? Dr. Priyanka Pachauri offers pregnancy care, fertility and IVF, 3D laparoscopy, PCOS and period treatment under one roof. Book your visit today.",
    url: "https://www.gynaecologistmoradabad.com/womens-health-clinic-in-civil-lines-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Women's Health Clinic in Civil Lines, Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Women's Health Clinic in Civil Lines, Moradabad | Dr. Priyanka Pachauri",
    description:
      "Pregnancy care, fertility and IVF, 3D laparoscopy, PCOS and period treatment at a women's health clinic in Civil Lines, Moradabad.",
    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },

  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Civil Lines, Moradabad",
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
