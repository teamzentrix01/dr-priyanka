import React from "react";
import Content from "./Content";

// SEO METADATA – C-SECTION SURGEON NEAR ME IN MORADABAD | DR. PRIYANKA
export const metadata = {
  title: "C-Section Surgeon Near Me in Moradabad | Dr. Priyanka",
  description:
    "Looking for a C-section specialist near you in Moradabad? Contact Dr. Priyanka Pachauri for a consultation about cesarean delivery and birth planning.",
  keywords: [
    "C-section surgeon near me",
    "C-section surgeon Moradabad",
    "C-section doctor near me Moradabad",
    "cesarean delivery specialist Moradabad",
    "C-section delivery doctor Moradabad",
    "planned C-section consultation Moradabad",
    "maternity specialist Moradabad",
    "delivery surgeon Moradabad",
    "pregnancy doctor Moradabad",
    "Dr. Priyanka Pachauri"
  ],
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/c-section-surgeon-near-me",
  },
  openGraph: {
    title: "C-Section Surgeon Near Me in Moradabad | Dr. Priyanka",
    description:
      "Looking for a C-section specialist near you in Moradabad? Contact Dr. Priyanka Pachauri for a consultation about cesarean delivery and birth planning.",
    url: "https://www.gynaecologistmoradabad.com/c-section-surgeon-near-me",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "C-Section Surgeon Near Me in Moradabad | Dr. Priyanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "C-Section Surgeon Near Me in Moradabad | Dr. Priyanka",
    description:
      "Looking for a C-section specialist near you in Moradabad? Contact Dr. Priyanka Pachauri for a consultation about cesarean delivery and birth planning.",
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