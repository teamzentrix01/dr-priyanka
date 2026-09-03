import React from "react";
import Content from "./Content";

// SEO METADATA – IVF TREATMENT IN MORADABAD
export const metadata = {
  title: "IVF Treatment in Moradabad | Best IVF Center - Dr. Priyanka Gynaec",

  description:
    "Looking for IVF treatment in Moradabad? Dr. Priyanka Gynaec offers advanced IVF, time-lapse embryo monitoring & personalized fertility care. Book now.",

  keywords: [
    "IVF treatment in Moradabad",
    "IVF center in Moradabad",
    "best IVF doctor in Moradabad",
    "fertility treatment Moradabad",
    "IVF clinic near me",
    "infertility treatment Moradabad",
    "test tube baby center Moradabad",
    "IVF cost in Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/ivf-treatment-in-moradabad",
  },

  openGraph: {
    title: "IVF Treatment in Moradabad | Best IVF Center - Dr. Priyanka Gynaec",
    description:
      "Looking for IVF treatment in Moradabad? Dr. Priyanka Gynaec offers advanced IVF, time-lapse embryo monitoring & personalized fertility care. Book now.",
    url: "https://www.gynaecologistmoradabad.com/ivf-treatment-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "IVF Treatment in Moradabad | Best IVF Center - Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "IVF Treatment in Moradabad | Best IVF Center - Dr. Priyanka Gynaec",
    description:
      "Looking for IVF treatment in Moradabad? Dr. Priyanka Gynaec offers advanced IVF, time-lapse embryo monitoring & personalized fertility care. Book now.",
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