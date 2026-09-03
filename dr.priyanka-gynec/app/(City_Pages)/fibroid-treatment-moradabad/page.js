import React from "react";
import Content from "./Content";

// SEO METADATA – FIBROID TREATMENT IN MORADABAD
export const metadata = {
  title: "Fibroid Treatment in Moradabad | Dr. Priyanka Gynaec",

  description:
    "Advanced fibroid treatment in Moradabad with uterus-preserving laparoscopic surgery & personalized care. Expert care by Dr. Priyanka Gynaec. Book today.",

  keywords: [
    "fibroid treatment Moradabad",
    "uterine fibroid doctor Moradabad",
    "fibroid surgery Moradabad",
    "best Gynaecologist for fibroids",
    "fibroid removal Moradabad",
    "non surgical fibroid treatment",
    "laparoscopic fibroid surgeon",
    "fibroid treatment cost Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/fibroid-treatment-in-moradabad",
  },

  openGraph: {
    title: "Fibroid Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Advanced fibroid treatment in Moradabad with uterus-preserving laparoscopic surgery & personalized care. Expert care by Dr. Priyanka Gynaec. Book today.",
    url: "https://www.gynaecologistmoradabad.com/fibroid-treatment-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Fibroid Treatment in Moradabad | Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Fibroid Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Advanced fibroid treatment in Moradabad with uterus-preserving laparoscopic surgery & personalized care. Expert care by Dr. Priyanka Gynaec. Book today.",
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