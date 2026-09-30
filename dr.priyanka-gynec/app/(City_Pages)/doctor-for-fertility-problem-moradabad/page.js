import React from "react";
import Content from "./Content";

// SEO METADATA – DOCTOR FOR FERTILITY PROBLEM IN MORADABAD
export const metadata = {
  title: "Doctor for Fertility Problem in Moradabad | Dr. Priyanka Pachauri",

  description:
    "Struggling to conceive? Consult Dr. Priyanka Pachauri, fertility & gynaecology doctor in Moradabad, for tests, IUI & IVF. Call +91 90797 65578.",

  keywords: [
    "doctor for fertility problem Moradabad",
    "fertility specialist Moradabad",
    "infertility treatment Moradabad",
    "IVF centre Moradabad",
    "IUI treatment Moradabad",
    "male infertility treatment Moradabad",
    "PCOS and fertility treatment",
    "best gynaecologist in Moradabad",
    "low AMH treatment",
    "Dr. Priyanka Pachauri Moradabad",
  ],

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/doctor-for-fertility-problem-in-moradabad",
  },

  openGraph: {
    title: "Doctor for Fertility Problem in Moradabad | Dr. Priyanka Pachauri",
    description:
      "Struggling to conceive? Consult Dr. Priyanka Pachauri, fertility & gynaecology doctor in Moradabad, for tests, IUI & IVF. Call +91 90797 65578.",
    url: "https://www.gynaecologistmoradabad.com/doctor-for-fertility-problem-in-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor for Fertility Problem in Moradabad | Dr. Priyanka Pachauri",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Doctor for Fertility Problem in Moradabad | Dr. Priyanka Pachauri",
    description:
      "Struggling to conceive? Consult Dr. Priyanka Pachauri, fertility & gynaecology doctor in Moradabad, for tests, IUI & IVF. Call +91 90797 65578.",
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