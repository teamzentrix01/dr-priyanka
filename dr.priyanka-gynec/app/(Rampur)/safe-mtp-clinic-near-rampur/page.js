
import React from "react";
import Content from "./Content";

export const metadata = {
  title:
    "Safe MTP Clinic near Rampur – Dr. Priyanka Pachauri, Moradabad",
  description:
    "Looking for a safe, legal MTP clinic near Rampur? Learn the MTP Act basics, safety checks and how to plan care with Dr. Priyanka Pachauri, Moradabad. Confidential consultation.",
  keywords: [
    "safe MTP clinic near Rampur",
    "MTP doctor near Rampur",
    "medical termination of pregnancy near Rampur",
    "safe abortion near Rampur",
    "legal abortion India",
    "MTP Act India",
    "unwanted pregnancy doctor",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "confidential abortion consultation",
    "post-abortion care",
    "contraception counselling",
    "miscarriage management",
    "women’s health clinic Moradabad",
    "lady doctor for MTP",
  ],
  authors: [{ name: "Dr. Priyanka Gynaec" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/safe-mtp-clinic-near-rampur",
  },
  openGraph: {
    title:
      "Safe MTP Clinic near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Confidential MTP consultation with information about legal requirements, safety checks and planning care in Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/safe-mtp-clinic-near-rampur",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri, gynaecologist in Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Safe MTP Clinic near Rampur – Dr. Priyanka Pachauri, Moradabad",
    description:
      "Confidential MTP consultation covering legal requirements, safety checks and care planning in Moradabad.",
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
