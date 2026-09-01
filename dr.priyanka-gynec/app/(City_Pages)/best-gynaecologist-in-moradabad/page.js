import React from "react";
import Content from "./Content";

// SEO METADATA – BEST GYNAECOLOGIST IN MORADABAD
export const metadata = {
  title: "Best Gynaecologist in Moradabad | Dr. Priyanka Gynaec",

  description:
    "Dr. Priyanka Gynaec is a trusted gynaecologist in Moradabad offering advanced gynaecology, 3D laparoscopy, fertility & IVF, high-risk pregnancy management, and personalized women's healthcare.",

  keywords: [
    "best gynaecologist in moradabad",
    "gynaecologist in moradabad",
    "gynaecologist moradabad",
    "best gynaecologist moradabad",
    "gynaecologist near me moradabad",
    "female gynaecologist moradabad",
    "IVF specialist moradabad",
    "fertility treatment moradabad",
    "laparoscopic surgeon moradabad",
    "high-risk pregnancy moradabad",
    "antenatal care moradabad",
    "menstrual disorder treatment moradabad",
    "endometriosis treatment moradabad",
    "Dr. Priyanka Pachauri",
    "Dr. Priyanka Gynaec",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/best-gynaecologist-in-moradabad",
  },

  openGraph: {
    title: "Best Gynaecologist in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Dr. Priyanka Gynaec is a trusted gynaecologist in Moradabad offering advanced gynaecology, 3D laparoscopy, fertility & IVF, high-risk pregnancy management, and personalized women's healthcare.",
    url: "https://www.gynaecologistmoradabad.com/best-gynaecologist-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg ",
        width: 1200,
        height: 630,
        alt: "Best Gynaecologist in Moradabad | Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Best Gynaecologist in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Trusted gynaecologist in Moradabad for advanced gynaecology, 3D laparoscopy, fertility & IVF, and high-risk pregnancy care.",
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