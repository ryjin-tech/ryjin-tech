import { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Us | RYJIN TECHNOLOGY",
  description: "Get in touch with RYJIN TECHNOLOGY. Let's talk about your next high-performance digital system. Phone: +91 9903556882.",
  openGraph: {
    title: "Contact RYJIN TECHNOLOGY",
    description: "Start your high-performance digital transformation today.",
  }
};

export default function ContactPage() {
  return <ContactContent />;
}
