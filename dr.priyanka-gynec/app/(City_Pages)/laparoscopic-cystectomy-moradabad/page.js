import React from "react";
import Content from "./Content";

// SEO METADATA – LAPAROSCOPIC CYSTECTOMY IN MORADABAD
export const metadata = {
  title: "Laparoscopic Cystectomy In Moradabad | Dr. Priyanka Pachauri",

  description:
    "Laparoscopic cystectomy in Moradabad by Dr. Priyanka Pachauri offers safe, minimally invasive ovarian cyst removal with fertility preserving surgical care.",

  keywords: [
    "laparoscopic cystectomy Moradabad",
    "ovarian cyst removal Moradabad",
    "best gynaecologist Moradabad",
    "laparoscopic surgeon Moradabad",
    "ovarian cyst surgery",
    "dermoid cyst removal",
    "endometrioma surgery",
    "keyhole ovarian surgery",
    "Dr Priyanka Pachauri",
    "fertility preserving cyst surgery",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/laparoscopic-cystectomy-in-moradabad",
  },

  openGraph: {
    title: "Laparoscopic Cystectomy In Moradabad | Dr. Priyanka Pachauri",
    description:
      "Laparoscopic cystectomy in Moradabad by Dr. Priyanka Pachauri offers safe, minimally invasive ovarian cyst removal with fertility preserving surgical care.",
    url: "https://www.gynaecologistmoradabad.com/laparoscopic-cystectomy-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Laparoscopic Cystectomy In Moradabad | Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Laparoscopic Cystectomy In Moradabad | Dr. Priyanka Pachauri",
    description:
      "Laparoscopic cystectomy in Moradabad by Dr. Priyanka Pachauri offers safe, minimally invasive ovarian cyst removal with fertility preserving surgical care.",
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