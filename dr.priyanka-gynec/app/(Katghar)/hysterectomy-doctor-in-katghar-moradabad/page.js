
import React from "react";
import Content from "./Content";

// SEO METADATA – Hysterectomy Doctor in Katghar, Moradabad
export const metadata = {
  title:
    "Hysterectomy Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",

  description:
    "Looking for a hysterectomy doctor in Katghar, Moradabad? Dr. Priyanka Pachauri offers laparoscopic (keyhole) hysterectomy with honest advice, 3D visualisation and fast recovery.",

  keywords: [
    "hysterectomy doctor in Katghar Moradabad",
    "hysterectomy surgeon Moradabad",
    "laparoscopic hysterectomy Moradabad",
    "uterus removal surgery Moradabad",
    "keyhole hysterectomy Moradabad",
    "Dr. Priyanka Pachauri",
    "gynaecologist in Moradabad",
    "laparoscopic surgeon Moradabad",
    "fibroid treatment Moradabad",
    "heavy periods treatment Moradabad",
    "uterine prolapse treatment Moradabad",
    "endometriosis surgery Moradabad",
    "hysterectomy recovery tips",
    "3D laparoscopy Moradabad",
    "lady doctor for hysterectomy",
  ],

  authors: [{ name: "Dr. Priyanka Gynaec" }],

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/hysterectomy-doctor-in-katghar-moradabad",
  },

  openGraph: {
    title:
      "Hysterectomy Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",
    description:
      "Explore laparoscopic hysterectomy options in Katghar, Moradabad with Dr. Priyanka Pachauri. Get honest guidance and personalised surgical care.",
    url: "https://www.gynaecologistmoradabad.com/hysterectomy-doctor-in-katghar-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Priyanka Pachauri – Hysterectomy Doctor in Katghar, Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Hysterectomy Doctor in Katghar Moradabad – Dr. Priyanka Pachauri",
    description:
      "Laparoscopic hysterectomy guidance and personalised gynaecological care in Katghar, Moradabad.",
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
