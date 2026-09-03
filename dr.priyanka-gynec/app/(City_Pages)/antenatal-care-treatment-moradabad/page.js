import React from "react";
import Content from "./Content";

// SEO METADATA – ANTENATAL CARE TREATMENT IN MORADABAD
export const metadata = {
  title: "Antenatal Care Treatment in Moradabad | Dr. Priyanka Gynaec",

  description:
    "Complete antenatal care in Moradabad by Dr. Priyanka Gynaec. Regular check-ups, advanced scans & personalized pregnancy guidance for a healthy mother and baby.",

  keywords: [
    "antenatal care treatment Moradabad",
    "antenatal checkup Moradabad",
    "best Gynaecologist for pregnancy care",
    "pregnancy checkup doctor Moradabad",
    "antenatal care specialist Moradabad",
    "prenatal care Moradabad",
    "pregnancy ultrasound Moradabad",
    "antenatal clinic Moradabad",
    "Dr Priyanka Gynaec",
    "women's health Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/antenatal-care-treatment-in-moradabad",
  },

  openGraph: {
    title: "Antenatal Care Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Complete antenatal care in Moradabad by Dr. Priyanka Gynaec. Regular check-ups, advanced scans & personalized pregnancy guidance for a healthy mother and baby.",
    url: "https://www.gynaecologistmoradabad.com/antenatal-care-treatment-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Antenatal Care Treatment in Moradabad | Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Antenatal Care Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Complete antenatal care in Moradabad by Dr. Priyanka Gynaec. Regular check-ups, advanced scans & personalized pregnancy guidance for a healthy mother and baby.",
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