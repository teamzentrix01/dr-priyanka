import React from "react";
import Content from "./Content";

// SEO METADATA – PAEDIATRIC VACCINATION TREATMENT IN MORADABAD
export const metadata = {
  title: "Paediatric Vaccination Treatment In Moradabad | Dr. Priyanka Pachauri",

  description:
    "Paediatric vaccination treatment in Moradabad by Dr. Priyanka Pachauri offers safe, IAP recommended immunization with cold chain storage for children.",

  keywords: [
    "paediatric vaccination Moradabad",
    "child vaccination Moradabad",
    "newborn vaccination Moradabad",
    "best pediatrician Moradabad",
    "IAP vaccination schedule",
    "infant immunization Moradabad",
    "child healthcare Moradabad",
    "Dr Priyanka Pachauri",
    "newborn care Moradabad",
    "pediatric consultation Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/paediatric-vaccination-treatment-in-moradabad",
  },

  openGraph: {
    title: "Paediatric Vaccination Treatment In Moradabad | Dr. Priyanka Pachauri",
    description:
      "Paediatric vaccination treatment in Moradabad by Dr. Priyanka Pachauri offers safe, IAP recommended immunization with cold chain storage for children.",
    url: "https://www.gynaecologistmoradabad.com/paediatric-vaccination-treatment-in-moradabad",
    siteName: "Dr. Priyanka Pachauri",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Paediatric Vaccination Treatment In Moradabad | Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaPachauri",
    title: "Paediatric Vaccination Treatment In Moradabad | Dr. Priyanka Pachauri",
    description:
      "Paediatric vaccination treatment in Moradabad by Dr. Priyanka Pachauri offers safe, IAP recommended immunization with cold chain storage for children.",
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