import { Container } from '@/components/landing/ui/Container';
import ContactForm from './ContactForm';
import LeftIntro from './LeftIntro';

export default function Form() {
  return (
      <section id={'contact'} className={"h-screen flex flex-col snap-start justify-center items-center"}>
          <Container>
              <div className='flex items-center justify-center  text-white'>
                  <div
                      className='
          w-full
          flex flex-col lg:flex-row
          items-center justify-between
          gap-12 lg:gap-20'
                  >
                      <div className='flex-1 flex justify-center lg:justify-start'>
                          <LeftIntro />
                      </div>
                      <div className='flex-1 flex justify-center lg:justify-end w-full'>
                          <ContactForm />
                      </div>
                  </div>
              </div>
          </Container>
      </section>
  );
}
