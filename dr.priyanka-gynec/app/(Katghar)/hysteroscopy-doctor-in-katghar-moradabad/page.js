
import React from "react";
import Content from "./Content";

// SEO METADATA – Hysteroscopy Doctor in Katghar, Moradabad
export const metadata = {
  title:
    "Hysteroscopy Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",

  description:
    "Looking for a hysteroscopy doctor in Katghar, Moradabad? Dr. Priyanka Pachauri offers diagnostic hysteroscopy and polypectomy without cuts, for bleeding, infertility and uterine problems.",

  keywords: [
    "hysteroscopy doctor in Katghar Moradabad",
    "hysteroscopy Moradabad",
    "diagnostic hysteroscopy Moradabad",
    "hysteroscopic polypectomy Moradabad",
    "uterine polyp removal Moradabad",
    "hysteroscopy for infertility",
    "hysteroscopy for abnormal bleeding",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "laparoscopic surgeon Moradabad",
    "endoscopic uterus examination",
    "uterine septum treatment",
    "intrauterine adhesions treatment",
    "fertility specialist Moradabad",
    "lady doctor for hysteroscopy",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/hysteroscopy-doctor-in-katghar-moradabad",
  },

  openGraph: {
    title:
      "Hysteroscopy Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",
    description:
      "Learn about diagnostic hysteroscopy and hysteroscopic polypectomy with Dr. Priyanka Pachauri in Katghar, Moradabad.",
    url: "https://www.gynaecologistmoradabad.com/hysteroscopy-doctor-in-katghar-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Hysteroscopy Doctor in Katghar, Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Hysteroscopy Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",
    description:
      "Diagnostic hysteroscopy and uterine polyp treatment options in Katghar, Moradabad.",
    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },

  other: {
    language: "English",
    "geo.region": "IN-UP",
    "geo.placename": "Katghar, Moradabad",
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
