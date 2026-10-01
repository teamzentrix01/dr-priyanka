import React from "react";
import Content from "./Content";

// SEO METADATA - DOCTOR FOR BABY GROWTH CHECK
export const metadata = {
  title: "Doctor for Baby Growth Check | Dr. Priyanka, Moradabad",
  description:
    "Consult Dr. Priyanka Pachauri in Moradabad for pregnancy monitoring and baby growth checkups.",
  keywords: [
    "doctor for baby growth check Moradabad",
    "baby growth checkup doctor",
    "pregnancy growth scan Moradabad",
    "fetal growth checkup doctor",
    "antenatal care Moradabad",
    "pregnancy monitoring doctor",
    "baby growth scan consultation",
    "Dr. Priyanka Pachauri Moradabad",
  ],
  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/doctor-for-baby-growth-check-moradabad",
  },
  openGraph: {
    title: "Doctor for Baby Growth Check | Dr. Priyanka, Moradabad",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad for pregnancy monitoring and baby growth checkups.",
    url: "https://www.gynaecologistmoradabad.com/doctor-for-baby-growth-check-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor for Baby Growth Check | Dr. Priyanka, Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Doctor for Baby Growth Check | Dr. Priyanka, Moradabad",
    description:
      "Consult Dr. Priyanka Pachauri in Moradabad for pregnancy monitoring and baby growth checkups.",
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