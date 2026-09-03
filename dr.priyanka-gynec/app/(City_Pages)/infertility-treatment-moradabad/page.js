import React from "react";
import Content from "./Content";

// SEO METADATA – INFERTILITY TREATMENT IN MORADABAD
export const metadata = {
  title: "Infertility Treatment in Moradabad | Dr. Priyanka Gynaec",

  description:
    "Advanced infertility treatment in Moradabad by Dr. Priyanka Gynaec. Personalized IVF, IUI & fertility care with AI-based diagnostics. Book your consultation today.",

  keywords: [
    "infertility treatment Moradabad",
    "IVF centre Moradabad",
    "best fertility doctor Moradabad",
    "IUI treatment Moradabad",
    "infertility specialist Moradabad",
    "female infertility treatment",
    "male infertility treatment Moradabad",
    "PCOS infertility treatment",
    "fertility clinic Moradabad",
    "Dr Priyanka Gynaec",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/infertility-treatment-in-moradabad",
  },

  openGraph: {
    title: "Infertility Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Advanced infertility treatment in Moradabad by Dr. Priyanka Gynaec. Personalized IVF, IUI & fertility care with AI-based diagnostics. Book your consultation today.",
    url: "https://www.gynaecologistmoradabad.com/infertility-treatment-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Infertility Treatment in Moradabad | Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Infertility Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Advanced infertility treatment in Moradabad by Dr. Priyanka Gynaec. Personalized IVF, IUI & fertility care with AI-based diagnostics. Book your consultation today.",
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