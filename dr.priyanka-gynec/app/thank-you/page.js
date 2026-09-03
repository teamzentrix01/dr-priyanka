import Content from "./Content";

export const metadata = {
  title: "Thank You | Dr. Priyanka Gynaecologist – Appointment Request Received",

  description:
    "Thank you for reaching out to Dr. Priyanka Gynaecologist. Our team has received your request and will get in touch with you shortly to confirm your appointment.",


  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/thank-you",
  },

  openGraph: {
    type: "website",
    url: "https://www.gynaecologistmoradabad.com/thank-you",

    title: "Thank You | Dr. Priyanka Gynaecologist – Appointment Request Received",

    description:
      "Thank you for reaching out to Dr. Priyanka Gynaecologist. Our team has received your request and will get in touch with you shortly to confirm your appointment.",

    images: [
      {
        url: "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786522486/ChatGPT_Image_Aug_12_2026_01_44_14_PM_eovk1z.png",
        width: 1200,
        height: 630,
        alt: "Thank You | Dr. Priyanka Gynaecologist",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",

    title: "Thank You | Dr. Priyanka Gynaecologist – Appointment Request Received",

    description:
      "Thank you for reaching out to Dr. Priyanka Gynaecologist. Our team has received your request and will get in touch with you shortly to confirm your appointment.",

    images: [
      "https://res.cloudinary.com/dv9tivfvq/image/upload/v1786522486/ChatGPT_Image_Aug_12_2026_01_44_14_PM_eovk1z.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function ThankYou() {
  return (
    <div>
      <Content />
    </div>
  );
}