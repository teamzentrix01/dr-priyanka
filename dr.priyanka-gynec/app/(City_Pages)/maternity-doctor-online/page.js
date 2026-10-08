import Content from "./Content";

export const metadata = {
  title: "Maternity Doctor Online | Dr. Priyanka Pachauri",
  description:
    "Looking for a maternity doctor online? Contact Dr. Priyanka Pachauri in Moradabad to ask about available pregnancy consultation options.",
  keywords: [
    "maternity doctor online",
    "online maternity doctor consultation",
    "pregnancy doctor online consultation",
    "online pregnancy consultation Moradabad",
    "maternity care doctor online",
    "online antenatal consultation",
    "obstetrician online consultation",
    "pregnancy gynaecologist online",
    "maternity consultation Moradabad",
    "Dr. Priyanka Pachauri online consultation",
  ],
  alternates: {
    canonical: "https://www.gynaecologistmoradabad.com/maternity-doctor-online",
  },
  openGraph: {
    title: "maternity doctor online | Dr. Priyanka Pachauri",
    description:
      "Looking for a maternity doctor online? Contact Dr. Priyanka Pachauri in Moradabad to ask about available pregnancy consultation options.",
    url: "https://www.gynaecologistmoradabad.com/maternity-doctor-online",
    siteName: "Dr. Priyanka Gynaec",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/yu4j3qdc/image/upload/v1788252804/dr.priyanka.log-10kb.jpg",
        width: 1200,
        height: 630,
        alt: "maternity doctor online | Dr. Priyanka Pachauri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DrPriyankaGynaec",
    title: "maternity doctor online | Dr. Priyanka Pachauri",
    description:
      "Looking for a maternity doctor online? Contact Dr. Priyanka Pachauri in Moradabad to ask about available pregnancy consultation options.",
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
