import React from "react";
import Content from "./Content";

// SEO METADATA – HYSTEROSCOPY TREATMENT IN MORADABAD
export const metadata = {
  title: "Hysteroscopy Treatment in Moradabad | Dr. Priyanka Gynaec",

  description:
    "Advanced diagnostic & operative hysteroscopy in Moradabad for abnormal bleeding, polyps & infertility evaluation. Painless, scarless care by Dr. Priyanka Gynaec.",

  keywords: [
    "hysteroscopy treatment Moradabad",
    "hysteroscopy doctor Moradabad",
    "diagnostic hysteroscopy Moradabad",
    "operative hysteroscopy Moradabad",
    "abnormal bleeding evaluation",
    "hysteroscopy for infertility",
    "best Gynaecologist for hysteroscopy",
    "hysteroscopy cost Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/hysteroscopy-treatment-in-moradabad",
  },

  openGraph: {
    title: "Hysteroscopy Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Advanced diagnostic & operative hysteroscopy in Moradabad for abnormal bleeding, polyps & infertility evaluation. Painless, scarless care by Dr. Priyanka Gynaec.",
    url: "https://www.gynaecologistmoradabad.com/hysteroscopy-treatment-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Hysteroscopy Treatment in Moradabad | Dr. Priyanka Gynaec",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Hysteroscopy Treatment in Moradabad | Dr. Priyanka Gynaec",
    description:
      "Advanced diagnostic & operative hysteroscopy in Moradabad for abnormal bleeding, polyps & infertility evaluation. Painless, scarless care by Dr. Priyanka Gynaec.",
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