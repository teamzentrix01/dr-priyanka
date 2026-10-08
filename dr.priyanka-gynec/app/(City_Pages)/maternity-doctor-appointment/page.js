import Content from "./Content";

export const metadata = {
  title: "maternity doctor appointment | Dr. Priyanka Pachauri",
  description:
    "Book a maternity doctor appointment with Dr. Priyanka Pachauri in Moradabad for pregnancy consultation and maternity care.",
  keywords: [
    "maternity doctor appointment",
    "maternity doctor appointment Moradabad",
    "pregnancy doctor appointment Moradabad",
    "book maternity doctor consultation",
    "obstetrician appointment Moradabad",
    "antenatal appointment Moradabad",
    "pregnancy consultation booking",
    "maternity clinic appointment",
    "gynaecologist appointment for pregnancy",
    "Dr. Priyanka Pachauri appointment",
  ],
  alternates: {
    canonical:
      "https://www.gynaecologistmoradabad.com/maternity-doctor-appointment",
  },
  openGraph: {
    title: "maternity doctor appointment | Dr. Priyanka Pachauri",
    description:
      "Book a maternity doctor appointment with Dr. Priyanka Pachauri in Moradabad for pregnancy consultation and maternity care.",
    url: "https://www.gynaecologistmoradabad.com/maternity-doctor-appointment",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "maternity doctor appointment | Dr. Priyanka Pachauri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "maternity doctor appointment | Dr. Priyanka Pachauri",
    description:
      "Book a maternity doctor appointment with Dr. Priyanka Pachauri in Moradabad for pregnancy consultation and maternity care.",
    images: [
      "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
    ],
  },
  icons: { icon: "/favicon.ico" },
};

export default function Page() {
  return (
    <main>
      <Content />
    </main>
  );
}
