import React from "react";
import Content from "./Content";

// SEO METADATA – MENSTRUAL DISORDER TREATMENT IN MORADABAD
export const metadata = {
  title: "Menstrual Disorder Treatment in Moradabad | Dr. Priyanka Gynaec",

  description:
    "Effective menstrual disorder treatment in Moradabad by Dr. Priyanka Gynaec. Expert care for irregular periods, heavy bleeding, PCOS & painful cycles. Book now.",

  keywords: [
    "menstrual disorder treatment Moradabad",
    "irregular periods treatment Moradabad",
    "heavy bleeding doctor Moradabad",
    "PCOS treatment Moradabad",
    "painful periods treatment",
    "menstrual problems Gynaecologist Moradabad",
    "best doctor for periods problem Moradabad",
    "amenorrhea treatment",
    "Dr Priyanka Gynaec",
    "women's health Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/menstrual-disorder-treatment-in-moradabad",
  },

  openGraph: {
    title: "Menstrual Disorder Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Effective menstrual disorder treatment in Moradabad by Dr. Priyanka Gynaec. Expert care for irregular periods, heavy bleeding, PCOS & painful cycles. Book now.",
    url: "https://www.gynaecologistmoradabad.com/menstrual-disorder-treatment-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Menstrual Disorder Treatment in Moradabad | Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Menstrual Disorder Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Effective menstrual disorder treatment in Moradabad by Dr. Priyanka Gynaec. Expert care for irregular periods, heavy bleeding, PCOS & painful cycles. Book now.",
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