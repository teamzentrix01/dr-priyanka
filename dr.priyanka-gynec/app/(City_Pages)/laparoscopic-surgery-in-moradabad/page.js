import React from "react";
import Content from "./Content";

// SEO METADATA – LAPAROSCOPIC SURGERY IN MORADABAD
export const metadata = {
  title: "Laparoscopic Surgery in Moradabad | Dr. Priyanka Gynaec",

  description:
    "Advanced 3D laparoscopic surgery in Moradabad for fibroids, cysts, endometriosis & hysterectomy. Minimally invasive, fast recovery. Book with Dr. Priyanka Gynaec.",

  keywords: [
    "laparoscopic surgery in Moradabad",
    "laparoscopy doctor in Moradabad",
    "best laparoscopic surgeon Moradabad",
    "laparoscopic surgery for fibroids",
    "laparoscopic hysterectomy Moradabad",
    "keyhole surgery Moradabad",
    "gynae laparoscopy Moradabad",
    "laparoscopic cyst removal",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/laparoscopic-surgery-in-moradabad",
  },

  openGraph: {
    title: "Laparoscopic Surgery in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Advanced 3D laparoscopic surgery in Moradabad for fibroids, cysts, endometriosis & hysterectomy. Minimally invasive, fast recovery. Book with Dr. Priyanka Gynaec.",
    url: "https://www.gynaecologistmoradabad.com/laparoscopic-surgery-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Laparoscopic Surgery in Moradabad | Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Laparoscopic Surgery in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Advanced 3D laparoscopic surgery in Moradabad for fibroids, cysts, endometriosis & hysterectomy. Minimally invasive, fast recovery. Book with Dr. Priyanka Gynaec.",
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