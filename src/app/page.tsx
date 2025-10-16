import {Header} from "@/sections/header/ui/Header";
import Footer from "@/sections/footer/ui/Footer";
import { MainSection } from "@/sections/main/ui/MainSection";
import Form from "@/sections/contact-form/ui/MainSection";
import { ServiceSection } from "@/sections/services/ui/ServiceSection";

export default function Home() {

  return (
      <div
      >
        <Header />
        <MainSection />
        <ServiceSection />
        <Form/>
        <Footer />
      </div>
  );
}
