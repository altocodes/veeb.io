import { Metadata } from "next";
// components
import Output from "@/components/AboutPage/Output";

export const metadata: Metadata = {
  title: "О проекте | Veeb.io",
  description: "Veeb.io - about our service",
};

export default function About() {
  return (
    <section>
      <Output />
    </section>
  );
}
