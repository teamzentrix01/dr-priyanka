import Content from "./Content";
export const metadata = {
  title:
    "Services | Dr. Priyanka Gynaecologist – Gynaecologistology, Fertility, IVF & Laparoscopy in Moradabad",

  description:
    "Explore the full range of care at Dr. Priyanka Gynaecologist — 3D laparoscopy, fertility & IVF, pregnancy and birthing support, antenatal services, and advanced Gynaecologistological surgeries, all delivered with expertise and genuine warmth in Moradabad.",

  keywords:
    "Dr. Priyanka Gynaecologist services, Gynaecologistology services Moradabad, IVF Moradabad, fertility treatment, laparoscopic surgery, pregnancy care, antenatal services, normal delivery, laparoscopic hysterectomy, endometriosis surgery, paediatric care Moradabad",

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/services",
  },

  openGraph: {
    type: "website",
    url: "https://www.gynaecologistmoradabad.com/services",

    title:
      "Services | Dr. Priyanka Gynaecologist – Gynaecologistology, Fertility, IVF & Laparoscopy in Moradabad",

    description:
      "Explore the full range of care at Dr. Priyanka Gynaecologist — 3D laparoscopy, fertility & IVF, pregnancy and birthing support, antenatal services, and advanced Gynaecologistological surgeries, all delivered with expertise and genuine warmth in Moradabad.",

    images: [
      {
        url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786522486/ChatGPT_Image_Aug_12_2026_01_44_14_PM_eovk1z.png",
        width: 1200,
        height: 630,
        alt: "Services | Dr. Priyanka Gynaecologist – Gynaecologistology, Fertility, IVF & Laparoscopy",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaecologist",

    title:
      "Services | Dr. Priyanka Gynaecologist – Gynaecologistology, Fertility, IVF & Laparoscopy in Moradabad",

    description:
      "Explore the full range of care at Dr. Priyanka Gynaecologist — 3D laparoscopy, fertility & IVF, pregnancy and birthing support, antenatal services, and advanced Gynaecologistological surgeries, all delivered with expertise and genuine warmth in Moradabad.",

    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786522486/ChatGPT_Image_Aug_12_2026_01_44_14_PM_eovk1z.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function Services() {
  return (
    <div>
      <Content />
    </div>
  );
}