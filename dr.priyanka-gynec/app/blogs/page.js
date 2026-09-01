import Content from "./Content";

export const metadata = {
  title:
    "Blogs | Dr. Priyanka Gynaecologist – Women's Health, Fertility & Pregnancy Insights",

  description:
    "Explore expert articles from Dr. Priyanka Gynaecologist on Gynaecologistology, fertility & IVF, laparoscopic surgery, pregnancy, and women's health — practical guidance from Moradabad's trusted specialists.",

  keywords:
    "Dr. Priyanka Gynaecologist blog, Gynaecologistology blog, fertility blog, IVF articles, PCOS treatment, endometriosis surgery, pregnancy guide Moradabad, women's health articles, laparoscopy blog, obstetrician Moradabad",

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/blogs",
  },

  openGraph: {
    type: "website",
    url: "https://www.gynaecologistmoradabad.com/blogs",

    title:
      "Blogs | Dr. Priyanka Gynaecologist – Women's Health, Fertility & Pregnancy Insights",

    description:
      "Explore expert articles from Dr. Priyanka Gynaecologist on Gynaecologistology, fertility & IVF, laparoscopic surgery, pregnancy, and women's health — practical guidance from Moradabad's trusted specialists.",

    images: [
      {
        url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786522486/ChatGPT_Image_Aug_12_2026_01_44_14_PM_eovk1z.png",
        width: 1200,
        height: 630,
        alt: "Blogs | Dr. Priyanka Gynaecologist – Women's Health, Fertility & Pregnancy Insights",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaecologist",

    title:
      "Blogs | Dr. Priyanka Gynaecologist – Women's Health, Fertility & Pregnancy Insights",

    description:
      "Explore expert articles from Dr. Priyanka Gynaecologist on Gynaecologistology, fertility & IVF, laparoscopic surgery, pregnancy, and women's health — practical guidance from Moradabad's trusted specialists.",

    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786522486/ChatGPT_Image_Aug_12_2026_01_44_14_PM_eovk1z.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function Blogs() {
  return (
    <div>
      <Content />
    </div>
  );
}