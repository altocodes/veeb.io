import { Metadata } from "next";
// styles
import styles from "@/assets/styles/pages/beta.module.scss";
// components
import Heading from "@/components/BetaPage/Heading";
import Form from "@/components/BetaPage/Form";


export const metadata: Metadata = {
  title: "Запись на бета тест | Veeb.io",
  description: "Veeb.io - sign up for beta test of our service",
};

export default function Beta() {
  return (
    <section className={styles.beta}>
      <Heading />
      <Form />
    </section>
  );
}
