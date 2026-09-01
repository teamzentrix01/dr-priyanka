
import Aboutus from "@/components/Aboutus";
import Content from "./Content";

export const metadata = {
  title:
    "Space Build – About Us | Bespoke Interior Design & Spatial Flow Consultants",

  description:
    "Discover Space Build’s story – a team of expert designers and architects redefining residential and commercial interiors with timeless elegance, spatial harmony, and bespoke design solutions.",

  keywords:
    "Space Build, about Space Build, interior design consultants, luxury interiors, bespoke design, residential interiors, commercial interiors, spatial flow consultant, elegant design, modern interior solutions",

  alternates: {
    canonical: "https://www.spacebuild.co.in/slug",
  },

  openGraph: {
    type: "website",
    url: "https://www.spacebuild.co.in/slug",

    title:
      "Space Build – About Us | Bespoke Interior Design & Spatial Flow Consultants",

    description:
      "Discover Space Build’s story – a team of expert designers and architects redefining residential and commercial interiors with timeless elegance, spatial harmony, and bespoke design solutions.",

    images: [
      {
        url: "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space%20Buildlogo_bmzk0r.png",
        width: 1200,
        height: 630,
        alt:
          "Space Build – About Us | Bespoke Interior Design & Spatial Flow Consultants",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@SpaceBuild",

    title:
      "Space Build – About Us | Bespoke Interior Design & Spatial Flow Consultants",

    description:
      "Discover Space Build’s story – a team of expert designers and architects redefining residential and commercial interiors with timeless elegance, spatial harmony, and bespoke design solutions.",

    images: [
      "https://res.cloudinary.com/da12wzxoq/image/upload/v1764841085/Space%20Buildlogo_bmzk0r.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function About() {
  return (
    <div className="min-h-screen bg-[#FFF1E0]">
      <Aboutus />
      <Content />
    </div>
  );
}

