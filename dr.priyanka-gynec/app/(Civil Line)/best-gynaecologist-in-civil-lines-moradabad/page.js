
import React from "react";
import Content from "./Content";

// SEO METADATA – Best Gynaecologist in Civil Lines, Moradabad
export const metadata = {
  title: "Best Gynaecologist in Civil Lines, Moradabad | Dr. Priyanka Pachauri",

  description:
    "Looking for the best gynaecologist in Civil Lines, Moradabad? Dr. Priyanka Pachauri offers pregnancy care, 3D laparoscopy, fertility and IVF, PCOS and menstrual disorder treatment. Book your appointment today.",

  keywords: [
    "best gynaecologist in Civil Lines Moradabad",
    "gynaecologist in Moradabad",
    "best lady doctor in Moradabad",
    "Dr. Priyanka Pachauri",
    "women's health clinic Moradabad",
    "laparoscopic surgeon Moradabad",
    "fertility specialist Moradabad",
    "IVF centre Moradabad",
    "pregnancy care Moradabad",
    "PCOS treatment Moradabad",
    "menstrual disorder treatment Moradabad",
    "normal delivery doctor Moradabad",
    "high-risk pregnancy doctor Moradabad",
    "gynaecologist near Civil Lines",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/best-gynaecologist-in-civil-lines-moradabad",
  },

  openGraph: {
    title: "Best Gynaecologist in Civil Lines, Moradabad | Dr. Priyanka Pachauri",

    description:
      "Looking for the best gynaecologist in Civil Lines, Moradabad? Dr. Priyanka Pachauri offers pregnancy care, 3D laparoscopy, fertility and IVF, PCOS and menstrual disorder treatment. Book your appointment today.",

    url: "https://www.gynaecologistmoradabad.com/best-gynaecologist-in-civil-lines-moradabad",

    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Best Gynaecologist in Civil Lines, Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Best Gynaecologist in Civil Lines, Moradabad | Dr. Priyanka Pachauri",

    description:
      "Dr. Priyanka Pachauri offers pregnancy care, 3D laparoscopy, fertility and IVF, PCOS and menstrual disorder treatment in Moradabad.",

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
