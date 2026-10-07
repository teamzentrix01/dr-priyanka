import React from "react";
import Content from "./Content";

export const metadata = {
  title: "Gynaecologist Clinic in Moradabad Near Me | Dr. Priyanka",
  description:
    "Find Dr. Priyanka Gynaec in Gandhi Nagar, Moradabad for gynaecological consultation and care.",
  keywords: [
    "gynaecologist clinic in moradabad near me",
    "gynaecologist near me Moradabad",
    "lady gynaecologist clinic Moradabad",
    "women's health clinic Moradabad",
    "female gynaecologist Moradabad",
    "gynaecologist Gandhi Nagar Moradabad",
    "gynaecology consultation Moradabad",
    "gynaecologist appointment Moradabad",
    "Dr. Priyanka Pachauri",
    "gynaecologist clinic near Old Roadways Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/gynaecologist-clinic-in-moradabad-near-me",
  },
  openGraph: {
    title: "Gynaecologist Clinic in Moradabad Near Me | Dr. Priyanka",
    description:
      "Find Dr. Priyanka Gynaec in Gandhi Nagar, Moradabad for gynaecological consultation and care.",
    url: "https://www.gynaecologistmoradabad.com/gynaecologist-clinic-in-moradabad-near-me",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Gynaecologist clinic in Moradabad | Dr. Priyanka Pachauri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Gynaecologist Clinic in Moradabad Near Me | Dr. Priyanka",
    description:
      "Find Dr. Priyanka Gynaec in Gandhi Nagar, Moradabad for gynaecological consultation and care.",
    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

const Page = () => {
  return (
    <div>
      <Content />
    </div>
  );
};

export default Page;
