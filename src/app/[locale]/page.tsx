import Form from '@/sections/contact-form/ui/MainSection';
import Footer from '@/sections/footer/ui/Footer';
import { Header } from '@/sections/header/ui/Header';
import { MainSection } from '@/sections/main/ui/MainSection';
import { PartnersSection } from '@/sections/partners/ui/PartnersSection';
import { ServiceSection } from '@/sections/services/ui/ServiceSection';
import {WhyUsSection} from "@/sections/why-us/ui/WhyUsSection";

export default function Home() {
  return (
      <div className="h-screen overflow-y-scroll min-[768px]:snap-y min-[768px]:snap-mandatory">
          <Header />
          <MainSection />
          <ServiceSection />
          <WhyUsSection />
          <PartnersSection />
          <Form />
          <Footer />
    </div>
  );
}
