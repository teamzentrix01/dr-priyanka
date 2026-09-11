import React from "react";
import Content from "./Content";


// SEO METADATA – DR. PACHAURI GYNAECOLOGIST MORADABAD
export const metadata = {
  title: "Dr. Pachauri Gynaecologist Moradabad | Dr. Priyanka Pachauri – Fertility & Laparoscopy Expert",

  description:
    "Meet Dr. Priyanka Pachauri, a leading gynaecologist in Moradabad specializing in 3D laparoscopy, IVF, and high-risk pregnancy care. Read her profile, services, and how to book a consultation by call, WhatsApp, or online.",

  keywords: [
    "Dr. Pachauri gynaecologist Moradabad",
    "Dr. Priyanka Pachauri",
    "Dr. Priyanka Gynaec",
    "best gynaecologist Moradabad",
    "laparoscopic surgeon Moradabad",
    "IVF specialist Moradabad",
    "fertility doctor Moradabad",
    "pregnancy doctor Moradabad",
    "PCOS specialist Moradabad",
    "women's doctor Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/dr-pachauri-gynaecologist-moradabad",
  },

  openGraph: {
    title: "Dr. Pachauri Gynaecologist Moradabad | Dr. Priyanka Pachauri – Fertility & Laparoscopy Expert",
    description:
      "Meet Dr. Priyanka Pachauri, a leading gynaecologist in Moradabad specializing in 3D laparoscopy, IVF, and high-risk pregnancy care. Read her profile, services, and how to book a consultation by call, WhatsApp, or online.",
    url: "https://www.gynaecologistmoradabad.com/dr-pachauri-gynaecologist-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Pachauri Gynaecologist Moradabad | Dr. Priyanka Pachauri – Fertility & Laparoscopy Expert",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Dr. Pachauri Gynaecologist Moradabad | Dr. Priyanka Pachauri – Fertility & Laparoscopy Expert",
    description:
      "Meet Dr. Priyanka Pachauri, a leading gynaecologist in Moradabad specializing in 3D laparoscopy, IVF, and high-risk pregnancy care. Read her profile, services, and how to book a consultation by call, WhatsApp, or online.",
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