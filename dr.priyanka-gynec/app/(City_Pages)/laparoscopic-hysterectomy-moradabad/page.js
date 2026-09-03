import React from "react";
import Content from "./Content";

// SEO METADATA – LAPAROSCOPIC HYSTERECTOMY IN MORADABAD
export const metadata = {
  title: "Laparoscopic Hysterectomy in Moradabad | Dr. Priyanka Gynaec",

  description:
    "Safe, minimally invasive laparoscopic hysterectomy in Moradabad with fast recovery & advanced 3D technology. Expert care by Dr. Priyanka Gynaec. Book today.",

  keywords: [
    "laparoscopic hysterectomy Moradabad",
    "hysterectomy surgery Moradabad",
    "best hysterectomy doctor Moradabad",
    "keyhole hysterectomy Moradabad",
    "uterus removal surgery Moradabad",
    "minimally invasive hysterectomy",
    "laparoscopic surgeon Moradabad",
    "painless hysterectomy Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/laparoscopic-hysterectomy-in-moradabad",
  },

  openGraph: {
    title: "Laparoscopic Hysterectomy in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Safe, minimally invasive laparoscopic hysterectomy in Moradabad with fast recovery & advanced 3D technology. Expert care by Dr. Priyanka Gynaec. Book today.",
    url: "https://www.gynaecologistmoradabad.com/laparoscopic-hysterectomy-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Laparoscopic Hysterectomy in Moradabad | Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Laparoscopic Hysterectomy in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Safe, minimally invasive laparoscopic hysterectomy in Moradabad with fast recovery & advanced 3D technology. Expert care by Dr. Priyanka Gynaec. Book today.",
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
