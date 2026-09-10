import React from "react";
import Content from "./Content";

// SEO METADATA – MINIMALLY INVASIVE GYNAE SURGEON MORADABAD
export const metadata = {
  title: "Minimally Invasive Gynae Surgeon in Moradabad | Dr. Priyanka Pachauri",

  description:
    "Looking for a minimally invasive gynae surgeon in Moradabad? Get faster recovery, less scarring and expert keyhole surgery care from Dr. Priyanka Pachauri.",

  keywords: [
    "minimally invasive gynae surgeon Moradabad",
    "best gynaecologist Moradabad",
    "minimally invasive gynaecology Moradabad",
    "keyhole gynae surgery Moradabad",
    "laparoscopic gynae surgeon Moradabad",
    "fibroid surgery Moradabad",
    "Dr. Priyanka Pachauri gynaecologist",
    "ovarian cyst removal Moradabad",
    "hysteroscopy Moradabad",
    "painless surgery gynaecology",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/minimally-invasive-gynae-surgeon-moradabad",
  },

  openGraph: {
    title: "Minimally Invasive Gynae Surgeon in Moradabad | Dr. Priyanka Pachauri",
    description:
      "Looking for a minimally invasive gynae surgeon in Moradabad? Get faster recovery, less scarring and expert keyhole surgery care from Dr. Priyanka Pachauri.",
    url: "https://www.gynaecologistmoradabad.com/minimally-invasive-gynae-surgeon-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Minimally Invasive Gynae Surgeon in Moradabad | Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Minimally Invasive Gynae Surgeon in Moradabad | Dr. Priyanka Pachauri",
    description:
      "Looking for a minimally invasive gynae surgeon in Moradabad? Get faster recovery, less scarring and expert keyhole surgery care from Dr. Priyanka Pachauri.",
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