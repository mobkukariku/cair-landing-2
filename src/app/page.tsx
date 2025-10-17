import Footer from "@/sections/footer/ui/Footer";
import { MainSection } from "@/sections/main/ui/MainSection";
import Form from "@/sections/contact-form/ui/MainSection";
import { ServiceSection } from "@/sections/services/ui/ServiceSection";

export default function Home() {

  return (
      <div className={"h-screen overflow-y-scroll snap-y snap-mandatory "}>
        <MainSection />
        <ServiceSection />
        <Form/>
        <Footer />
      </div>
  );
}
