import React from "react";
import Content from "./Content";

// SEO METADATA – TOP RATED GYNAECOLOGIST MORADABAD
export const metadata = {
  title: "Top Rated Gynaecologist in Moradabad | Dr. Priyanka Pachauri",

  description:
    "Looking for the top rated gynaecologist in Moradabad? Dr. Priyanka Pachauri offers expert gynaecology, pregnancy, IVF & laparoscopy care. Call +91 90797 65578.",

  keywords: [
    "top rated gynaecologist Moradabad",
    "best gynaecologist in Moradabad",
    "top gynaecologist Moradabad",
    "lady gynaecologist Moradabad",
    "IVF specialist Moradabad",
    "laparoscopic surgeon Moradabad",
    "pregnancy doctor Moradabad",
    "women's health expert Moradabad",
    "Dr. Priyanka Pachauri",
    "top rated lady doctor Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/top-rated-gynaecologist-moradabad",
  },

  openGraph: {
    title: "Top Rated Gynaecologist in Moradabad | Dr. Priyanka Pachauri",
    description:
      "Looking for the top rated gynaecologist in Moradabad? Dr. Priyanka Pachauri offers expert gynaecology, pregnancy, IVF & laparoscopy care. Call +91 90797 65578.",
    url: "https://www.gynaecologistmoradabad.com/top-rated-gynaecologist-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Top Rated Gynaecologist in Moradabad | Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Top Rated Gynaecologist in Moradabad | Dr. Priyanka Pachauri",
    description:
      "Looking for the top rated gynaecologist in Moradabad? Dr. Priyanka Pachauri offers expert gynaecology, pregnancy, IVF & laparoscopy care. Call +91 90797 65578.",
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