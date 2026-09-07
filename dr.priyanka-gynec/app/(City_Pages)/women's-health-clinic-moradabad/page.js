import React from "react";
import Content from "./Content";


// SEO METADATA – WOMEN'S HEALTH CLINIC IN MORADABAD
export const metadata = {
  title: "Best Women's Health Clinic in Moradabad | Hospital Level Maternity & Gynaecology Care",


  description:
    "Trusted women's health clinic in Moradabad offering hospital level maternity, delivery, fertility, IVF and laparoscopic surgery care with coordinated departments and 24x7 emergency readiness.",


  keywords: [
    "women's health clinic Moradabad",
    "best gynaecologist in Moradabad",
    "maternity hospital Moradabad",
    "delivery hospital Moradabad",
    "fertility and IVF centre Moradabad",
    "laparoscopic surgery Moradabad",
    "high risk pregnancy care Moradabad",
    "emergency gynaecology Moradabad",
    "lady doctor Moradabad",
    "women's clinic near me Moradabad",
  ],


  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/womens-health-clinic-in-moradabad",
  },


  openGraph: {
    title: "Best Women's Health Clinic in Moradabad | Hospital Level Maternity & Gynaecology Care",
    description:
      "Trusted women's health clinic in Moradabad offering hospital level maternity, delivery, fertility, IVF and laparoscopic surgery care with coordinated departments and 24x7 emergency readiness.",
    url: "https://www.gynaecologistmoradabad.com/womens-health-clinic-in-moradabad",
    siteName: "Dr. Priyanka Pachauri",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Best Women's Health Clinic in Moradabad | Hospital Level Maternity & Gynaecology Care",
      },
    ],
  },


  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "Best Women's Health Clinic in Moradabad | Hospital Level Maternity & Gynaecology Care",
    description:
      "Trusted women's health clinic in Moradabad offering hospital level maternity, delivery, fertility, IVF and laparoscopic surgery care with coordinated departments and 24x7 emergency readiness.",
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