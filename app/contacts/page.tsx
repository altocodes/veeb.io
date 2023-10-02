import { Metadata } from "next";
// components
import Output from "@/components/ContactsPage/Output";

export const metadata: Metadata = {
  title: "Контакты | Veeb.io",
  description: "Veeb.io - check all contacts of your companies for export",
};

export default function Contacts() {
  return (
    <section>
      <Output />
    </section>
  );
}
