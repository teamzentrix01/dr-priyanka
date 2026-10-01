import React from "react";
import Content from "./Content";

// SEO METADATA – BABY CHECK-UP IN PREGNANCY
export const metadata = {
  title:
    "Doctor for Baby Check-Up in Pregnancy | Dr. Priyanka, Moradabad",
  description:
    "Need a baby check-up in pregnancy? Dr. Priyanka Pachauri offers 3D/4D scans & antenatal care in Moradabad. Call +91 90797 65578",
  keywords: [
    "doctor for baby check up pregnancy",
    "baby check-up during pregnancy Moradabad",
    "pregnancy ultrasound Moradabad",
    "3D 4D ultrasound Moradabad",
    "antenatal care Moradabad",
    "fetal growth scan",
    "anomaly scan pregnancy",
    "best gynaecologist in Moradabad",
    "high-risk pregnancy doctor Moradabad",
    "Dr. Priyanka Pachauri Moradabad",
  ],
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/baby-check-up-pregnancy-moradabad",
  },
  openGraph: {
    title:
      "Doctor for Baby Check-Up in Pregnancy | Dr. Priyanka, Moradabad",
    description:
      "Need a baby check-up in pregnancy? Dr. Priyanka Pachauri offers 3D/4D scans & antenatal care in Moradabad. Call +91 90797 65578",
    url: "https://www.gynaecologistmoradabad.com/baby-check-up-pregnancy-moradabad",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor for Baby Check-Up in Pregnancy | Dr. Priyanka, Moradabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title:
      "Doctor for Baby Check-Up in Pregnancy | Dr. Priyanka, Moradabad",
    description:
      "Need a baby check-up in pregnancy? Dr. Priyanka Pachauri offers 3D/4D scans & antenatal care in Moradabad. Call +91 90797 65578",
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