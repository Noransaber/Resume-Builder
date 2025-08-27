import { Hero } from './(home)/sections/Hero';
import { Features } from './(home)/sections/Features';
import { ResumeTemplates } from './(home)/sections/ResumeTemplates';
import { Proof } from './(home)/sections/Proof';
import { CTA } from './(home)/sections/CTA';
import { Pricing } from './(home)/sections/Pricing';
import { Stats } from './(home)/sections/Stats';
import { FAQ } from './(home)/sections/FAQ';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
      <ResumeTemplates />
      <Proof />
      <CTA />
      <Pricing />
      <Stats />
      <FAQ />
    </main>
  );
}


