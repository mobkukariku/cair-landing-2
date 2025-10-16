import React from "react";
import LeftIntro from "./LeftIntro";
import ContactForm from "./ContactForm";
import { Container } from "@/components/landing/ui/Container";

export default function Form() {
  return (
    <Container>
      <main className="flex items-center justify-center py-32 text-white">
      <div
        className="
          w-full
          flex flex-col lg:flex-row
          items-center justify-between
          gap-12 lg:gap-20
        "
      >
        <div className="flex-1 flex justify-center lg:justify-start">
          <LeftIntro />
        </div>
        <div className="flex-1 flex justify-center lg:justify-end w-full">
          <ContactForm />
        </div>
      </div>
    </main>
    </Container>
  );
}
