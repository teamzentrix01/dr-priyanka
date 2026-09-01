import Content from "./Content";

export const metadata = {
  title:
    "About Us | Dr. Priyanka Pachauri – Best Gynaecologist in Moradabad",

  description:
    "Dr. Priyanka Pachauri is a trusted gynaecologist in Moradabad specializing in antenatal & postnatal care, high-risk pregnancies, laparoscopic gynaecological surgery, and menstrual disorder treatment — known for empathetic, safe-motherhood focused care.",

  keywords:
    "Dr. Priyanka Pachauri, best gynaecologist Moradabad, about Dr. Priyanka Gynaec, gynaecologist Moradabad, IVF Moradabad, fertility specialist, laparoscopy surgeon, high-risk pregnancy care, menstrual disorder treatment, obstetrician Moradabad",

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/about-us",
  },

  openGraph: {
    type: "website",
    url: "https://www.gynaecologistmoradabad.com/about-us",

    title:
      "About Us | Dr. Priyanka Pachauri – Best Gynaecologist in Moradabad",

    description:
      "Comprehensive care in antenatal & postnatal management, high-risk pregnancies, laparoscopic gynaecological surgeries, and menstrual disorders — with an empathetic, safe-motherhood focused approach.",

    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "About Us | Dr. Priyanka Pachauri – Best Gynaecologist in Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",

    title:
      "About Us | Dr. Priyanka Pachauri – Best Gynaecologist in Moradabad",

    description:
      "High-risk pregnancy care, laparoscopic gynaecological surgery & menstrual disorder treatment in Moradabad, delivered with empathy and safe-motherhood commitment.",

    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
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