
import React from "react";
import Content from "./Content";

// SEO METADATA – Women's Clinic in Katghar, Moradabad
export const metadata = {
  title: "Women’s Clinic in Katghar Moradabad – Dr. Priyanka Pachauri",

  description:
    "Find a women’s clinic for Katghar, Moradabad. Dr. Priyanka Pachauri offers gynaecology, pregnancy care, IVF and 3D laparoscopy with privacy and respect. Book today.",

  keywords: [
    "women’s clinic in Katghar Moradabad",
    "women’s health clinic Katghar",
    "gynaecology clinic Moradabad",
    "Dr. Priyanka Pachauri",
    "women’s clinic near me",
    "lady doctor clinic Moradabad",
    "fertility and IVF clinic Moradabad",
    "antenatal care Moradabad",
    "laparoscopic surgery Moradabad",
    "PCOS clinic Moradabad",
    "maternity care Moradabad",
    "women’s healthcare Katghar",
    "private women’s clinic",
    "paediatric care Moradabad",
    "gynaecologist in Moradabad",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/womens-clinic-in-katghar-moradabad",
  },

  openGraph: {
    title: "Women’s Clinic in Katghar Moradabad – Dr. Priyanka Pachauri",
    description:
      "Find women's healthcare, gynaecology and pregnancy care with Dr. Priyanka Pachauri in Katghar, Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/womens-clinic-in-katghar-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Women’s Clinic in Katghar, Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Women’s Clinic in Katghar Moradabad – Dr. Priyanka Pachauri",
    description:
      "Gynaecology, pregnancy care and women's healthcare in Katghar, Moradabad.",
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
