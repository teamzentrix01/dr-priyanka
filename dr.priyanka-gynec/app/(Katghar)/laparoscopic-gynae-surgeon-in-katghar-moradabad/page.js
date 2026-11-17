
import React from "react";
import Content from "./Content";

// SEO METADATA – Laparoscopic Gynae Surgeon in Katghar, Moradabad
export const metadata = {
  title:
    "Laparoscopic Gynae Surgeon in Katghar Moradabad – Dr. Priyanka Pachauri",

  description:
    "Looking for a laparoscopic gynae surgeon in Katghar, Moradabad? Dr. Priyanka Pachauri offers 3D keyhole surgery for cysts, fibroids, endometriosis, hysterectomy and more.",

  keywords: [
    "laparoscopic gynae surgeon in Katghar Moradabad",
    "laparoscopic surgeon Moradabad",
    "3D laparoscopy Moradabad",
    "keyhole surgery gynaecology Moradabad",
    "laparoscopic hysterectomy Moradabad",
    "laparoscopic myomectomy Moradabad",
    "laparoscopic cystectomy Moradabad",
    "endometriosis surgery Moradabad",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "fibroid surgery Moradabad",
    "ovarian cyst removal Moradabad",
    "hysteroscopy Moradabad",
    "laparoscopic sterilization Moradabad",
    "minimally invasive gynaecological surgery",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/laparoscopic-gynae-surgeon-in-katghar-moradabad",
  },

  openGraph: {
    title:
      "Laparoscopic Gynae Surgeon in Katghar Moradabad – Dr. Priyanka Pachauri",
    description:
      "Explore minimally invasive gynaecological surgery options, including laparoscopic procedures for cysts, fibroids and endometriosis with Dr. Priyanka Pachauri.",
    url: "https://www.gynaecologistmoradabad.com/laparoscopic-gynae-surgeon-in-katghar-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Laparoscopic Gynae Surgeon in Katghar, Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Laparoscopic Gynae Surgeon in Katghar Moradabad – Dr. Priyanka Pachauri",
    description:
      "3D keyhole gynaecological surgery options for cysts, fibroids and other conditions in Moradabad.",
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
