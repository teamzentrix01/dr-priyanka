import React from "react";
import Content from "./Content";

// SEO METADATA – MORADABAD DELIVERY SPECIALIST SERVICES | DR. PRIYANKA
export const metadata = {
  title: "Moradabad Delivery Specialist Services | Dr. Priyanka",
  description:
    "Learn about pregnancy and delivery consultations with Dr. Priyanka Pachauri in Moradabad, including birth planning and maternity guidance.",
  keywords: [
    "Moradabad delivery specialist services",
    "delivery specialist Moradabad",
    "normal delivery care Moradabad",
    "C-section consultation Moradabad",
    "pregnancy delivery planning Moradabad",
    "labor care Moradabad",
    "antenatal consultation Moradabad",
    "maternity services Moradabad",
    "gynaecologist delivery services Moradabad",
    "Dr. Priyanka Pachauri"
  ],
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/moradabad-delivery-specialist-services",
  },
  openGraph: {
    title: "Moradabad Delivery Specialist Services | Dr. Priyanka",
    description:
      "Learn about pregnancy and delivery consultations with Dr. Priyanka Pachauri in Moradabad, including birth planning and maternity guidance.",
    url: "https://www.gynaecologistmoradabad.com/moradabad-delivery-specialist-services",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Moradabad Delivery Specialist Services | Dr. Priyanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Moradabad Delivery Specialist Services | Dr. Priyanka",
    description:
      "Learn about pregnancy and delivery consultations with Dr. Priyanka Pachauri in Moradabad, including birth planning and maternity guidance.",
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