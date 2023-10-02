import { Metadata } from "next";
// components
import Output from "@/components/ListPage/Output";

export const metadata: Metadata = {
  title: "Список компаний | Veeb.io",
  description: "Veeb.io - check all list of all companies for export",
};

export default function List() {
  return (
    <section>
      <Output />
    </section>
  );
}
