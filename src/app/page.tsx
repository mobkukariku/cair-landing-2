import Form from '@/sections/contact-form/ui/MainSection';
import Footer from '@/sections/footer/ui/Footer';
import { Header } from '@/sections/header/ui/Header';
import { MainSection } from '@/sections/main/ui/MainSection';
import { PartnersSection } from '@/sections/partners/ui/PartnersSection';
import { ServiceSection } from '@/sections/services/ui/ServiceSection';

export default function Home() {
  return (
      <div className={"h-screen overflow-y-scroll snap-y snap-mandatory "}>
          <MainSection />
          <ServiceSection />
          <PartnersSection />
          <Form />
          <Footer />
    </div>
  );
}
