import React from "react";
import Content from "./Content";

// SEO METADATA – BEST MATERNITY DOCTOR IN INDIA | DR. PRIYANKA PACHAURI
export const metadata = {
  title: "Best Maternity Doctor in India | Dr. Priyanka Pachauri",
  description:
    "Searching for a maternity doctor? Consult Dr. Priyanka Pachauri in Moradabad for pregnancy care, antenatal guidance and delivery planning.",
  keywords: [
    "best maternity doctor in India",
    "maternity doctor India",
    "maternity doctor Moradabad",
    "pregnancy specialist India",
    "antenatal care doctor India",
    "delivery doctor India",
    "maternity specialist Moradabad",
    "pregnancy consultation Moradabad",
    "gynaecologist Moradabad",
    "Dr. Priyanka Pachauri"
  ],
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/best-maternity-doctor-in-india",
  },
  openGraph: {
    title: "Best Maternity Doctor in India | Dr. Priyanka Pachauri",
    description:
      "Searching for a maternity doctor? Consult Dr. Priyanka Pachauri in Moradabad for pregnancy care, antenatal guidance and delivery planning.",
    url: "https://www.gynaecologistmoradabad.com/best-maternity-doctor-in-india",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Best Maternity Doctor in India | Dr. Priyanka Pachauri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Best Maternity Doctor in India | Dr. Priyanka Pachauri",
    description:
      "Searching for a maternity doctor? Consult Dr. Priyanka Pachauri in Moradabad for pregnancy care, antenatal guidance and delivery planning.",
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