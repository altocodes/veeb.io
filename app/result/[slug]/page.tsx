import { Metadata } from "next";
// components
import Output from "@/components/ResultPage/Output";
// helper functions
import { getAddress } from "@/services/getData";
//
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Информация об организации | Veeb.io",
  description: "Veeb.io - search for contacts and insiders for sellers",
};

export default async function Result({ params }: { params: { slug: string } }) {
  try {
    const response = await getAddress(params.slug);
    return (
      <section>
        <Output response={response} url={params.slug} />
      </section>
    );
  } catch (error) {
    notFound();
  }
}
