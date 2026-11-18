
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Postnatal Care Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",

  description:
    "Looking for a postnatal care doctor near Rampur? Dr. Priyanka Pachauri, Moradabad, offers recovery care, breastfeeding support, newborn care and vaccinations. Book a visit.",

  keywords: [
    "postnatal care doctor near Rampur",
    "postpartum checkup near Rampur",
    "after delivery checkup Rampur",
    "postnatal doctor near Rampur",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "newborn care Moradabad",
    "breastfeeding support",
    "postpartum recovery tips",
    "C-section recovery care",
    "normal delivery recovery",
    "postnatal depression help",
    "baby vaccination Moradabad",
    "paediatric care Moradabad",
    "lady doctor for postnatal care",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/postnatal-care-doctor-near-rampur",
  },

  openGraph: {
    title:
      "Postnatal Care Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Learn about post-delivery recovery consultations and postnatal support with Dr. Priyanka Pachauri in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/postnatal-care-doctor-near-rampur",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Gynaecologist in Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Postnatal Care Doctor near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Explore postnatal recovery consultations and maternal care in Moradabad with Dr. Priyanka Pachauri.",
    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },

  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Rampur, Uttar Pradesh",
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
