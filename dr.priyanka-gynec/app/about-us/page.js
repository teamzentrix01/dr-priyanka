
import Content from "./Content";

export const metadata = {
  title:
    "About Us | Dr. Priyanka Gynaecologist – Expert Gynaecologistology, IVF & Pregnancy Care in Moradabad",

  description:
    "Discover the story behind Dr. Priyanka Gynaecologist – a trusted women's health center in Moradabad offering advanced Gynaecologistology, 3D laparoscopy, fertility & IVF, and personalized pregnancy care with genuine warmth and world-class expertise.",

  keywords:
    "Dr. Priyanka Gynaecologist, about Dr. Priyanka Gynaecologist, Gynaecologistologist Moradabad, IVF Moradabad, fertility specialist, laparoscopy surgeon, pregnancy care, women's health center, best Gynaecologistologist Moradabad, obstetrician Moradabad",

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/about-us",
  },

  openGraph: {
    type: "website",
    url: "https://www.gynaecologistmoradabad.com/about-us",

    title:
      "About Us | Dr. Priyanka Gynaecologist – Expert Gynaecologistology, IVF & Pregnancy Care in Moradabad",

    description:
      "Discover the story behind Dr. Priyanka Gynaecologist – a trusted women's health center in Moradabad offering advanced Gynaecologistology, 3D laparoscopy, fertility & IVF, and personalized pregnancy care with genuine warmth and world-class expertise.",

    images: [
      {
        url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786522486/ChatGPT_Image_Aug_12_2026_01_44_14_PM_eovk1z.png",
        width: 1200,
        height: 630,
        alt: "About Us | Dr. Priyanka Gynaecologist – Expert Gynaecologistology, IVF & Pregnancy Care",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaecologist",

    title:
      "About Us | Dr. Priyanka Gynaecologist – Expert Gynaecologistology, IVF & Pregnancy Care in Moradabad",

    description:
      "Discover the story behind Dr. Priyanka Gynaecologist – a trusted women's health center in Moradabad offering advanced Gynaecologistology, 3D laparoscopy, fertility & IVF, and personalized pregnancy care with genuine warmth and world-class expertise.",

    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786522486/ChatGPT_Image_Aug_12_2026_01_44_14_PM_eovk1z.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function About() {
  return (
    <div >
      
      <Content />
    </div>
  );
}