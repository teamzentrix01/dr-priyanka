import React from "react";
import Content from "./Content";

// SEO METADATA – ENDOMETRIOSIS TREATMENT IN MORADABAD
export const metadata = {
  title: "Endometriosis Treatment in Moradabad | Dr. Priyanka Gynaec",

  description:
    "Advanced endometriosis treatment in Moradabad with 3D laparoscopic excision for pain relief & fertility preservation. Expert care by Dr. Priyanka Gynaec.",

  keywords: [
    "endometriosis treatment Moradabad",
    "endometriosis doctor Moradabad",
    "endometriosis surgery Moradabad",
    "best Gynaecologist for endometriosis",
    "pelvic pain treatment Moradabad",
    "endometriosis and infertility",
    "laparoscopic excision surgery",
    "endometriosis specialist Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/endometriosis-treatment-in-moradabad",
  },

  openGraph: {
    title: "Endometriosis Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Advanced endometriosis treatment in Moradabad with 3D laparoscopic excision for pain relief & fertility preservation. Expert care by Dr. Priyanka Gynaec.",
    url: "https://www.gynaecologistmoradabad.com/endometriosis-treatment-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Endometriosis Treatment in Moradabad | Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Endometriosis Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Advanced endometriosis treatment in Moradabad with 3D laparoscopic excision for pain relief & fertility preservation. Expert care by Dr. Priyanka Gynaec.",
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