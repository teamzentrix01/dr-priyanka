import Content from "./Content";
export const metadata = {
  title:
    "Our Services | Dr. Priyanka Pachauri – Best Gynaecologist in Moradabad",

  description:
    "Explore comprehensive gynaecological care by Dr. Priyanka Pachauri in Moradabad — antenatal & postnatal care, high-risk pregnancy management, laparoscopic gynaecological surgery, fertility & IVF, and menstrual disorder treatment.",

  keywords:
    "gynaecologist services Moradabad, best gynaecologist Moradabad, laparoscopic surgery Moradabad, IVF fertility treatment Moradabad, high-risk pregnancy care, antenatal postnatal services, menstrual disorder treatment, normal delivery Moradabad, endometriosis treatment",

  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/services",
  },

  openGraph: {
    type: "website",
    url: "https://www.gynaecologistmoradabad.com/services",

    title:
      "Our Services | Dr. Priyanka Pachauri – Best Gynaecologist in Moradabad",

    description:
      "From fertility & IVF to advanced laparoscopic surgery and high-risk pregnancy care — explore the full range of women's healthcare services by Dr. Priyanka Pachauri in Moradabad.",

    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "Our Services | Dr. Priyanka Pachauri – Best Gynaecologist in Moradabad",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",

    title:
      "Our Services | Dr. Priyanka Pachauri – Best Gynaecologist in Moradabad",

    description:
      "Comprehensive gynaecological care — laparoscopic surgery, fertility & IVF, high-risk pregnancy management, and menstrual disorder treatment in Moradabad.",

    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
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