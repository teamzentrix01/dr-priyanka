import React from "react";
import Content from "./Content";

// SEO METADATA – MATERNITY DOCTOR IN MORADABAD | DR. PRIYANKA PACHAURI
export const metadata = {
  title: "Maternity Doctor in Moradabad | Dr. Priyanka Pachauri",
  description:
    "Consult Dr. Priyanka Pachauri in Moradabad for maternity care, pregnancy guidance, antenatal consultations and delivery planning.",
  keywords: [
    "maternity doctor",
    "maternity doctor Moradabad",
    "pregnancy doctor Moradabad",
    "maternity specialist Moradabad",
    "antenatal care doctor Moradabad",
    "delivery doctor Moradabad",
    "normal delivery doctor Moradabad",
    "postnatal care Moradabad",
    "gynaecologist Moradabad",
    "Dr. Priyanka Pachauri"
  ],
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/maternity-doctor",
  },
  openGraph: {
    title: "Maternity Doctor in Moradabad | Dr. Priyanka Pachauri",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad for maternity care, pregnancy guidance, antenatal consultations and delivery planning.",
    url: "https://www.gynaecologistmoradabad.com/maternity-doctor",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Maternity Doctor in Moradabad | Dr. Priyanka Pachauri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Maternity Doctor in Moradabad | Dr. Priyanka Pachauri",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad for maternity care, pregnancy guidance, antenatal consultations and delivery planning.",
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