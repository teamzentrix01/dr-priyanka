
import React from "react";
import Content from "./Content";

// SEO METADATA – Postnatal Checkup Doctor in Katghar, Moradabad
export const metadata = {
  title:
    "Postnatal Checkup Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",

  description:
    "Looking for a postnatal checkup doctor in Katghar, Moradabad? Dr. Priyanka Pachauri offers postnatal care, recovery guidance, newborn care and vaccinations. Call to book.",

  keywords: [
    "postnatal checkup doctor in Katghar Moradabad",
    "postnatal care Moradabad",
    "postpartum checkup Katghar",
    "postnatal doctor Moradabad",
    "after delivery checkup Moradabad",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "newborn care Moradabad",
    "postpartum recovery tips",
    "breastfeeding support Moradabad",
    "postpartum depression help",
    "C-section recovery care",
    "normal delivery recovery",
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
      "https://www.gynaecologistmoradabad.com/postnatal-checkup-doctor-in-katghar-moradabad",
  },

  openGraph: {
    title:
      "Postnatal Checkup Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Looking for a postnatal checkup doctor in Katghar, Moradabad? Dr. Priyanka Pachauri offers postnatal care, recovery guidance, newborn care and vaccinations. Call to book.",

    url: "https://www.gynaecologistmoradabad.com/postnatal-checkup-doctor-in-katghar-moradabad",

    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",

    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Postnatal Checkup Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Postnatal Checkup Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",

    description:
      "Dr. Priyanka Pachauri offers postnatal checkups, postpartum recovery guidance, newborn care and vaccination guidance in Moradabad.",

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
